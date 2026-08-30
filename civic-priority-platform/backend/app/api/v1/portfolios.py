"""Portfolio routes — POST /api/v1/portfolios, GET /api/v1/portfolios/{id}"""

from uuid import UUID

from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.portfolios import (
    ConstraintExplanation,
    PortfolioCreate,
    PortfolioConstraints,
    PortfolioResponse,
    SolverWeights,
)
from app.services.portfolio_service import (
    PortfolioService,
    PortfolioSolverUnavailable,
    PortfolioValidationError,
    get_portfolio_service,
)

router = APIRouter()


@router.post("", response_model=PortfolioResponse, status_code=status.HTTP_200_OK)
async def create_portfolio(
    payload: PortfolioCreate,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
    db: AsyncSession = Depends(get_db),
) -> PortfolioResponse:
    """Generate an optimised portfolio within budget and typed constraints using ILP.

    The solver result is persisted with full metadata (solver status, MIP gap,
    solve time, weight version, constraint snapshot) so that every published
    portfolio is reproducible and auditable.
    """
    service = get_portfolio_service(db)
    try:
        return await service.optimize_portfolio(payload)
    except PortfolioValidationError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc
    except PortfolioSolverUnavailable as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc


@router.get("/{portfolio_id}", response_model=PortfolioResponse)
async def get_portfolio(
    portfolio_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> PortfolioResponse:
    """Retrieve an optimized portfolio by ID, reconstructing typed constraints
    from the persisted JSON snapshot.
    """
    from sqlalchemy import select
    from app.models.ward import CivicPortfolio

    result = await db.execute(
        select(CivicPortfolio).where(CivicPortfolio.id == portfolio_id)
    )
    portfolio = result.scalar_one_or_none()
    if portfolio is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Portfolio {portfolio_id} not found.",
        )

    snapshot = portfolio.constraints_satisfied or {}

    # Reconstruct typed constraints from the persisted snapshot
    try:
        typed_raw = snapshot.get("typed", {})
        constraints = PortfolioConstraints(**typed_raw) if typed_raw else PortfolioConstraints()
    except Exception:
        constraints = PortfolioConstraints()

    # Reconstruct solver weights from the persisted snapshot
    try:
        weights_raw = snapshot.get("weights", {})
        weights = SolverWeights(**weights_raw) if weights_raw else SolverWeights()
    except Exception:
        weights = SolverWeights()

    # Reconstruct constraint explanations
    try:
        exp_raw = snapshot.get("explanations", [])
        explanations = [ConstraintExplanation(**e) for e in exp_raw]
    except Exception:
        explanations = []

    return PortfolioResponse(
        portfolio_id=portfolio.id,
        constituency=portfolio.constituency,
        budget=portfolio.budget,
        net_budget=portfolio.net_budget,
        reserve_amount=portfolio.reserve_amount,
        spend=0,  # selected_projects is empty on GET; spend is not re-computed
        selected_projects=[],
        total_benefit=portfolio.total_benefit,
        constraints=constraints,
        status=portfolio.solver_status,
        solver_status=portfolio.solver_status,
        objective_value=portfolio.total_benefit,
        mip_gap=portfolio.mip_gap,
        solve_seconds=portfolio.solve_seconds,
        fallback_reason=portfolio.fallback_reason,
        weights=weights,
        constraint_checks=snapshot.get("checks", []),
        constraint_explanations=explanations,
    )
