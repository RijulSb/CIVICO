"""Portfolio routes — POST /api/v1/portfolios, GET /api/v1/portfolios/{id}"""

from uuid import UUID

from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.portfolios import PortfolioCreate, PortfolioResponse
from app.services.portfolio_service import PortfolioService, get_portfolio_service

router = APIRouter()


@router.post("", response_model=PortfolioResponse, status_code=status.HTTP_200_OK)
async def create_portfolio(
    payload: PortfolioCreate,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
    db: AsyncSession = Depends(get_db),
) -> PortfolioResponse:
    """Generate an optimised portfolio within budget and constraints using ILP."""
    service = get_portfolio_service(db)
    return await service.optimize_portfolio(payload)


@router.get("/{portfolio_id}", response_model=PortfolioResponse)
async def get_portfolio(
    portfolio_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> PortfolioResponse:
    """Retrieve an optimized portfolio by ID."""
    from sqlalchemy import select
    from app.models.ward import CivicPortfolio
    from app.schemas.portfolios import PortfolioConstraints

    result = await db.execute(select(CivicPortfolio).where(CivicPortfolio.id == portfolio_id))
    portfolio = result.scalar_one_or_none()
    if portfolio is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Portfolio {portfolio_id} not found.",
        )

    constraints_raw = portfolio.constraints_satisfied or {}
    constraints = PortfolioConstraints(
        geographical=constraints_raw.get("geographical", []),
        timeline=constraints_raw.get("timeline", []),
        administrative=constraints_raw.get("administrative", []),
    )

    return PortfolioResponse(
        portfolio_id=portfolio.id,
        constituency=portfolio.constituency,
        budget=portfolio.budget,
        selected_projects=[],
        total_benefit=portfolio.total_benefit,
        constraints=constraints,
        status="optimized",
    )
