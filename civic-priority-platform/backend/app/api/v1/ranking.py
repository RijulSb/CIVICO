"""Ranking routes — POST /api/v1/ranking, GET /api/v1/ranking"""

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.ranking import RankingRequest, RankingResponse
from app.services.ranking_service import RankingService, get_ranking_service

router = APIRouter()


@router.post("", response_model=RankingResponse, status_code=status.HTTP_200_OK)
async def generate_ranking(
    payload: RankingRequest,
    db: AsyncSession = Depends(get_db),
) -> RankingResponse:
    """Compute MCDA scores for all hotspots and return ranked projects."""
    service = get_ranking_service(db)
    return await service.generate_ranking(payload)


@router.get("", response_model=RankingResponse)
async def list_ranking(
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> RankingResponse:
    """Return the cached ranked project list for a constituency."""
    service = get_ranking_service(db)
    return await service.list_cached(constituency)
