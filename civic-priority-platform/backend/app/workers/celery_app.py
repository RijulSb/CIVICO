from celery import Celery

from app.core.config import settings


celery_app = Celery(
    "civico",
    broker=settings.celery_broker_url,
    backend=settings.celery_result_backend,
)

celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    task_track_started=True,
    task_acks_late=True,
    task_reject_on_worker_lost=True,
    worker_prefetch_multiplier=1,
    broker_connection_retry_on_startup=True,
    timezone="UTC",
    task_routes={
        "app.workers.analysis.*": {"queue": "analysis"},
        "app.workers.reports.*": {"queue": "reports"},
        "app.workers.portfolios.*": {"queue": "portfolios"},
        "app.workers.ingestion.*": {"queue": "ingestion"},
    },
)

# These modules use the shared app above and register their named tasks.
from app.workers import analysis, ingestion, portfolios, reports  # noqa: E402,F401
