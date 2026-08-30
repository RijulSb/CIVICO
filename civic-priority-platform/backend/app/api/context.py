from __future__ import annotations

from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Query, status
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import sanitize_text_input
from app.db.session import get_db


router = APIRouter(prefix="/context", tags=["context"])


class WardContextResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    source_record_id: str
    source_dataset: str
    source_url: str | None = None
    source_file: str
    ingested_at_utc: Any
    city_name: str
    zone_name: str
    ward_id: str
    ward_name: str | None = None
    area_sq_km: float
    population_thousands: float
    male_population_thousands: float
    female_population_thousands: float
    children_population_thousands: float
    youth_population_thousands: float
    adult_population_thousands: float | None = None
    senior_population_thousands: float | None = None


class SanitationContextResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    source_record_id: str
    source_dataset: str
    source_url: str | None = None
    source_file: str
    ingested_at_utc: Any
    state_name: str
    district_name: str
    block_name: str
    gram_panchayat_name: str
    observed_on: Any
    ihhl_total_as_per_details: int
    ihhl_total_achieved: int
    ihhl_gap: int
    achievement_ratio: float | None = None
    source_quality_flag: str


class ContextSummaryResponse(BaseModel):
    ward_count: int
    sanitation_count: int
    sanitation_quality_flags: dict[str, int]
    sanitation_districts: list[str]


WARD_COLUMNS = """
    source_record_id, source_dataset, source_url, source_file, ingested_at_utc,
    city_name, zone_name, ward_id, ward_name, area_sq_km,
    population_thousands, male_population_thousands, female_population_thousands,
    children_population_thousands, youth_population_thousands,
    adult_population_thousands, senior_population_thousands
"""

SANITATION_COLUMNS = """
    source_record_id, source_dataset, source_url, source_file, ingested_at_utc,
    state_name, district_name, block_name, gram_panchayat_name, observed_on,
    ihhl_total_as_per_details, ihhl_total_achieved, ihhl_gap,
    achievement_ratio, source_quality_flag
"""


def rows_to_models(rows: list[Any], model: type[BaseModel]) -> list[BaseModel]:
    return [model.model_validate(dict(row)) for row in rows]


@router.get("/wards", response_model=list[WardContextResponse])
async def list_ward_context(
    city_name: str | None = Query(default=None),
    zone_name: str | None = Query(default=None),
    ward_id: str | None = Query(default=None),
    limit: int = Query(default=100, ge=1, le=500),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> list[WardContextResponse]:
    predicates: list[str] = []
    params: dict[str, Any] = {"limit": limit, "offset": offset}
    if city_name:
        sanitized_city = sanitize_text_input(city_name, max_length=100)
        predicates.append("city_name = :city_name")
        params["city_name"] = sanitized_city
    if zone_name:
        sanitized_zone = sanitize_text_input(zone_name, max_length=100)
        predicates.append("zone_name = :zone_name")
        params["zone_name"] = sanitized_zone
    if ward_id:
        sanitized_ward = sanitize_text_input(ward_id, max_length=100)
        predicates.append("ward_id = :ward_id")
        params["ward_id"] = sanitized_ward


    where_clause = f"WHERE {' AND '.join(predicates)}" if predicates else ""
    query = text(
        f"""
        SELECT {WARD_COLUMNS}
        FROM civic_ward_context
        {where_clause}
        ORDER BY ward_id
        LIMIT :limit OFFSET :offset
        """
    )
    try:
        result = await db.execute(query, params)
        return rows_to_models(result.mappings().all(), WardContextResponse)
    except SQLAlchemyError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Ward context is temporarily unavailable.",
        ) from exc


@router.get("/wards/{ward_id}", response_model=WardContextResponse)
async def get_ward_context(
    ward_id: str,
    db: AsyncSession = Depends(get_db),
) -> WardContextResponse:
    query = text(
        f"""
        SELECT {WARD_COLUMNS}
        FROM civic_ward_context
        WHERE ward_id = :ward_id
        LIMIT 1
        """
    )
    try:
        result = await db.execute(query, {"ward_id": ward_id})
        row = result.mappings().first()
    except SQLAlchemyError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Ward context is temporarily unavailable.",
        ) from exc
    if row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Ward context not found.")
    return WardContextResponse.model_validate(dict(row))


@router.get("/sanitation", response_model=list[SanitationContextResponse])
async def list_sanitation_context(
    district_name: str | None = Query(default=None),
    block_name: str | None = Query(default=None),
    quality_flag: str | None = Query(default=None),
    limit: int = Query(default=100, ge=1, le=500),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> list[SanitationContextResponse]:
    predicates: list[str] = []
    params: dict[str, Any] = {"limit": limit, "offset": offset}
    if district_name:
        predicates.append("district_name = :district_name")
        params["district_name"] = sanitize_text_input(district_name, max_length=100)
    if block_name:
        predicates.append("block_name = :block_name")
        params["block_name"] = sanitize_text_input(block_name, max_length=100)
    if quality_flag:
        predicates.append("source_quality_flag = :quality_flag")
        params["quality_flag"] = sanitize_text_input(quality_flag, max_length=50)


    where_clause = f"WHERE {' AND '.join(predicates)}" if predicates else ""
    query = text(
        f"""
        SELECT {SANITATION_COLUMNS}
        FROM civic_sanitation_indicator
        {where_clause}
        ORDER BY district_name, block_name, gram_panchayat_name
        LIMIT :limit OFFSET :offset
        """
    )
    try:
        result = await db.execute(query, params)
        return rows_to_models(result.mappings().all(), SanitationContextResponse)
    except SQLAlchemyError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Sanitation context is temporarily unavailable.",
        ) from exc


@router.get("/summary", response_model=ContextSummaryResponse)
async def get_context_summary(db: AsyncSession = Depends(get_db)) -> ContextSummaryResponse:
    try:
        count_result = await db.execute(
            text(
                """
                SELECT
                    (SELECT COUNT(*) FROM civic_ward_context) AS ward_count,
                    (SELECT COUNT(*) FROM civic_sanitation_indicator) AS sanitation_count
                """
            )
        )
        counts = count_result.mappings().one()
        flags_result = await db.execute(
            text(
                """
                SELECT source_quality_flag, COUNT(*) AS count
                FROM civic_sanitation_indicator
                GROUP BY source_quality_flag
                ORDER BY source_quality_flag
                """
            )
        )
        districts_result = await db.execute(
            text(
                """
                SELECT DISTINCT district_name
                FROM civic_sanitation_indicator
                ORDER BY district_name
                """
            )
        )
    except SQLAlchemyError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Context summary is temporarily unavailable.",
        ) from exc

    return ContextSummaryResponse(
        ward_count=int(counts["ward_count"]),
        sanitation_count=int(counts["sanitation_count"]),
        sanitation_quality_flags={
            str(row["source_quality_flag"]): int(row["count"])
            for row in flags_result.mappings().all()
        },
        sanitation_districts=[
            str(row["district_name"]) for row in districts_result.mappings().all()
        ],
    )
