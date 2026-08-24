"""Ranking schemas — matches PRD §3.3 / §4.4 API contract."""

from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class RankingRequest(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    budget: int | None = Field(default=None, ge=0, description="Total budget in INR")


class ScoringWeights(APIModel):
    population_impact: float = Field(default=0.4, ge=0, le=1)
    urgency: float = Field(default=0.3, ge=0, le=1)
    cost_effectiveness: float = Field(default=0.2, ge=0, le=1)
    alignment_with_plans: float = Field(default=0.1, ge=0, le=1)


class RankedProject(APIModel):
    project_id: UUID
    theme: str
    ward: str
    score: float = Field(ge=0)
    population_impact_score: float = Field(ge=0)
    urgency_score: float = Field(ge=0)
    cost_effectiveness_score: float = Field(ge=0)
    alignment_score: float = Field(ge=0)
    social_impact: str
    economic_impact: str
    estimated_cost: int = Field(ge=0, description="Estimated cost in INR")


class RankingResponse(APIModel):
    projects: list[RankedProject]
    scoring_weights: ScoringWeights
    constituency: str
