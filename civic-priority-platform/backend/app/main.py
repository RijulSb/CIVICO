import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api.router import api_router
from app.core.config import settings
from app.core.exceptions import CivicoException
from app.core.logging import configure_logging, set_request_id

configure_logging(settings.log_level)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_: FastAPI):
    logger.info("Starting %s version=%s", settings.app_name, settings.app_version)
    if settings.is_production and settings.jwt_secret_key == "development-only-change-me":
        raise RuntimeError("JWT_SECRET_KEY must be configured in production.")
    yield
    logger.info("Stopping %s", settings.app_name)


app = FastAPI(
    title="CIVICO Backend API",
    version=settings.app_version,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

app.include_router(api_router, prefix=settings.api_v1_prefix)


if settings.cors_origin_list:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        )
    #     allow_methods=["GET", "POST", "PATCH", "OPTIONS"],
    #     allow_headers=["Authorization", "Content-Type", "Idempotency-Key", "X-Request-ID"],
    # )


@app.middleware("http")
async def request_context_middleware(request: Request, call_next):
    request_id = set_request_id(request.headers.get("X-Request-ID"))
    request.state.request_id = request_id
    try:
        response = await call_next(request)
    finally:
        # ContextVar reset is intentionally omitted here because the request
        # context is isolated by the ASGI task and remains available to logs.
        pass
    response.headers["X-Request-ID"] = request_id
    return response


@app.exception_handler(CivicoException)
async def civico_exception_handler(_: Request, exc: CivicoException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": {
                "code": exc.code,
                "message": exc.message,
                "details": exc.details,
            }
        },
    )


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    logger.exception("Unhandled application exception: %s %s", request.method, request.url.path)
    return JSONResponse(
        status_code=500,
        content={
            "error": {
                "code": "INTERNAL_SERVER_ERROR",
                "message": "Internal server error.",
                "request_id": getattr(request.state, "request_id", None),
            }
        },
    )


@app.get("/", tags=["system"])
async def root() -> dict[str, str]:
    return {
        "service": settings.app_name,
        "status": "running",
        "version": settings.app_version,
    }


@app.get("/health/live", tags=["health"])
async def process_liveness() -> dict[str, str]:
    return {"status": "alive"}


@app.get("/health/ready", tags=["health"])
async def process_readiness() -> dict[str, object]:
    return {
        "status": "ready",
        "dependencies": {
            "database": "not_configured",
            "redis": "not_configured",
            "qdrant": "not_configured",
        },
    }


#app.include_router(api_router, prefix=settings.api_v1_prefix)
