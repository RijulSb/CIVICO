from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class PortfolioCreate(APIModel):
    constituency_id: UUID
    priority_ids: list[UUID] = Field(min_length=1, max_length=500)


class InterventionResponse(APIModel):
    id: UUID
    title: str
    description: str
    estimated_cost: float | None = Field(default=None, ge=0)
    expected_impact: float | None = Field(default=None, ge=0)


class PortfolioResponse(APIModel):
    id: UUID
    constituency_id: UUID
    status: str
    interventions: list[InterventionResponse] = Field(default_factory=list)
    total_estimated_cost: float | None = Field(default=None, ge=0)
