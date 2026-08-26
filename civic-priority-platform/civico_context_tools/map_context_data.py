from __future__ import annotations

import argparse
import json
import logging
import os
from pathlib import Path
from urllib.parse import urlsplit

from sqlalchemy import create_engine, text
from sqlalchemy.engine import Connection, Engine

LOG = logging.getLogger("civico.context_mapping")


WARD_COUNT_SQL = text("SELECT COUNT(*) FROM stg_bhubaneswar_ward_profile")
SANITATION_COUNT_SQL = text("SELECT COUNT(*) FROM stg_ihhl_household_latrine")


WARD_INSERT_SQL = text(
    """
    INSERT INTO civic_ward_context (
        id, source_record_id, source_dataset, source_url, source_file, source_row_number,
        ingested_at_utc, city_name, zone_name, ward_id, ward_name, area_sq_km,
        population_thousands, male_population_thousands, female_population_thousands,
        children_population_thousands, youth_population_thousands,
        adult_population_thousands, senior_population_thousands
    )
    SELECT
        md5(s.source_record_id)::uuid,
        s.source_record_id,
        s.source_dataset,
        u.source_url,
        s.source_file,
        s.source_row_number,
        s.ingested_at_utc,
        s.city_name,
        s.zone_name,
        s.ward_id,
        s.ward_name,
        s.area_sq_km,
        s.population_thousands,
        s.male_population_thousands,
        s.female_population_thousands,
        s.children_population_thousands,
        s.youth_population_thousands,
        s.adult_population_thousands,
        s.senior_population_thousands
    FROM stg_bhubaneswar_ward_profile AS s
    LEFT JOIN _civico_source_urls AS u ON u.source_file = s.source_file
    ON CONFLICT (source_record_id) DO UPDATE SET
        source_dataset = EXCLUDED.source_dataset,
        source_url = EXCLUDED.source_url,
        source_file = EXCLUDED.source_file,
        source_row_number = EXCLUDED.source_row_number,
        ingested_at_utc = EXCLUDED.ingested_at_utc,
        city_name = EXCLUDED.city_name,
        zone_name = EXCLUDED.zone_name,
        ward_id = EXCLUDED.ward_id,
        ward_name = EXCLUDED.ward_name,
        area_sq_km = EXCLUDED.area_sq_km,
        population_thousands = EXCLUDED.population_thousands,
        male_population_thousands = EXCLUDED.male_population_thousands,
        female_population_thousands = EXCLUDED.female_population_thousands,
        children_population_thousands = EXCLUDED.children_population_thousands,
        youth_population_thousands = EXCLUDED.youth_population_thousands,
        adult_population_thousands = EXCLUDED.adult_population_thousands,
        senior_population_thousands = EXCLUDED.senior_population_thousands
    """
)


SANITATION_INSERT_SQL = text(
    """
    INSERT INTO civic_sanitation_indicator (
        id, source_record_id, source_dataset, source_url, source_file, source_row_number,
        ingested_at_utc, state_name, district_name, block_name,
        gram_panchayat_name, observed_on, ihhl_total_as_per_details,
        ihhl_total_achieved, ihhl_gap, achievement_ratio, source_quality_flag
    )
    SELECT
        md5(s.source_record_id)::uuid,
        s.source_record_id,
        s.source_dataset,
        u.source_url,
        s.source_file,
        s.source_row_number,
        s.ingested_at_utc,
        s.state_name,
        s.district_name,
        s.block_name,
        s.gram_panchayat_name,
        s.observed_at::date,
        s.ihhl_total_as_per_details,
        s.ihhl_total_achieved,
        s.ihhl_gap,
        s.achievement_ratio,
        s.source_quality_flag
    FROM stg_ihhl_household_latrine AS s
    LEFT JOIN _civico_source_urls AS u ON u.source_file = s.source_file
    ON CONFLICT (source_record_id) DO UPDATE SET
        source_dataset = EXCLUDED.source_dataset,
        source_url = EXCLUDED.source_url,
        source_file = EXCLUDED.source_file,
        source_row_number = EXCLUDED.source_row_number,
        ingested_at_utc = EXCLUDED.ingested_at_utc,
        state_name = EXCLUDED.state_name,
        district_name = EXCLUDED.district_name,
        block_name = EXCLUDED.block_name,
        gram_panchayat_name = EXCLUDED.gram_panchayat_name,
        observed_on = EXCLUDED.observed_on,
        ihhl_total_as_per_details = EXCLUDED.ihhl_total_as_per_details,
        ihhl_total_achieved = EXCLUDED.ihhl_total_achieved,
        ihhl_gap = EXCLUDED.ihhl_gap,
        achievement_ratio = EXCLUDED.achievement_ratio,
        source_quality_flag = EXCLUDED.source_quality_flag
    """
)



