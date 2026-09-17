import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from app.api.router import api_router
from app.core.config import settings
from app.core.exceptions import CivicoException
from app.core.logging import configure_logging, set_request_id
from app.db.session import check_database, dispose_engine

configure_logging(settings.log_level)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_: FastAPI):
    logger.info("Starting %s version=%s", settings.app_name, settings.app_version)
    settings.validate_production()
    try:
        # Pre-warm the dashboard cache on startup so the first user request is fast
        import asyncio
        async def _warmup():
            try:
                await asyncio.sleep(2)  # let DB connections settle
                from app.db.session import AsyncSessionFactory
                from app.services.analytics_service import get_analytics_service
                async with AsyncSessionFactory() as session:
                    await get_analytics_service(session).build_dashboard(
                        constituency="khordha", period="30d", theme="all", ward="all"
                    )
                logger.info("Dashboard cache pre-warmed successfully")
            except Exception as exc:
                logger.warning("Dashboard cache warm-up failed (non-fatal): %s", exc)
        asyncio.ensure_future(_warmup())
        yield
    finally:
        await dispose_engine()
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
class CivicMediaFiles(StaticFiles):
    def file_response(self, full_path, stat_result, scope, status_code=200):
        resp = super().file_response(full_path, stat_result, scope, status_code)
        path_str = str(full_path).lower()
        if path_str.endswith(".webm"):
            try:
                with open(full_path, "rb") as f:
                    sample = f.read(4096)
                if b"A_OPUS" in sample and b"V_VP8" not in sample and b"V_VP9" not in sample and b"V_AV1" not in sample:
                    resp.headers["Content-Type"] = "audio/webm"
            except Exception:
                pass
        elif path_str.endswith(".mp3"):
            resp.headers["Content-Type"] = "audio/mpeg"
        elif path_str.endswith(".mp4"):
            resp.headers["Content-Type"] = "video/mp4"
        resp.headers["Accept-Ranges"] = "bytes"
        resp.headers["Content-Disposition"] = "inline"
        resp.headers["Access-Control-Allow-Origin"] = "*"
        resp.headers["Access-Control-Allow-Methods"] = "GET, HEAD, OPTIONS"
        resp.headers["Access-Control-Allow-Headers"] = "*"
        return resp

media_dir = Path(__file__).resolve().parents[1] / "data" / "uploads"
media_dir.mkdir(parents=True, exist_ok=True)
app.mount("/media", CivicMediaFiles(directory=media_dir), name="media")


if settings.cors_origin_list:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_origin_regex=settings.cors_origin_regex,

        allow_credentials=True,
        allow_methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allow_headers=["Authorization", "Content-Type", "Idempotency-Key", "X-Request-ID", "X-API-Key"],
    )


@app.middleware("http")
async def security_and_context_middleware(request: Request, call_next):
    # Enforce request payload size limit (reject payloads > 10MB to prevent DoS)
    content_length = request.headers.get("Content-Length")
    if content_length and int(content_length) > settings.max_content_length_bytes:
        return JSONResponse(
            status_code=413,
            content={"error": {"code": "PAYLOAD_TOO_LARGE", "message": "Request body exceeds maximum size limit (10MB)."}},
        )

    request_id = set_request_id(request.headers.get("X-Request-ID"))
    request.state.request_id = request_id
    try:
        response = await call_next(request)
    finally:
        pass
    response.headers["X-Request-ID"] = request_id
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
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
async def process_readiness() -> JSONResponse:
    dependencies: dict[str, str] = {}
    try:
        await check_database()
        dependencies["database"] = "ok"
    except Exception:
        logger.exception("Readiness database check failed")
        dependencies["database"] = "unavailable"
    ready = dependencies["database"] == "ok"
    return JSONResponse(
        status_code=status.HTTP_200_OK if ready else status.HTTP_503_SERVICE_UNAVAILABLE,
        content={"status": "ready" if ready else "not_ready", "dependencies": dependencies},
    )
