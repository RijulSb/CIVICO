from __future__ import annotations

import argparse
import hashlib
import logging
import os
import re
from pathlib import Path
from typing import Iterable

import pandas as pd
from sqlalchemy import create_engine, text
from sqlalchemy.engine import Connection, Engine

LOG = logging.getLogger("civico.ingestion")

WARD_PROFILE_RENAME = {
    "City Name": "city_name",
    "Zone Name": "zone_name",
    "Ward Name": "ward_name",
    "Ward No.": "ward_id",
    "Area (in sq km)": "area_sq_km",
    "Total Population (in thousands)": "population_thousands",
    "Population - Male (in thousands)": "male_population_thousands",
    "Population - female (in thousands)": "female_population_thousands",
    "population - children aged 0-14 (in thousands)": "children_population_thousands",
    "Population - youth aged 15-24 (in thousands)": "youth_population_thousands",
    "Population - adults aged 25-60 (in thousands)": "adult_population_thousands",
    "Population - Senior citizens aged 60+": "senior_population_thousands",
    "Population - Senior citizens aged 60+ (in thousands)": "senior_population_thousands",
}

IHHL_RENAME = {
    "StateName": "state_name",
    "DistrictName": "district_name",
    "BlockName": "block_name",
    "GramPanchayatName": "gram_panchayat_name",
    "IHHLTotalAsPerDetails": "ihhl_total_as_per_details",
    "IHHLTotalAch": "ihhl_total_achieved",
    "Date": "observed_at",
}

WARD_REQUIRED = {
    "city_name",
    "zone_name",
    "ward_id",
    "area_sq_km",
    "population_thousands",
    "male_population_thousands",
    "female_population_thousands",
    "children_population_thousands",
    "youth_population_thousands",
}

IHHL_REQUIRED = set(IHHL_RENAME.values())
WARD_NUMERIC = {
    "area_sq_km",
    "population_thousands",
    "male_population_thousands",
    "female_population_thousands",
    "children_population_thousands",
    "youth_population_thousands",
    "adult_population_thousands",
    "senior_population_thousands",
}
IHHL_NUMERIC = {"ihhl_total_as_per_details", "ihhl_total_achieved"}


def normalize_column(name: str) -> str:
    value = re.sub(r"[^a-zA-Z0-9]+", "_", str(name).strip().lower()).strip("_")
    return value or "unnamed_column"


def normalized_columns(columns: Iterable[str]) -> list[str]:
    result = [normalize_column(column) for column in columns]
    if len(result) != len(set(result)):
        raise ValueError(f"Duplicate columns after normalization: {result}")
    return result


def sync_database_url(database_url: str) -> str:
    if database_url.startswith("postgresql+asyncpg://"):
        return database_url.replace("postgresql+asyncpg://", "postgresql+psycopg2://", 1)
    if database_url.startswith("postgresql://"):
        return database_url.replace("postgresql://", "postgresql+psycopg2://", 1)
    return database_url


def read_tab_file(path: Path) -> pd.DataFrame:
    if not path.is_file():
        raise FileNotFoundError(f"Source file not found: {path}")
    return pd.read_csv(path, sep="\t", encoding="utf-8-sig", na_values=["NA", "N/A", ""])


def require_columns(frame: pd.DataFrame, expected: set[str], source_name: str) -> None:
    missing = sorted(expected.difference(frame.columns))
    if missing:
        raise ValueError(f"{source_name} is missing required columns: {', '.join(missing)}")


def coerce_numeric(frame: pd.DataFrame, columns: set[str], source_name: str) -> None:
    for column in columns.intersection(frame.columns):
        frame[column] = pd.to_numeric(frame[column], errors="coerce")
        if column in WARD_REQUIRED or column in IHHL_REQUIRED:
            if frame[column].isna().any():
                raise ValueError(f"{source_name} has non-numeric or missing values in {column}")
        if (frame[column].dropna() < 0).any():
            raise ValueError(f"{source_name} has negative values in {column}")


def add_metadata(frame: pd.DataFrame, source_file: str, source_dataset: str) -> pd.DataFrame:
    result = frame.dropna(how="all").copy()
    result["source_dataset"] = source_dataset
    result["source_file"] = source_file
    result["source_row_number"] = result.index + 2
    result["ingested_at_utc"] = pd.Timestamp.now(tz="UTC")
    return result.reset_index(drop=True)


def load_ward_profile(path: Path) -> pd.DataFrame:
    frame = read_tab_file(path)
    frame.columns = normalized_columns(frame.columns)
    rename_by_normalized = {normalize_column(key): value for key, value in WARD_PROFILE_RENAME.items()}
    frame = frame.rename(columns=rename_by_normalized)
    require_columns(frame, WARD_REQUIRED, path.name)

    if frame["ward_id"].astype("string").str.strip().eq("").any():
        raise ValueError(f"{path.name} contains an empty ward_id")
    if frame["ward_id"].duplicated().any():
        raise ValueError(f"{path.name} contains duplicate ward_id values")

    coerce_numeric(frame, WARD_NUMERIC, path.name)
    frame["ward_id"] = frame["ward_id"].astype("string").str.strip()
    frame["ward_name"] = frame.get("ward_name", pd.Series(pd.NA, index=frame.index, dtype="string"))
    frame["ward_name"] = frame["ward_name"].astype("string")
    frame = add_metadata(frame, path.name, "bhubaneswar_ward_profile")
    frame["source_record_id"] = frame["ward_id"].map(lambda value: f"bhubaneswar-ward-{value}")
    return frame


