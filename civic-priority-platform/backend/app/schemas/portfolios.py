"""Portfolio schemas — extended to match PRD §3.3 / §4.6 PortfolioResponse contract."""

from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel
from app.schemas.ranking import RankedProject


class PortfolioConstraints(APIModel):
    geographical: list[str] = Field(default_factory=list)
    timeline: list[str] = Field(default_factory=list)
    administrative: list[str] = Field(default_factory=list)


class PortfolioCreate(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    budget: int = Field(gt=0, description="Total budget in INR")
    constraints: PortfolioConstraints = Field(default_factory=PortfolioConstraints)


class PortfolioResponse(APIModel):
    portfolio_id: UUID
    constituency: str
    budget: int
    selected_projects: list[RankedProject]
    total_benefit: float = Field(ge=0)
    constraints: PortfolioConstraints
    status: str


# Legacy compatibility aliases kept for existing router code
class InterventionResponse(APIModel):
    id: UUID
    title: str
    description: str
    estimated_cost: float | None = Field(default=None, ge=0)
    expected_impact: float | None = Field(default=None, ge=0)
