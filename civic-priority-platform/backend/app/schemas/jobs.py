from enum import StrEnum
from uuid import UUID

from pydantic import BaseModel, Field


class JobStatus(StrEnum):
    QUEUED = "queued"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    CANCELLED = "cancelled"


class AnalysisJobCreateRequest(BaseModel):
    issue_ids: list[UUID] = Field(min_length=1, max_length=500)
    analysis_type: str = Field(min_length=1, max_length=100)


class AnalysisJobResponse(BaseModel):
    job_id: UUID
    status: JobStatus
    location: str | None = None
    error: str | None = None


class PriorityResponse(BaseModel):
    id: UUID
    issue_id: UUID
    score: float = Field(ge=0)
    rank: int = Field(ge=1)


class PriorityListResponse(BaseModel):
    items: list[PriorityResponse]
    next_cursor: str | None = None
    limit: int
