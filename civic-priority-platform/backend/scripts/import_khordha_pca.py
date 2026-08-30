"""Import the supplied Khordha PCA 2011 reference records."""

from datetime import datetime, timezone
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from sqlalchemy import text

from app.db.session import engine

ROWS = [
    ("Khandagiri", 477, 2572, 1326, 1246, 288, 667, 9, 2067, 505, 820, 1752),
    ("Jatani", 26269, 126405, 64537, 61868, 13116, 19719, 4272, 99501, 26904, 40998, 85407),
    ("Bhubaneswar (M.Corp.)", 206014, 885363, 468043, 417320, 86401, 76770, 44016, 732886, 152477, 325733, 559630),
    ("Balianta", 19535, 91728, 46903, 44825, 9695, 25470, 1142, 68977, 22751, 33705, 58023),
]

SQL = text(
    """
    INSERT INTO census_population_reference (
        source_name, source_resource_id, source_url, retrieved_at, reference_year,
        state_name, district_name, subdistrict_name, locality_type,
        households_total, population_total, male_population, female_population,
        children_0_6, sc_population, st_population, literate_population,
        illiterate_population, total_workers, non_workers
    ) VALUES (
        :source_name, :source_resource_id, :source_url, :retrieved_at, :reference_year,
        :state_name, :district_name, :subdistrict_name, :locality_type,
        :households_total, :population_total, :male_population, :female_population,
        :children_0_6, :sc_population, :st_population, :literate_population,
        :illiterate_population, :total_workers, :non_workers
    )
    ON CONFLICT (state_name, district_name, subdistrict_name, reference_year)
    DO UPDATE SET
        households_total = EXCLUDED.households_total,
        population_total = EXCLUDED.population_total,
        male_population = EXCLUDED.male_population,
        female_population = EXCLUDED.female_population,
        children_0_6 = EXCLUDED.children_0_6,
        sc_population = EXCLUDED.sc_population,
        st_population = EXCLUDED.st_population,
        literate_population = EXCLUDED.literate_population,
        illiterate_population = EXCLUDED.illiterate_population,
        total_workers = EXCLUDED.total_workers,
        non_workers = EXCLUDED.non_workers,
        retrieved_at = EXCLUDED.retrieved_at
    """
)


async def main() -> None:
    now = datetime.now(timezone.utc)
    async with engine.begin() as conn:
        for row in ROWS:
            (
                subdistrict_name, households, population, males, females, children,
                sc, st, literate, illiterate, workers, non_workers,
            ) = row
            await conn.execute(
                SQL,
                {
                    "source_name": "Primary Census Abstract 2011",
                    "source_resource_id": None,
                    "source_url": "https://censusindia.gov.in/census.website/data/census-tables",
                    "retrieved_at": now,
                    "reference_year": 2011,
                    "state_name": "Odisha",
                    "district_name": "Khordha",
                    "subdistrict_name": subdistrict_name,
                    "locality_type": "subdistrict",
                    "households_total": households,
                    "population_total": population,
                    "male_population": males,
                    "female_population": females,
                    "children_0_6": children,
                    "sc_population": sc,
                    "st_population": st,
                    "literate_population": literate,
                    "illiterate_population": illiterate,
                    "total_workers": workers,
                    "non_workers": non_workers,
                },
            )
    await engine.dispose()
    print(f"Imported {len(ROWS)} Khordha PCA records")


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
