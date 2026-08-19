from fastapi import APIRouter

router = APIRouter()


@router.get("/live", tags=["health"])
async def liveness() -> dict[str, str]:
    return {"status": "alive"}


@router.get("/ready", tags=["health"])
async def readiness() -> dict[str, object]:
    # Infrastructure probes belong here once database, Redis, and Qdrant
    # adapters are connected. This endpoint must remain bounded and must not
    # execute model inference or other long-running work.
    return {
        "status": "ready",
        "dependencies": {
            "database": "not_configured",
            "redis": "not_configured",
            "qdrant": "not_configured",
        },
    }
