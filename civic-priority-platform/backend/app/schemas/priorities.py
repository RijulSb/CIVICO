from datetime import datetime
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class PriorityResponse(APIModel):
    id: UUID
    title: str
    category: str
    score: float = Field(ge=0)
    rank: int = Field(ge=1)
    issue_count: int = Field(ge=0)
    geographic_coverage: float | None = Field(default=None, ge=0)
    confidence: float | None = Field(default=None, ge=0, le=1)
    created_at: datetime


class PriorityListResponse(APIModel):
    items: list[PriorityResponse]
    total: int = Field(ge=0)


class PriorityRecalculationResponse(APIModel):
    job_id: UUID
    status: str
