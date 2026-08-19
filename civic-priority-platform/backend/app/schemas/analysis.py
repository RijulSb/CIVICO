from datetime import datetime
from enum import StrEnum
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class AnalysisJobStatus(StrEnum):
    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"


class AnalysisOperation(StrEnum):
    CLASSIFICATION = "classification"
    THEME_EXTRACTION = "theme_extraction"
    PRIORITY_SCORING = "priority_scoring"
    SENTIMENT = "sentiment"
    EMBEDDING = "embedding"


class AnalysisRequest(APIModel):
    issue_id: UUID
    requested_operations: list[AnalysisOperation] = Field(
        default_factory=lambda: [
            AnalysisOperation.CLASSIFICATION,
            AnalysisOperation.THEME_EXTRACTION,
            AnalysisOperation.PRIORITY_SCORING,
        ],
        min_length=1,
        max_length=20,
    )


class AnalysisJobResponse(APIModel):
    job_id: UUID
    issue_id: UUID
    status: AnalysisJobStatus
    created_at: datetime
    completed_at: datetime | None = None
    error: str | None = None


class AnalysisResultResponse(APIModel):
    issue_id: UUID
    category: str | None = None
    themes: list[str] = Field(default_factory=list)
    sentiment: str | None = None
    summary: str | None = None
    confidence: float | None = Field(default=None, ge=0, le=1)
    completed_at: datetime | None = None
