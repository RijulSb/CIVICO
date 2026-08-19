from app.workers.celery_app import celery_app


@celery_app.task(
    bind=True,
    name="app.workers.ingestion.ingest_source",
    autoretry_for=(Exception,),
    retry_backoff=True,
    max_retries=3,
)
def ingest_source(self, source_id: str) -> dict:
    if not source_id or not source_id.strip():
        raise ValueError("source_id must not be empty.")

    from app.services.ingestion_service import IngestionService

    result = IngestionService().ingest(source_id.strip())
    return {"source_id": source_id.strip(), "status": "completed", "result": result}
