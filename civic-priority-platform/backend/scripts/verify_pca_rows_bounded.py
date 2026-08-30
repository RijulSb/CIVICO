import asyncio
import json
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from sqlalchemy import text
from app.db.session import engine

async def main():
    async with asyncio.timeout(15):
        async with engine.connect() as conn:
            rows = (await conn.execute(text("""
                SELECT subdistrict_name, households_total, population_total, reference_year
                FROM census_population_reference
                ORDER BY subdistrict_name
            """))).mappings().all()
            print(json.dumps([dict(row) for row in rows], ensure_ascii=False), flush=True)
    await engine.dispose()

asyncio.run(main())
