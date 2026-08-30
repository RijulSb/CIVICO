"""Typed portfolio contracts used by the ILP optimizer and Portfolio UI.

The typed PortfolioConstraints object is the sole source of truth for the
solver model, the audit record and the Portfolio page explanations.
Human-readable explanations are generated *from* the typed snapshot, never
the other way around.
"""

from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field, model_validator

from app.schemas.common import APIModel
from app.schemas.ranking import RankedProject


# ---------------------------------------------------------------------------
# Constraint sub-models
# ---------------------------------------------------------------------------


class ProjectDependency(APIModel):
    """A child project may only be selected when its prerequisite is selected.

    Enforced as: x_child ≤ x_prerequisite
    """

    project_id: UUID
    prerequisite_project_id: UUID

    @model_validator(mode="after")
    def reject_self_dependency(self) -> "ProjectDependency":
        if self.project_id == self.prerequisite_project_id:
            raise ValueError("A project cannot depend on itself.")
        return self


class WardBudget(APIModel):
    """Per-ward budget bounds enforced inside the ILP model.

    Enforced as: minimum ≤ Σᵢ∈ward costᵢ xᵢ ≤ maximum
    """

    ward: str = Field(min_length=1, max_length=100)
    minimum: int = Field(default=0, ge=0)
    maximum: int | None = Field(default=None, ge=0)

    @model_validator(mode="after")
    def validate_bounds(self) -> "WardBudget":
        if self.maximum is not None and self.minimum > self.maximum:
            raise ValueError("Ward minimum budget cannot exceed its maximum budget.")
        return self


class SolverWeights(APIModel):
    """Scoring weights used to build the ILP objective coefficient.

    benefit_i = w_pop × pop_impact_i + w_urg × urgency_i
              + w_eff × cost_eff_i   + w_aln × alignment_i

    Weights are persisted alongside the solver run so that results are
    reproducible.  The version string changes whenever any weight changes.
    """

    version: str = Field(default="v1", max_length=20)
    population_impact: float = Field(default=0.40, ge=0, le=1)
    urgency: float = Field(default=0.30, ge=0, le=1)
    cost_effectiveness: float = Field(default=0.20, ge=0, le=1)
    alignment: float = Field(default=0.10, ge=0, le=1)

    @model_validator(mode="after")
    def weights_sum_to_one(self) -> "SolverWeights":
        total = (
            self.population_impact
            + self.urgency
            + self.cost_effectiveness
            + self.alignment
        )
        if abs(total - 1.0) > 0.01:
            raise ValueError(f"Solver weights must sum to 1.0 (got {total:.4f}).")
        return self


class ConstraintExplanation(APIModel):
    """Human-readable rendering of a single ILP constraint, generated from
    the typed snapshot.  Never used as a solver input.
    """

    code: str = Field(max_length=80)
    label: str = Field(max_length=200)
    formula: str = Field(max_length=400)
    parameters: dict[str, object] = Field(default_factory=dict)
    enforced: bool


# ---------------------------------------------------------------------------
# Main typed constraint contract
# ---------------------------------------------------------------------------


