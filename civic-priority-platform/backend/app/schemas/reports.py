from datetime import datetime
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel
from app.schemas.priorities import PriorityResponse


class ReportCreate(APIModel):
    constituency_id: UUID
    title: str = Field(min_length=1, max_length=200)
    description: str | None = Field(default=None, max_length=5_000)
    issue_ids: list[UUID] = Field(default_factory=list, max_length=500)


class ReportJobResponse(APIModel):
    report_id: UUID
    status: str
    created_at: datetime
    location: str | None = None


class ReportResponse(APIModel):
    id: UUID
    title: str
    status: str
    executive_summary: str | None = None
    priorities: list[PriorityResponse] = Field(default_factory=list)
    created_at: datetime
    completed_at: datetime | None = None
