from app.workers.celery_app import celery_app


@celery_app.task(
    bind=True,
    name="app.workers.analysis.process_analysis",
    autoretry_for=(Exception,),
    retry_backoff=True,
    max_retries=3,
)
def process_analysis(self, issue_id: str) -> dict:
    if not issue_id or not issue_id.strip():
        raise ValueError("issue_id must not be empty.")

    from app.services.analysis_service import AnalysisService

    result = AnalysisService().process(issue_id.strip())
    return {"issue_id": issue_id.strip(), "status": "completed", "result": result}
