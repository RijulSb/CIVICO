"""Database-backed ILP portfolio optimization for CIVICO.

Architecture rules:
  - The ILP model is the sole source of truth.
  - Reserve is deducted *before* the solver sees the budget.
  - The benefit coefficient is built from persisted, versioned SolverWeights.
  - Greedy fallback is clearly labelled; it is never described as "optimized".
  - Solver status covers: optimal | feasible | infeasible | unbounded | timeout | error |
    heuristic_fallback.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field
from time import monotonic
from typing import Literal
from uuid import UUID, uuid4

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.ward import CivicPortfolio, RankedProject
from app.schemas.portfolios import (
    ConstraintExplanation,
    PortfolioConstraints,
    PortfolioCreate,
    PortfolioResponse,
    SolverWeights,
)
from app.schemas.ranking import RankedProject as RankedProjectSchema


# ---------------------------------------------------------------------------
# Exceptions
# ---------------------------------------------------------------------------


class PortfolioValidationError(ValueError):
    """Raised when a portfolio request cannot be converted into a valid model."""


class PortfolioSolverUnavailable(RuntimeError):
    """Raised when the configured ILP solver is unavailable."""


# ---------------------------------------------------------------------------
# Solver result dataclass
# ---------------------------------------------------------------------------


@dataclass
class ConstraintCheck:
    code: str
    label: str
    passed: bool
    actual: object
    limit: object


@dataclass
class SolverResult:
    status: Literal[
        "optimal", "feasible", "infeasible", "unbounded",
        "timeout", "error", "heuristic_fallback", "empty",
    ]
    selected: list[RankedProjectSchema]
    objective_value: float
    net_budget: int
    spend: int
    reserve_amount: int
    solve_seconds: float
    mip_gap: float | None
    checks: list[dict[str, object]]
    fallback_reason: str | None = None
    weights: SolverWeights | None = None


# ---------------------------------------------------------------------------
# Benefit coefficient builder
# ---------------------------------------------------------------------------


def _benefit(project: RankedProjectSchema, weights: SolverWeights) -> float:
    """Build the normalized linear objective coefficient for one project.

    benefitᵢ = w_pop × pop_impactᵢ + w_urg × urgencyᵢ
              + w_eff × cost_effᵢ   + w_aln × alignmentᵢ
    """
    return (
        weights.population_impact * project.population_impact_score
        + weights.urgency * project.urgency_score
        + weights.cost_effectiveness * project.cost_effectiveness_score
        + weights.alignment * project.alignment_score
    )


# ---------------------------------------------------------------------------
# Greedy fallback (heuristic — NOT ILP)
# ---------------------------------------------------------------------------


def _greedy_knapsack(
    projects: list[RankedProjectSchema],
    budget: int,
    weights: SolverWeights,
    max_per_ward: int | None,
) -> list[RankedProjectSchema]:
    """Compatibility fallback; callers MUST label the result as heuristic_fallback."""
    cap = max_per_ward if max_per_ward is not None else 3
    candidates = sorted(projects, key=lambda p: _benefit(p, weights), reverse=True)
    selected: list[RankedProjectSchema] = []
    remaining = budget
    ward_count: dict[str, int] = {}
    for project in candidates:
        if (
            project.estimated_cost <= remaining
            and ward_count.get(project.ward, 0) < cap
        ):
            selected.append(project)
            remaining -= project.estimated_cost
            ward_count[project.ward] = ward_count.get(project.ward, 0) + 1
    return selected


# ---------------------------------------------------------------------------
# Constraint validation (pre-solve)
# ---------------------------------------------------------------------------


def _validate_constraints(
    projects: list[RankedProjectSchema],
    constraints: PortfolioConstraints,
) -> None:
    """Validate the constraint object against candidate projects.

    Raises PortfolioValidationError with a clear message on failure.
    All checks run before the solver is invoked, so malformed requests
    return HTTP 422 instead of a silent infeasibility.
    """
    ids = {project.project_id for project in projects}

    if len(ids) != len(projects):
        raise PortfolioValidationError("Candidate projects contain duplicate IDs.")

    # Collect all project IDs referenced by constraints
    referenced: set[UUID] = set()
    referenced.update(constraints.mandatory_project_ids)
    referenced.update(constraints.forbidden_project_ids)
    for dep in constraints.dependencies:
        referenced.add(dep.project_id)
        referenced.add(dep.prerequisite_project_id)
    missing = referenced - ids
    if missing:
        raise PortfolioValidationError(
            f"Constraint references unknown project IDs: "
            f"{sorted(str(v) for v in missing)}"
        )

    # Mandatory ∩ forbidden must be empty
    overlap = set(constraints.mandatory_project_ids) & set(constraints.forbidden_project_ids)
    if overlap:
        raise PortfolioValidationError(
            "A project cannot be both mandatory and forbidden."
        )

    # Dependency cycle detection (DFS)
    graph: dict[UUID, list[UUID]] = {}
    for dep in constraints.dependencies:
        graph.setdefault(dep.project_id, []).append(dep.prerequisite_project_id)
    visiting: set[UUID] = set()
    visited: set[UUID] = set()

    def _visit(node: UUID) -> None:
        if node in visiting:
            raise PortfolioValidationError(
                "Project dependency graph contains a cycle."
            )
        if node in visited:
            return
        visiting.add(node)
        for prereq in graph.get(node, []):
            _visit(prereq)
        visiting.discard(node)
        visited.add(node)

    for node in graph:
        _visit(node)

    # Ward coverage feasibility
    available_wards = {p.ward for p in projects}
    if constraints.min_wards > len(available_wards):
        raise PortfolioValidationError(
            f"Minimum ward coverage ({constraints.min_wards}) exceeds "
            f"available candidate wards ({len(available_wards)})."
        )

    # Ward budget feasibility pre-check
    for wb in constraints.ward_budgets:
        ward_projects = [p for p in projects if p.ward == wb.ward]
        if wb.minimum > 0:
            if not ward_projects:
                raise PortfolioValidationError(
                    f"Ward budget minimum requires a candidate project in '{wb.ward}' "
                    f"but none exists."
                )
            max_possible = sum(p.estimated_cost for p in ward_projects)
            if max_possible < wb.minimum:
                raise PortfolioValidationError(
                    f"Ward '{wb.ward}' minimum budget ({wb.minimum:,}) cannot be met: "
                    f"all candidates combined cost only {max_possible:,}."
                )


# ---------------------------------------------------------------------------
# Post-solve constraint checks
# ---------------------------------------------------------------------------


def _constraint_checks(
    projects: list[RankedProjectSchema],
    selected: list[RankedProjectSchema],
    net_budget: int,
    constraints: PortfolioConstraints,
) -> list[dict[str, object]]:
    spend = sum(p.estimated_cost for p in selected)
    wards = {p.ward for p in selected}

    checks: list[dict[str, object]] = [
        {
            "code": "budget",
            "label": "Net budget",
            "passed": spend <= net_budget,
            "actual": spend,
            "limit": net_budget,
        },
        {
            "code": "ward_coverage",
            "label": "Minimum ward coverage",
            "passed": len(wards) >= constraints.min_wards,
            "actual": len(wards),
            "limit": constraints.min_wards,
        },
    ]

    if constraints.max_projects_per_ward is not None:
        ward_counts: dict[str, int] = {}
        for p in selected:
            ward_counts[p.ward] = ward_counts.get(p.ward, 0) + 1
        checks.append(
            {
                "code": "ward_cap",
                "label": "Max projects per ward",
                "passed": max(ward_counts.values(), default=0)
                <= constraints.max_projects_per_ward,
                "actual": ward_counts,
                "limit": constraints.max_projects_per_ward,
            }
        )

    for theme, cap in constraints.max_projects_per_theme.items():
        count = sum(1 for p in selected if p.theme == theme)
        checks.append(
            {
                "code": f"theme_cap_{theme}",
                "label": f"Theme cap — {theme}",
                "passed": count <= cap,
                "actual": count,
                "limit": cap,
            }
        )

    for theme, minimum in constraints.min_projects_per_theme.items():
        count = sum(1 for p in selected if p.theme == theme)
        checks.append(
            {
                "code": f"theme_min_{theme}",
                "label": f"Theme minimum — {theme}",
                "passed": count >= minimum,
                "actual": count,
                "limit": minimum,
            }
        )

    for dep in constraints.dependencies:
        child_selected = any(p.project_id == dep.project_id for p in selected)
        prereq_selected = any(
            p.project_id == dep.prerequisite_project_id for p in selected
        )
        checks.append(
            {
                "code": f"dependency_{dep.project_id.hex[:8]}",
                "label": f"Dependency {str(dep.project_id)[:8]}→{str(dep.prerequisite_project_id)[:8]}",
                "passed": not child_selected or prereq_selected,
                "actual": {"child": child_selected, "prereq": prereq_selected},
                "limit": "child requires prereq",
            }
        )

    # Health-clinic cap per ward
    for ward in {p.ward for p in projects}:
        clinic_selected = [p for p in selected if p.ward == ward and p.theme == "health_clinic"]
        checks.append(
            {
                "code": f"health_clinic_cap_{ward}",
                "label": f"Health-clinic cap — {ward}",
                "passed": len(clinic_selected) <= 1,
                "actual": len(clinic_selected),
                "limit": 1,
            }
        )

    return checks


# ---------------------------------------------------------------------------
# Constraint explanation generator
# ---------------------------------------------------------------------------


def _build_explanations(
    constraints: PortfolioConstraints,
) -> list[ConstraintExplanation]:
    """Generate human-readable ConstraintExplanation objects from the typed
    constraint snapshot.  The explanations are purely display artefacts;
    the ILP model is the source of truth.
    """
    exps: list[ConstraintExplanation] = []

    # Budget / reserve
    exps.append(
        ConstraintExplanation(
            code="net_budget",
            label="Net spendable budget",
            formula=f"Σᵢ costᵢ xᵢ ≤ floor(B × (1 − {constraints.reserve_percent:.0f}% / 100))",
            parameters={"reserve_percent": constraints.reserve_percent},
            enforced=True,
        )
    )

    # Ward coverage
    if constraints.min_wards:
        exps.append(
            ConstraintExplanation(
                code="min_ward_coverage",
                label="Minimum ward coverage",
                formula=f"Σᵥ yᵥ ≥ {constraints.min_wards}",
                parameters={"min_wards": constraints.min_wards},
                enforced=True,
            )
        )

    # Ward project cap
    if constraints.max_projects_per_ward is not None:
        exps.append(
            ConstraintExplanation(
                code="max_projects_per_ward",
                label="Max projects per ward",
                formula=f"Σᵢ∈v xᵢ ≤ {constraints.max_projects_per_ward} ∀ ward v",
                parameters={"max_projects_per_ward": constraints.max_projects_per_ward},
                enforced=True,
            )
        )

    # Dependencies
    for dep in constraints.dependencies:
        exps.append(
            ConstraintExplanation(
                code=f"dependency_{dep.project_id.hex[:8]}",
                label="Project dependency",
                formula=f"x_{str(dep.project_id)[:8]} ≤ x_{str(dep.prerequisite_project_id)[:8]}",
                parameters={
                    "project_id": str(dep.project_id),
                    "prerequisite_project_id": str(dep.prerequisite_project_id),
                },
                enforced=True,
            )
        )

    # Theme caps
    for theme, cap in constraints.max_projects_per_theme.items():
        exps.append(
            ConstraintExplanation(
                code=f"theme_cap_{theme}",
                label=f"Theme cap — {theme}",
                formula=f"Σᵢ∈{theme} xᵢ ≤ {cap}",
                parameters={"theme": theme, "cap": cap},
                enforced=True,
            )
        )

    for theme, minimum in constraints.min_projects_per_theme.items():
        exps.append(
            ConstraintExplanation(
                code=f"theme_min_{theme}",
                label=f"Theme minimum — {theme}",
                formula=f"Σᵢ∈{theme} xᵢ ≥ {minimum}",
                parameters={"theme": theme, "minimum": minimum},
                enforced=True,
            )
        )

    # Mandatory / forbidden
    for pid in constraints.mandatory_project_ids:
        exps.append(
            ConstraintExplanation(
                code=f"mandatory_{str(pid)[:8]}",
                label="Mandatory project",
                formula=f"x_{str(pid)[:8]} = 1",
                parameters={"project_id": str(pid)},
                enforced=True,
            )
        )
    for pid in constraints.forbidden_project_ids:
        exps.append(
            ConstraintExplanation(
                code=f"forbidden_{str(pid)[:8]}",
                label="Forbidden project",
                formula=f"x_{str(pid)[:8]} = 0",
                parameters={"project_id": str(pid)},
                enforced=True,
            )
        )

    # Ward budgets
    for wb in constraints.ward_budgets:
        parts: list[str] = []
        if wb.minimum:
            parts.append(f"{wb.minimum:,} ≤")
        parts.append(f"Σᵢ∈{wb.ward} costᵢ xᵢ")
        if wb.maximum is not None:
            parts.append(f"≤ {wb.maximum:,}")
        exps.append(
            ConstraintExplanation(
                code=f"ward_budget_{wb.ward}",
                label=f"Ward budget bounds — {wb.ward}",
                formula=" ".join(parts),
                parameters={"ward": wb.ward, "minimum": wb.minimum, "maximum": wb.maximum},
                enforced=True,
            )
        )

    # Health-clinic cap (always active)
    exps.append(
        ConstraintExplanation(
            code="health_clinic_cap",
            label="Health-clinic cap (per ward)",
            formula="Σᵢ∈health_clinic ∩ ward(v) xᵢ ≤ 1  ∀ ward v",
            parameters={},
            enforced=True,
        )
    )

    return exps


# ---------------------------------------------------------------------------
# ILP solver
# ---------------------------------------------------------------------------


def _ilp_solve(
    projects: list[RankedProjectSchema],
    total_budget: int,
    constraints: PortfolioConstraints,
    weights: SolverWeights | None = None,
) -> SolverResult:
    """Solve the typed 0/1 portfolio model using PuLP/CBC.

    Implementation sequence (per spec §10):
      1. build_model
      2. solve with timeout + MIP gap
      3. extract_solver_result
      4. validate_solution (constraint_checks)
    """
    if weights is None:
        weights = SolverWeights()

    try:
        import pulp  # type: ignore[import-untyped]
    except ImportError as exc:
        if constraints.allow_heuristic_fallback:
            net = int(total_budget * (1 - constraints.reserve_percent / 100))
            reserve = total_budget - net
            selected = _greedy_knapsack(
                projects, net, weights, constraints.max_projects_per_ward
            )
            spend = sum(p.estimated_cost for p in selected)
            return SolverResult(
                status="heuristic_fallback",
                selected=selected,
                objective_value=sum(_benefit(p, weights) for p in selected),
                net_budget=net,
                spend=spend,
                reserve_amount=reserve,
                solve_seconds=0.0,
                mip_gap=None,
                checks=_constraint_checks(projects, selected, net, constraints),
                fallback_reason="PuLP/CBC solver is not installed.",
                weights=weights,
            )
        raise PortfolioSolverUnavailable(
            "PuLP is required for ILP optimization. "
            "Install it with: pip install pulp==2.9.0"
        ) from exc

    # --- Budget accounting ---
    net_budget = math.floor(total_budget * (1 - constraints.reserve_percent / 100))
    reserve_amount = total_budget - net_budget

    started = monotonic()

    # --- Build model ---
    model = pulp.LpProblem("CivicoPortfolio", pulp.LpMaximize)

    # Binary decision variables: xᵢ ∈ {0, 1}
    x: dict[UUID, pulp.LpVariable] = {
        p.project_id: pulp.LpVariable(f"x_{p.project_id.hex}", cat="Binary")
        for p in projects
    }

    # Objective: maximize Σᵢ benefitᵢ × xᵢ
    model += pulp.lpSum(_benefit(p, weights) * x[p.project_id] for p in projects), "objective"

    # Constraint 1: net budget
    model += (
        pulp.lpSum(p.estimated_cost * x[p.project_id] for p in projects) <= net_budget,
        "net_budget",
    )

    # Constraint 2: ward project cap
    if constraints.max_projects_per_ward is not None:
        for ward in {p.ward for p in projects}:
            model += (
                pulp.lpSum(x[p.project_id] for p in projects if p.ward == ward)
                <= constraints.max_projects_per_ward,
                f"ward_cap_{ward}",
            )

    # Constraint 3: ward coverage (yᵥ variables)
    wards = sorted({p.ward for p in projects})
    y: dict[str, pulp.LpVariable] = {
        ward: pulp.LpVariable(f"y_{i}", cat="Binary")
        for i, ward in enumerate(wards)
    }
    for ward, used in y.items():
        ward_projects = [x[p.project_id] for p in projects if p.ward == ward]
        # yᵥ ≤ Σᵢ∈v xᵢ  (ward is "used" only if ≥1 project selected)
        model += pulp.lpSum(ward_projects) >= used, f"ward_used_lower_{ward}"
        # xᵢ ≤ yᵥ  (selected projects pull ward into "used")
        for var in ward_projects:
            model += var <= used, f"ward_used_link_{ward}_{var.name}"
    if constraints.min_wards:
        model += (
            pulp.lpSum(y.values()) >= constraints.min_wards,
            "minimum_ward_coverage",
        )

    # Constraint 4: theme caps and minimums
    for theme, cap in constraints.max_projects_per_theme.items():
        model += (
            pulp.lpSum(x[p.project_id] for p in projects if p.theme == theme) <= cap,
            f"theme_cap_{theme}",
        )
    for theme, minimum in constraints.min_projects_per_theme.items():
        model += (
            pulp.lpSum(x[p.project_id] for p in projects if p.theme == theme) >= minimum,
            f"theme_min_{theme}",
        )

    # Constraint 5: ward budget bounds
    for wb in constraints.ward_budgets:
        ward_cost = pulp.lpSum(
            p.estimated_cost * x[p.project_id] for p in projects if p.ward == wb.ward
        )
        if wb.minimum:
            model += ward_cost >= wb.minimum, f"ward_min_budget_{wb.ward}"
        if wb.maximum is not None:
            model += ward_cost <= wb.maximum, f"ward_max_budget_{wb.ward}"

    # Constraint 6: dependencies — x_child ≤ x_prerequisite
    for dep in constraints.dependencies:
        model += (
            x[dep.project_id] <= x[dep.prerequisite_project_id],
            f"dependency_{dep.project_id.hex}",
        )

    # Constraint 7: mandatory / forbidden
    for pid in constraints.mandatory_project_ids:
        model += x[pid] == 1, f"mandatory_{pid.hex}"
    for pid in constraints.forbidden_project_ids:
        model += x[pid] == 0, f"forbidden_{pid.hex}"

    # Constraint 8: health-clinic cap — at most 1 health clinic per ward
    # (Documented product rule; always enforced regardless of theme caps above.)
    for ward in {p.ward for p in projects}:
        clinic_vars = [x[p.project_id] for p in projects if p.ward == ward and p.theme == "health_clinic"]
        if clinic_vars:
            model += pulp.lpSum(clinic_vars) <= 1, f"health_clinic_cap_{ward}"

    # Constraint 9: capacity (simple total-project cap when capacity_by_month not provided)
    # Time-indexed scheduling is deferred until project_durations_months data is available.
    if constraints.capacity_by_month:
        total_cap = min(constraints.capacity_by_month.values())
        model += pulp.lpSum(x.values()) <= total_cap, "total_capacity"

    # --- Solve with timeout and MIP gap ---
    solver = pulp.PULP_CBC_CMD(
        msg=False,
        timeLimit=constraints.solver_time_limit_seconds,
        gapRel=constraints.solver_mip_gap,
    )
    model.solve(solver)
    solve_seconds = monotonic() - started

    # --- Map solver status ---
    # PuLP model.status: 1=Optimal, 0=Not Solved, -1=Infeasible, -2=Unbounded, -3=Undefined
    # PuLP model.sol_status: 1=Optimal, 2=Not Solved, 0=Infeasible, -1=Unbounded, -2=Undefined
    raw_lp = pulp.LpStatus.get(model.status, "Unknown").lower()
    sol_status = getattr(model, "sol_status", None)

    if raw_lp == "optimal":
        status = "optimal"
    elif raw_lp == "not solved" and sol_status == 2:
        # CBC hit time limit with a feasible incumbent
        status = "timeout"
    elif raw_lp in {"infeasible", "not solved"} and sol_status in {0, None}:
        status = "infeasible"
    elif raw_lp == "unbounded":
        status = "unbounded"
    elif raw_lp == "undefined":
        status = "error"
    else:
        # Feasible incumbent found (MIP not proven optimal but within gap)
        status = "feasible"

    # Try to extract MIP gap from CBC output
    mip_gap: float | None = None
    try:
        mip_gap = float(getattr(solver, "mipGap", None) or 0) or None
    except (TypeError, ValueError):
        mip_gap = None

    if status not in {"optimal", "feasible", "timeout"}:
        return SolverResult(
            status=status,
            selected=[],
            objective_value=0.0,
            net_budget=net_budget,
            spend=0,
            reserve_amount=reserve_amount,
            solve_seconds=solve_seconds,
            mip_gap=mip_gap,
            checks=[],
            weights=weights,
        )

    selected = [p for p in projects if pulp.value(x[p.project_id]) == 1.0]
    objective_value = float(pulp.value(model.objective) or 0.0)
    spend = sum(p.estimated_cost for p in selected)
    checks = _constraint_checks(projects, selected, net_budget, constraints)

    return SolverResult(
        status=status,
        selected=selected,
        objective_value=objective_value,
        net_budget=net_budget,
        spend=spend,
        reserve_amount=reserve_amount,
        solve_seconds=solve_seconds,
        mip_gap=mip_gap,
        checks=checks,
        weights=weights,
    )


# ---------------------------------------------------------------------------
# Service layer
# ---------------------------------------------------------------------------


class PortfolioService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def optimize_portfolio(self, payload: PortfolioCreate) -> PortfolioResponse:
        result = await self._db.execute(
            select(RankedProject)
            .where(RankedProject.constituency == payload.constituency)
            .order_by(RankedProject.score.desc())
        )
        rows = list(result.scalars().all())
        constraints = payload.constraints
        weights = payload.weights

        if not rows:
            from app.schemas.ranking import RankingRequest
            from app.services.ranking_service import RankingService
            ranking_service = RankingService(self._db)
            await ranking_service.generate_ranking(
                RankingRequest(constituency=payload.constituency, budget=payload.budget)
            )
            result = await self._db.execute(
                select(RankedProject)
                .where(RankedProject.constituency == payload.constituency)
                .order_by(RankedProject.score.desc())
            )
            rows = list(result.scalars().all())

        if not rows:
            empty_id = uuid4()
            net_budget = math.floor(payload.budget * (1 - constraints.reserve_percent / 100))
            return PortfolioResponse(
                portfolio_id=empty_id,
                constituency=payload.constituency,
                budget=payload.budget,
                net_budget=net_budget,
                reserve_amount=payload.budget - net_budget,
                spend=0,
                selected_projects=[],
                total_benefit=0.0,
                constraints=constraints,
                status="empty",
                solver_status="empty",
                objective_value=0.0,
                weights=weights,
                constraint_explanations=_build_explanations(constraints),
            )

        projects = [
            RankedProjectSchema(
                project_id=row.id,
                theme=row.theme_label,
                ward=row.ward,
                score=row.score,
                population_impact_score=row.population_impact_score,
                urgency_score=row.urgency_score,
                cost_effectiveness_score=row.cost_effectiveness_score,
                alignment_score=row.alignment_score,
                social_impact=row.social_impact or "",
                economic_impact=row.economic_impact or "",
                estimated_cost=row.estimated_cost,
            )
            for row in rows
        ]

        _validate_constraints(projects, constraints)
        solver_result = _ilp_solve(projects, payload.budget, constraints, weights)

        portfolio_id = uuid4()
        explanations = _build_explanations(constraints)
        constraint_snapshot = {
            "typed": constraints.model_dump(mode="json"),
            "weights": weights.model_dump(mode="json"),
            "checks": solver_result.checks,
            "explanations": [e.model_dump(mode="json") for e in explanations],
        }

        civic_portfolio = CivicPortfolio(
            id=portfolio_id,
            constituency=payload.constituency,
            budget=payload.budget,
            net_budget=solver_result.net_budget,
            reserve_amount=solver_result.reserve_amount,
            selected_project_ids=[p.project_id for p in solver_result.selected],
            total_benefit=solver_result.objective_value,
            solver_status=solver_result.status,
            solver_name="pulp-cbc",
            mip_gap=solver_result.mip_gap,
            solve_seconds=solver_result.solve_seconds,
            constraints_satisfied=constraint_snapshot,
            constraint_version=weights.version,
            fallback_reason=solver_result.fallback_reason,
        )
        self._db.add(civic_portfolio)
        await self._db.commit()

        return PortfolioResponse(
            portfolio_id=portfolio_id,
            constituency=payload.constituency,
            budget=payload.budget,
            net_budget=solver_result.net_budget,
            reserve_amount=solver_result.reserve_amount,
            spend=solver_result.spend,
            selected_projects=solver_result.selected,
            total_benefit=solver_result.objective_value,
            constraints=constraints,
            status=solver_result.status,
            solver_status=solver_result.status,
            objective_value=solver_result.objective_value,
            mip_gap=solver_result.mip_gap,
            solve_seconds=solver_result.solve_seconds,
            fallback_reason=solver_result.fallback_reason,
            weights=solver_result.weights,
            constraint_checks=solver_result.checks,
            constraint_explanations=explanations,
        )


def get_portfolio_service(db: AsyncSession) -> PortfolioService:
    return PortfolioService(db)
