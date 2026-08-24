"""Priorities routes — GET /api/v1/priorities, GET /api/v1/priorities/{id}, POST /api/v1/priorities/recalculate"""

from datetime import datetime
from uuid import UUID, uuid4

from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.ranking import RankingRequest
from app.schemas.priorities import PriorityListResponse, PriorityRecalculationResponse, PriorityResponse
from app.services.ranking_service import get_ranking_service

router = APIRouter()


@router.get("", response_model=PriorityListResponse)
async def list_priorities(
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> PriorityListResponse:
    """Return ranked civic priorities derived from MCDA scoring."""
    service = get_ranking_service(db)
    ranking = await service.list_cached(constituency)
    if not ranking.projects:
        # Generate on the fly if cache empty
        ranking = await service.generate_ranking(RankingRequest(constituency=constituency))

    items = [
        PriorityResponse(
            id=p.project_id,
            title=f"{p.theme.replace('_', ' ').title()} in {p.ward}",
            category=p.theme,
            score=p.score,
            rank=idx + 1,
            issue_count=int(p.urgency_score / 10),
            geographic_coverage=p.population_impact_score,
            confidence=0.88,
            created_at=datetime.utcnow(),
        )
        for idx, p in enumerate(ranking.projects)
    ]
    return PriorityListResponse(items=items, total=len(items))


@router.get("/{priority_id}", response_model=PriorityResponse)
async def get_priority(
    priority_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> PriorityResponse:
    """Retrieve a single priority item."""
    service = get_ranking_service(db)
    ranking = await service.list_cached("khordha")
    for idx, p in enumerate(ranking.projects):
        if p.project_id == priority_id:
            return PriorityResponse(
                id=p.project_id,
                title=f"{p.theme.replace('_', ' ').title()} in {p.ward}",
                category=p.theme,
                score=p.score,
                rank=idx + 1,
                issue_count=int(p.urgency_score / 10),
                geographic_coverage=p.population_impact_score,
                confidence=0.88,
                created_at=datetime.utcnow(),
            )
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Priority {priority_id} not found.",
    )


@router.post("/recalculate", response_model=PriorityRecalculationResponse, status_code=status.HTTP_200_OK)
async def recalculate_priorities(
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> PriorityRecalculationResponse:
    """Trigger recalculation of priority scores across all hotspots."""
    service = get_ranking_service(db)
    await service.generate_ranking(RankingRequest(constituency=constituency))
    return PriorityRecalculationResponse(
        job_id=uuid4(),
        status="completed",
    )