class PortfolioConstraints(APIModel):
    """Machine-enforceable ILP constraints.

    Every field maps directly to one or more solver constraints added by
    _ilp_solve().  No free-form string labels are accepted here; if a human-
    readable explanation is needed, it is generated from this object after
    validation.
    """

    model_config = ConfigDict(
        from_attributes=True,
        extra="ignore",
        str_strip_whitespace=True,
    )

    # --- Reserve ---
    reserve_percent: float = Field(
        default=5.0, ge=0, le=100,
        description="Percentage of total budget held as unallocated contingency reserve. "
                    "net_budget = floor(B × (1 − reserve_percent / 100)).",
    )

    # --- Ward coverage ---
    min_wards: int = Field(
        default=0, ge=0,
        description="Minimum number of distinct wards that must receive at least one project.",
    )
    minimum_ward_coverage: int | None = Field(
        default=None,
        description="Alias for min_wards from UI workspace.",
    )
    max_projects_per_ward: int | None = Field(
        default=3, ge=0,
        description="Maximum projects that may be selected in any single ward.",
    )
    ward_budgets: list[WardBudget] = Field(
        default_factory=list,
        description="Optional per-ward min/max budget bounds.",
    )

    # --- UI workspace flags ---
    require_dependency_order: bool = Field(
        default=True,
        description="Enforce chronological prerequisite completion.",
    )
    preserve_geographic_balance: bool = Field(
        default=True,
        description="Enforce geographic distribution constraints.",
    )

    @model_validator(mode="after")
    def sync_ward_coverage_alias(self) -> "PortfolioConstraints":
        if self.minimum_ward_coverage is not None and self.min_wards == 0:
            self.min_wards = self.minimum_ward_coverage
        return self

    # --- Theme caps ---
    max_projects_per_theme: dict[str, int] = Field(
        default_factory=dict,
        description="Upper bound on the number of projects selected for each theme key.",
    )
    min_projects_per_theme: dict[str, int] = Field(
        default_factory=dict,
        description="Lower bound on the number of projects selected for each theme key.",
    )

    # --- Project-level overrides ---
    mandatory_project_ids: list[UUID] = Field(
        default_factory=list,
        description="Projects that must appear in every solution (x_i = 1).",
    )
    forbidden_project_ids: list[UUID] = Field(
        default_factory=list,
        description="Projects that must never appear in any solution (x_i = 0).",
    )

    # --- Dependency graph ---
    dependencies: list[ProjectDependency] = Field(
        default_factory=list,
        description="Prerequisite relationships: x_child ≤ x_prerequisite.",
    )

    # --- Scheduling (phase 2 — requires duration data) ---
    project_durations_months: dict[str, int] = Field(
        default_factory=dict,
        description="Duration in months per project ID.  Required for time-indexed scheduling.",
    )
    capacity_by_month: dict[int, int] = Field(
        default_factory=dict,
        description="Maximum concurrent active projects per calendar month index.",
    )
    horizon_months: int = Field(
        default=18, ge=1,
        description="Planning horizon in months for time-indexed scheduling.",
    )

    # --- Solver behaviour ---
    allow_heuristic_fallback: bool = Field(
        default=False,
        description="If True, a greedy heuristic is used when PuLP/CBC is unavailable. "
                    "The response will carry status='heuristic_fallback' and fallback_reason.",
    )
    solver_time_limit_seconds: int = Field(
        default=30, ge=1, le=300,
        description="CBC solver wall-clock time limit in seconds.",
    )
    solver_mip_gap: float = Field(
        default=0.01, ge=0, le=1,
        description="Relative MIP gap at which the solver considers the solution good enough.",
    )


# ---------------------------------------------------------------------------
# Request / response contracts
# ---------------------------------------------------------------------------


class PortfolioCreate(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    budget: int = Field(gt=0, description="Total budget in INR.")
    constraints: PortfolioConstraints = Field(default_factory=PortfolioConstraints)
    weights: SolverWeights = Field(default_factory=SolverWeights)


class PortfolioResponse(APIModel):
    portfolio_id: UUID
    constituency: str

    # Budget accounting
    budget: int
    net_budget: int = Field(ge=0, description="Budget after contingency reserve deduction.")
    reserve_amount: int = Field(ge=0, description="Unallocated contingency (budget − net_budget).")
    spend: int = Field(default=0, ge=0, description="Actual cost of all selected projects.")

    # Selected projects
    selected_projects: list[RankedProject]
    total_benefit: float = Field(ge=0)

    # Solver metadata
    status: str
    solver_status: str | None = None
    objective_value: float | None = None
    mip_gap: float | None = None
    solve_seconds: float | None = None
    fallback_reason: str | None = None
    weights: SolverWeights | None = None

    # Audit and explainability
    constraints: PortfolioConstraints
    constraint_checks: list[dict[str, object]] = Field(default_factory=list)
    constraint_explanations: list[ConstraintExplanation] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Legacy compatibility alias (kept for existing router code that imports it)
# ---------------------------------------------------------------------------


class InterventionResponse(APIModel):
    id: UUID
    title: str
    description: str
    estimated_cost: float | None = Field(default=None, ge=0)
    expected_impact: float | None = Field(default=None, ge=0)
