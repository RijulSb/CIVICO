from app.workers.celery_app import celery_app


@celery_app.task(
    bind=True,
    name="app.workers.portfolios.optimize_portfolio",
    autoretry_for=(Exception,),
    retry_backoff=True,
    max_retries=3,
)
def optimize_portfolio(self, portfolio_id: str) -> dict:
    if not portfolio_id or not portfolio_id.strip():
        raise ValueError("portfolio_id must not be empty.")

    from app.services.portfolio_service import PortfolioService

    result = PortfolioService().optimize(portfolio_id.strip())
    return {
        "portfolio_id": portfolio_id.strip(),
        "status": "completed",
        "result": result,
    }
