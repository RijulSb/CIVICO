"""Full ILP test matrix for the portfolio optimizer.

Scenario coverage (per specification §12):
  ✓ Reserve deduction rejects over-gross-budget project
  ✓ Child without prerequisite is not selected
  ✓ Prerequisite + child within budget — both selected
  ✓ Dependency cycle → 422 before solving
  ✓ Minimum ward coverage infeasible → infeasible status
  ✓ Three projects in a ward with cap 2 → at most 2 selected
  ✓ Health-clinic cap → no ward gets more than 1 clinic
  ✓ Theme minimum cap enforced
  ✓ Theme maximum cap enforced
  ✓ Mandatory project always selected
  ✓ Forbidden project never selected
  ✓ Ward budget minimum enforced
  ✓ PuLP unavailable without allow_heuristic_fallback → PortfolioSolverUnavailable
  ✓ PuLP unavailable with allow_heuristic_fallback → heuristic_fallback status
  ✓ Net budget and reserve_amount are consistent
  ✓ Unknown constraint reference → 422 before solving
"""

from __future__ import annotations

from unittest.mock import MagicMock, patch
from uuid import uuid4

import pytest

from app.schemas.portfolios import PortfolioConstraints, ProjectDependency, SolverWeights, WardBudget
from app.schemas.ranking import RankedProject
from app.services.portfolio_service import (
    PortfolioSolverUnavailable,
    PortfolioValidationError,
    _ilp_solve,
    _validate_constraints,
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def project(
    theme: str,
    ward: str,
    score: float,
    cost: int,
    *,
    pop: float | None = None,
    urg: float | None = None,
    eff: float | None = None,
    aln: float | None = None,
) -> RankedProject:
    return RankedProject(
        project_id=uuid4(),
        theme=theme,
        ward=ward,
        score=score,
        population_impact_score=pop if pop is not None else score,
        urgency_score=urg if urg is not None else score,
        cost_effectiveness_score=eff if eff is not None else score,
        alignment_score=aln if aln is not None else score,
        social_impact="evidence",
        economic_impact="evidence",
        estimated_cost=cost,
    )


DEFAULT_WEIGHTS = SolverWeights()


# ---------------------------------------------------------------------------
# Budget / reserve scenarios
# ---------------------------------------------------------------------------


def test_reserve_reduces_spendable_budget():
    """Two projects exceed net budget but both fit gross budget — reserve is protected."""
    expensive = project("road_repair", "Ward 1", 100, 95)
    affordable = project("water_supply", "Ward 2", 80, 80)

    result = _ilp_solve(
        [expensive, affordable],
        total_budget=100,
        constraints=PortfolioConstraints(reserve_percent=10),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    assert result.net_budget == 90
    assert result.reserve_amount == 10
    assert expensive not in result.selected
    assert affordable in result.selected


def test_net_budget_and_reserve_amount_are_consistent():
    """net_budget + reserve_amount == total_budget."""
    p = project("road_repair", "Ward 1", 100, 40)
    result = _ilp_solve(
        [p],
        total_budget=100,
        constraints=PortfolioConstraints(reserve_percent=5),
        weights=DEFAULT_WEIGHTS,
    )
    assert result.net_budget + result.reserve_amount == 100


def test_spend_is_sum_of_selected_costs():
    p1 = project("road_repair", "Ward 1", 100, 30)
    p2 = project("water_supply", "Ward 2", 80, 25)
    result = _ilp_solve(
        [p1, p2],
        total_budget=100,
        constraints=PortfolioConstraints(reserve_percent=0),
        weights=DEFAULT_WEIGHTS,
    )
    expected_spend = sum(p.estimated_cost for p in result.selected)
    assert result.spend == expected_spend


# ---------------------------------------------------------------------------
# Dependency scenarios
# ---------------------------------------------------------------------------


def test_dependency_prevents_child_without_prerequisite():
    """Child project is never selected without its prerequisite."""
    parent = project("road_repair", "Ward 1", 10, 10)
    child = project("street_lighting", "Ward 1", 100, 10)
    independent = project("water_supply", "Ward 2", 50, 10)

    result = _ilp_solve(
        [parent, child, independent],
        total_budget=20,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            dependencies=[
                ProjectDependency(
                    project_id=child.project_id,
                    prerequisite_project_id=parent.project_id,
                )
            ],
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    # Both fit within budget; solver must include parent when child is selected
    assert child in result.selected
    assert parent in result.selected
    assert independent not in result.selected


def test_prerequisite_and_child_both_selected_when_feasible():
    parent = project("road_repair", "Ward 1", 70, 20)
    child = project("street_lighting", "Ward 1", 80, 20)

    result = _ilp_solve(
        [parent, child],
        total_budget=60,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            dependencies=[
                ProjectDependency(
                    project_id=child.project_id,
                    prerequisite_project_id=parent.project_id,
                )
            ],
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    assert parent in result.selected
    assert child in result.selected


def test_dependency_cycle_is_rejected_before_solving():
    first = project("road_repair", "Ward 1", 10, 10)
    second = project("water_supply", "Ward 2", 10, 10)
    constraints = PortfolioConstraints(
        dependencies=[
            ProjectDependency(
                project_id=first.project_id,
                prerequisite_project_id=second.project_id,
            ),
            ProjectDependency(
                project_id=second.project_id,
                prerequisite_project_id=first.project_id,
            ),
        ]
    )

    with pytest.raises(PortfolioValidationError, match="cycle"):
        _validate_constraints([first, second], constraints)


def test_unknown_constraint_reference_is_rejected():
    candidate = project("road_repair", "Ward 1", 10, 10)
    unknown = uuid4()

    with pytest.raises(PortfolioValidationError, match="unknown project IDs"):
        _validate_constraints(
            [candidate],
            PortfolioConstraints(mandatory_project_ids=[unknown]),
        )


# ---------------------------------------------------------------------------
# Ward coverage scenarios
# ---------------------------------------------------------------------------


def test_minimum_ward_coverage_is_enforced():
    """Solver selects from both wards even though one has lower score."""
    first = project("road_repair", "Ward 1", 100, 10)
    second = project("water_supply", "Ward 2", 10, 10)

    result = _ilp_solve(
        [first, second],
        total_budget=30,
        constraints=PortfolioConstraints(reserve_percent=0, min_wards=2),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    wards = {p.ward for p in result.selected}
    assert "Ward 1" in wards
    assert "Ward 2" in wards


def test_minimum_ward_coverage_infeasible_when_not_enough_candidate_wards():
    """Only one ward available but min_wards=2 → validation error."""
    p = project("road_repair", "Ward 1", 100, 10)

    with pytest.raises(PortfolioValidationError, match="ward"):
        _validate_constraints([p], PortfolioConstraints(min_wards=2))


def test_ward_cap_limits_projects_per_ward():
    """Three projects in a ward with cap 2 → at most 2 selected."""
    p1 = project("road_repair", "Ward 1", 100, 10)
    p2 = project("water_supply", "Ward 1", 90, 10)
    p3 = project("school_infra", "Ward 1", 80, 10)

    result = _ilp_solve(
        [p1, p2, p3],
        total_budget=60,
        constraints=PortfolioConstraints(reserve_percent=0, max_projects_per_ward=2),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    ward_1_count = sum(1 for p in result.selected if p.ward == "Ward 1")
    assert ward_1_count <= 2


# ---------------------------------------------------------------------------
# Theme scenarios
# ---------------------------------------------------------------------------


def test_health_clinic_cap_per_ward():
    """No ward receives more than 1 health-clinic project."""
    c1 = project("health_clinic", "Ward 5", 90, 10)
    c2 = project("health_clinic", "Ward 5", 85, 10)
    road = project("road_repair", "Ward 5", 80, 10)

    result = _ilp_solve(
        [c1, c2, road],
        total_budget=50,
        constraints=PortfolioConstraints(reserve_percent=0, max_projects_per_ward=3),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    clinics_in_ward5 = sum(
        1 for p in result.selected if p.ward == "Ward 5" and p.theme == "health_clinic"
    )
    assert clinics_in_ward5 <= 1


def test_theme_maximum_cap_is_enforced():
    """At most 1 road project allowed via max_projects_per_theme."""
    r1 = project("road_repair", "Ward 1", 100, 10)
    r2 = project("road_repair", "Ward 2", 90, 10)
    r3 = project("road_repair", "Ward 3", 80, 10)

    result = _ilp_solve(
        [r1, r2, r3],
        total_budget=50,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            max_projects_per_theme={"road_repair": 1},
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    road_count = sum(1 for p in result.selected if p.theme == "road_repair")
    assert road_count <= 1


def test_theme_minimum_cap_is_enforced():
    """At least 2 water_supply projects required."""
    w1 = project("water_supply", "Ward 1", 10, 10)
    w2 = project("water_supply", "Ward 2", 10, 10)
    road = project("road_repair", "Ward 3", 100, 10)

    result = _ilp_solve(
        [w1, w2, road],
        total_budget=50,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            min_projects_per_theme={"water_supply": 2},
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    water_count = sum(1 for p in result.selected if p.theme == "water_supply")
    assert water_count >= 2


# ---------------------------------------------------------------------------
# Mandatory / forbidden scenarios
# ---------------------------------------------------------------------------


def test_mandatory_project_always_selected():
    cheap = project("road_repair", "Ward 2", 90, 5)
    forced = project("water_supply", "Ward 1", 10, 30)

    result = _ilp_solve(
        [cheap, forced],
        total_budget=50,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            mandatory_project_ids=[forced.project_id],
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    assert forced in result.selected


def test_forbidden_project_never_selected():
    banned = project("road_repair", "Ward 1", 100, 10)
    allowed = project("water_supply", "Ward 2", 50, 10)

    result = _ilp_solve(
        [banned, allowed],
        total_budget=50,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            forbidden_project_ids=[banned.project_id],
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    assert banned not in result.selected
    assert allowed in result.selected


# ---------------------------------------------------------------------------
# Ward budget scenarios
# ---------------------------------------------------------------------------


def test_ward_budget_minimum_enforced():
    """Ward 1 must receive at least 20 in spend."""
    cheap = project("road_repair", "Ward 1", 100, 5)
    expensive = project("road_repair", "Ward 1", 90, 25)
    other = project("water_supply", "Ward 2", 80, 5)

    result = _ilp_solve(
        [cheap, expensive, other],
        total_budget=100,
        constraints=PortfolioConstraints(
            reserve_percent=0,
            ward_budgets=[WardBudget(ward="Ward 1", minimum=20)],
        ),
        weights=DEFAULT_WEIGHTS,
    )

    assert result.status == "optimal"
    ward1_spend = sum(p.estimated_cost for p in result.selected if p.ward == "Ward 1")
    assert ward1_spend >= 20


def test_ward_budget_minimum_infeasible_when_no_candidate():
    """Ward with no candidates but a minimum budget → validation error."""
    p = project("road_repair", "Ward 1", 100, 10)

    with pytest.raises(PortfolioValidationError, match="Ward.*budget"):
        _validate_constraints(
            [p],
            PortfolioConstraints(
                ward_budgets=[WardBudget(ward="Ward 99", minimum=1_000_000)]
            ),
        )


# ---------------------------------------------------------------------------
# Solver availability scenarios
# ---------------------------------------------------------------------------


def test_pulp_unavailable_without_fallback_raises():
    """When PuLP is not installed and allow_heuristic_fallback=False → 503."""
    p = project("road_repair", "Ward 1", 100, 10)
    with patch("builtins.__import__", side_effect=ImportError("No module named 'pulp'")):
        with pytest.raises(PortfolioSolverUnavailable):
            _ilp_solve(
                [p],
                total_budget=100,
                constraints=PortfolioConstraints(allow_heuristic_fallback=False),
                weights=DEFAULT_WEIGHTS,
            )


def test_pulp_unavailable_with_fallback_returns_heuristic():
    """When PuLP is not installed and allow_heuristic_fallback=True → heuristic_fallback."""
    p = project("road_repair", "Ward 1", 100, 10)
    with patch("builtins.__import__", side_effect=ImportError("No module named 'pulp'")):
        result = _ilp_solve(
            [p],
            total_budget=100,
            constraints=PortfolioConstraints(allow_heuristic_fallback=True),
            weights=DEFAULT_WEIGHTS,
        )
    assert result.status == "heuristic_fallback"
    assert result.fallback_reason is not None
    assert "PuLP" in result.fallback_reason


# ---------------------------------------------------------------------------
# Weighted objective
# ---------------------------------------------------------------------------


def test_weighted_benefit_objective_selects_higher_equity_project():
    """With high equity weight, the project with higher pop_impact is preferred
    even if its raw score is lower.
    """
    high_equity = project("health_clinic", "Ward 1", 60, 20, pop=90, urg=40, eff=40, aln=40)
    low_equity = project("road_repair", "Ward 2", 80, 20, pop=40, urg=80, eff=80, aln=80)

    equity_heavy = SolverWeights(
        version="equity_test",
        population_impact=0.70,
        urgency=0.10,
        cost_effectiveness=0.10,
        alignment=0.10,
    )

    result = _ilp_solve(
        [high_equity, low_equity],
        total_budget=25,
        constraints=PortfolioConstraints(reserve_percent=0),
        weights=equity_heavy,
    )

    assert result.status == "optimal"
    assert high_equity in result.selected
    assert low_equity not in result.selected
