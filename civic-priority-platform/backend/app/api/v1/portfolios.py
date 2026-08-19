from uuid import UUID

from fastapi import APIRouter, Header, HTTPException, status

from app.schemas.portfolios import PortfolioCreate, PortfolioResponse

router = APIRouter()


@router.post("", response_model=PortfolioResponse, status_code=status.HTTP_202_ACCEPTED)
async def create_portfolio(
    payload: PortfolioCreate,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
) -> PortfolioResponse:
    if not idempotency_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Idempotency-Key is required for portfolio generation.",
        )
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Portfolio persistence and optimization queue are not connected.",
    )


@router.get("/{portfolio_id}", response_model=PortfolioResponse)
async def get_portfolio(portfolio_id: UUID) -> PortfolioResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Portfolio {portfolio_id} repository is not connected.",
    )