def stable_record_id(row: pd.Series) -> str:
    values = "|".join(str(row[column]).strip() for column in [
        "state_name", "district_name", "block_name", "gram_panchayat_name", "observed_at"
    ])
    return hashlib.sha256(values.encode("utf-8")).hexdigest()


def load_ihhl_files(paths: list[Path]) -> pd.DataFrame:
    frames: list[pd.DataFrame] = []
    for path in paths:
        frame = read_tab_file(path)
        frame.columns = normalized_columns(frame.columns)
        rename_by_normalized = {normalize_column(key): value for key, value in IHHL_RENAME.items()}
        frame = frame.rename(columns=rename_by_normalized)
        require_columns(frame, IHHL_REQUIRED, path.name)
        coerce_numeric(frame, IHHL_NUMERIC, path.name)
        frame["observed_at"] = pd.to_datetime(frame["observed_at"], errors="coerce")
        if frame["observed_at"].isna().any():
            raise ValueError(f"{path.name} contains invalid dates")
        frame["source_quality_flag"] = "ok"
        anomaly = frame["ihhl_total_achieved"] > frame["ihhl_total_as_per_details"]
        frame.loc[anomaly, "source_quality_flag"] = "achieved_gt_reported_total"
        if anomaly.any():
            LOG.warning(
                "%s contains %s rows where achieved IHHL exceeds reported total; preserving source values",
                path.name,
                int(anomaly.sum()),
            )
        frame = add_metadata(frame, path.name, "odisha_ihhl")
        frame["source_record_id"] = frame.apply(stable_record_id, axis=1)
        frames.append(frame)

    combined = pd.concat(frames, ignore_index=True)
    if combined["source_record_id"].duplicated().any():
        raise ValueError("The IHHL files contain duplicate natural records")
    combined["ihhl_gap"] = combined["ihhl_total_as_per_details"] - combined["ihhl_total_achieved"]
    combined["achievement_ratio"] = combined["ihhl_total_achieved"].div(
        combined["ihhl_total_as_per_details"].where(combined["ihhl_total_as_per_details"] != 0)
    )
    return combined


def refresh_table(connection: Connection, table_name: str) -> None:
    if not re.fullmatch(r"stg_[a-z0-9_]+", table_name):
        raise ValueError(f"Unsafe staging table name: {table_name}")
    connection.execute(text(f'DROP TABLE IF EXISTS "{table_name}"'))


def write_table(connection: Connection, frame: pd.DataFrame, table_name: str, chunk_size: int) -> int:
    refresh_table(connection, table_name)
    frame.to_sql(
        table_name,
        connection,
        if_exists="replace",
        index=False,
        chunksize=chunk_size,
        method="multi",
    )
    return len(frame)


def resolve_ihhl_paths(data_dir: Path, explicit: list[Path] | None) -> list[Path]:
    if explicit:
        paths = explicit
    else:
        paths = [
            data_dir / "ihhl_boudh.tsv",
            data_dir / "ihhl_kalahandi.tsv",
            data_dir / "ihhl_khordha.tsv",
        ]
    missing = [str(path) for path in paths if not path.is_file()]
    if missing:
        raise FileNotFoundError("Missing IHHL files: " + ", ".join(missing))
    return paths


def ingest(
    data_dir: Path,
    database_url: str,
    ward_profile_file: Path | None,
    ihhl_files: list[Path] | None,
    chunk_size: int,
) -> None:
    ward_path = ward_profile_file or data_dir / "bhubaneswar_ward_profile.tsv"
    ihhl_paths = resolve_ihhl_paths(data_dir, ihhl_files)
    ward_frame = load_ward_profile(ward_path)
    ihhl_frame = load_ihhl_files(ihhl_paths)

    engine: Engine = create_engine(sync_database_url(database_url), pool_pre_ping=True, future=True)
    with engine.begin() as connection:
        ward_rows = write_table(connection, ward_frame, "stg_bhubaneswar_ward_profile", chunk_size)
        ihhl_rows = write_table(connection, ihhl_frame, "stg_ihhl_household_latrine", chunk_size)
        LOG.info("Loaded %s ward rows and %s IHHL rows", ward_rows, ihhl_rows)
    engine.dispose()
    LOG.info("CIVICO source ingestion completed successfully")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Load CIVICO Odisha source datasets into PostgreSQL staging tables")
    parser.add_argument("--data-dir", type=Path, default=Path("data/import"))
    parser.add_argument("--ward-profile-file", type=Path, default=None)
    parser.add_argument("--ihhl-file", type=Path, action="append", dest="ihhl_files")
    parser.add_argument("--database-url", default=os.getenv("DATABASE_URL"))
    parser.add_argument("--chunk-size", type=int, default=5000)
    parser.add_argument("--log-level", default="INFO")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    logging.basicConfig(
        level=getattr(logging, args.log_level.upper(), logging.INFO),
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )
    if not args.database_url:
        raise SystemExit("DATABASE_URL is required")
    if args.chunk_size < 1:
        raise SystemExit("--chunk-size must be greater than zero")
    ingest(args.data_dir, args.database_url, args.ward_profile_file, args.ihhl_files, args.chunk_size)


if __name__ == "__main__":
    main()
