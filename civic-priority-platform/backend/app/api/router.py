from fastapi import APIRouter
from app.api.geocoding import router as geocoding_router


from app.api.context import router as context_router
from app.api.v1 import (
    auth,
    dashboard,
    feedback,
    hotspots,
    issues,
    maps,
    optimization,
    portfolios,
    priorities,
    ranking,
    reports,
    submissions,
)

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])

api_router.include_router(geocoding_router)


# Context router (Census, Ward, Sanitation datasets)
api_router.include_router(context_router)

# PRD Endpoints
api_router.include_router(submissions.router, prefix="/submissions", tags=["submissions"])
api_router.include_router(hotspots.router, prefix="/hotspots", tags=["hotspots"])
api_router.include_router(ranking.router, prefix="/ranking", tags=["ranking"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(portfolios.router, prefix="/portfolios", tags=["portfolios"])
api_router.include_router(optimization.router, prefix="/optimization", tags=["optimization"])
api_router.include_router(priorities.router, prefix="/priorities", tags=["priorities"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])

# Core Domain Endpoints
api_router.include_router(issues.router, prefix="/issues", tags=["issues"])
api_router.include_router(maps.router, prefix="/maps", tags=["maps"])
api_router.include_router(feedback.router, prefix="/feedback", tags=["feedback"])
