from __future__ import annotations

import argparse
import hashlib
import json
import logging
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests

from ingest_csvs import ingest

LOG = logging.getLogger("civico.retrieve")
MAX_DOWNLOAD_BYTES = 100 * 1024 * 1024


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def safe_filename(name: str) -> str:
    cleaned = "".join(character if character.isalnum() or character in "._-" else "_" for character in name)
    return cleaned.strip("._") or "source.csv"


def download_source(session: requests.Session, url: str, output_path: Path) -> dict[str, object]:
    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        raise ValueError(f"Only HTTP(S) source URLs are supported: {url}")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    temporary_path = output_path.with_suffix(output_path.suffix + ".part")
    LOG.info("Downloading %s", url)
    with session.get(url, stream=True, timeout=(15, 120), allow_redirects=True) as response:
        response.raise_for_status()
        content_length = response.headers.get("Content-Length")
        if content_length and int(content_length) > MAX_DOWNLOAD_BYTES:
            raise ValueError(f"Refusing source larger than {MAX_DOWNLOAD_BYTES} bytes: {url}")

        total = 0
        with temporary_path.open("wb") as handle:
            for block in response.iter_content(chunk_size=1024 * 1024):
                if not block:
                    continue
                total += len(block)
                if total > MAX_DOWNLOAD_BYTES:
                    raise ValueError(f"Refusing source larger than {MAX_DOWNLOAD_BYTES} bytes: {url}")
                handle.write(block)
    temporary_path.replace(output_path)

    return {
        "requested_url": url,
        "final_url": str(response.url),
        "local_file": str(output_path),
        "retrieved_at_utc": datetime.now(timezone.utc).isoformat(),
        "bytes": output_path.stat().st_size,
        "sha256": sha256_file(output_path),
    }


def parse_ihhl_source(value: str) -> tuple[str, str]:
    if "=" not in value:
        raise argparse.ArgumentTypeError("IHHL sources must use DISTRICT=URL")
    district, url = value.split("=", 1)
    district = district.strip().lower()
    url = url.strip()
    if not district or not url:
        raise argparse.ArgumentTypeError("IHHL sources must use DISTRICT=URL")
    return district, url


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Retrieve official CIVICO sources and ingest them")
    parser.add_argument("--ward-profile-url", required=True)
    parser.add_argument("--ihhl-source", action="append", type=parse_ihhl_source, required=True)
    parser.add_argument("--data-dir", type=Path, default=Path("data/import"))
    parser.add_argument("--manifest", type=Path, default=Path("data/source_manifest.json"))
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

    session = requests.Session()
    session.headers.update({"User-Agent": "CIVICO-source-ingestor/1.0"})
    manifest: dict[str, object] = {
        "generated_at_utc": datetime.now(timezone.utc).isoformat(),
        "sources": {},
    }

    ward_path = args.data_dir / "bhubaneswar_ward_profile.csv"
    manifest["sources"]["bhubaneswar_ward_profile"] = download_source(
        session, args.ward_profile_url, ward_path
    )

    ihhl_paths: list[Path] = []
    for district, url in args.ihhl_source:
        if district not in {"boudh", "kalahandi", "khordha"}:
            raise SystemExit(f"Unsupported IHHL district: {district}")
        output_path = args.data_dir / f"ihhl_{district}.csv"
        manifest["sources"][f"ihhl_{district}"] = download_source(session, url, output_path)
        ihhl_paths.append(output_path)

    args.manifest.parent.mkdir(parents=True, exist_ok=True)
    args.manifest.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    ingest(
        args.data_dir,
        args.database_url,
        ward_profile_file=ward_path,
        ihhl_files=ihhl_paths,
        chunk_size=args.chunk_size,
    )
    LOG.info("Retrieved, manifested, and ingested %s sources", len(manifest["sources"]))


if __name__ == "__main__":
    main()
