from app.workers.celery_app import celery_app


@celery_app.task(
    bind=True,
    name="app.workers.reports.generate_report",
    autoretry_for=(Exception,),
    retry_backoff=True,
    max_retries=3,
)
def generate_report(self, report_id: str) -> dict:
    if not report_id or not report_id.strip():
        raise ValueError("report_id must not be empty.")

    from app.services.report_service import ReportService

    result = ReportService().generate(report_id.strip())
    return {"report_id": report_id.strip(), "status": "completed", "result": result}