def sync_database_url(database_url: str) -> str:
    if database_url.startswith("postgresql+asyncpg://"):
        return database_url.replace("postgresql+asyncpg://", "postgresql+psycopg2://", 1)
    if database_url.startswith("postgresql://"):
        return database_url.replace("postgresql://", "postgresql+psycopg2://", 1)
    return database_url



def filename_from_path(value: object) -> str:
    return str(value or "").replace("\\", "/").rsplit("/", 1)[-1]



def load_source_urls(manifest_path: Path | None) -> dict[str, str]:
    if not manifest_path or not manifest_path.is_file():
        return {}
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    return {
        filename_from_path(entry.get("local_file")): str(
            entry.get("final_url") or entry.get("requested_url") or ""
        )
        for entry in manifest.get("sources", {}).values()
        if filename_from_path(entry.get("local_file"))
    }



def ensure_tables(connection: Connection) -> None:
    names = connection.execute(
        text(
            """
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
              AND table_name IN (
                  'stg_bhubaneswar_ward_profile',
                  'stg_ihhl_household_latrine',
                  'civic_ward_context',
                  'civic_sanitation_indicator'
              )
            """
        )
    ).scalars().all()
    required = {
        "stg_bhubaneswar_ward_profile",
        "stg_ihhl_household_latrine",
        "civic_ward_context",
        "civic_sanitation_indicator",
    }
    missing = sorted(required.difference(names))
    if missing:
        raise RuntimeError(
            "Required tables are missing: "
            + ", ".join(missing)
            + ". Apply Alembic migrations and rerun the mapper."
        )



def install_source_url_map(connection: Connection, source_urls: dict[str, str]) -> None:
    connection.execute(
        text(
            """
            CREATE TEMP TABLE _civico_source_urls (
                source_file TEXT PRIMARY KEY,
                source_url TEXT
            ) ON COMMIT DROP
            """
        )
    )
    if source_urls:
        connection.execute(
            text(
                "INSERT INTO _civico_source_urls (source_file, source_url) VALUES (:source_file, :source_url)"
            ),
            [{"source_file": key, "source_url": value} for key, value in source_urls.items()],
        )



def map_context(database_url: str, manifest_path: Path | None = None) -> tuple[int, int]:
    source_urls = load_source_urls(manifest_path)
    engine: Engine = create_engine(
        sync_database_url(database_url),
        pool_pre_ping=True,
        pool_recycle=300,
        future=True,
    )
    try:
        with engine.begin() as connection:
            ensure_tables(connection)
            install_source_url_map(connection, source_urls)
            ward_count = int(connection.execute(WARD_COUNT_SQL).scalar_one())
            sanitation_count = int(connection.execute(SANITATION_COUNT_SQL).scalar_one())
            connection.execute(WARD_INSERT_SQL)
            connection.execute(SANITATION_INSERT_SQL)
            return ward_count, sanitation_count
    finally:
        engine.dispose()



def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Bulk-map CIVICO context staging data")
    parser.add_argument("--database-url", default=os.getenv("DATABASE_URL"))
    parser.add_argument("--manifest", type=Path, default=Path("data/source_manifest.json"))
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
    ward_count, sanitation_count = map_context(args.database_url, args.manifest)
    LOG.info(
        "Mapped %s ward records and %s sanitation records in one transaction",
        ward_count,
        sanitation_count,
    )


if __name__ == "__main__":
    main()


def _safe_url_metadata(database_url: str) -> tuple[str | None, int | None]:
    parsed = urlsplit(database_url)
    return parsed.hostname, parsed.port


__all__ = ["map_context"]
