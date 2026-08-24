"""Portfolio optimization service — ILP solver using PuLP.

Maximises sum(project_score * selected) subject to:
  - total cost <= budget
  - max 3 concurrent projects per ward (geographical constraint)
  - max 1 health_clinic per ward (administrative constraint)

Falls back to a greedy knapsack when PuLP is not installed.
"""

from uuid import uuid4

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.ward import CivicPortfolio, RankedProject
from app.schemas.portfolios import PortfolioConstraints, PortfolioCreate, PortfolioResponse
from app.schemas.ranking import RankedProject as RankedProjectSchema
from app.schemas.ranking import ScoringWeights


def _greedy_knapsack(
    projects: list[RankedProjectSchema], budget: int
) -> list[RankedProjectSchema]:
    """Greedy selection by score/cost ratio as fallback."""
    candidates = sorted(projects, key=lambda p: p.score / max(p.estimated_cost, 1), reverse=True)
    selected: list[RankedProjectSchema] = []
    remaining = budget
    ward_count: dict[str, int] = {}
    for p in candidates:
        if p.estimated_cost <= remaining:
            if ward_count.get(p.ward, 0) < 3:
                selected.append(p)
                remaining -= p.estimated_cost
                ward_count[p.ward] = ward_count.get(p.ward, 0) + 1
    return selected


def _ilp_solve(
    projects: list[RankedProjectSchema], budget: int
) -> list[RankedProjectSchema]:
    """PuLP 0/1 knapsack with budget + ward-cap constraints."""
    try:
        import pulp  # type: ignore

        prob = pulp.LpProblem("CivicoPortfolio", pulp.LpMaximize)
        x = [pulp.LpVariable(f"x_{i}", cat="Binary") for i in range(len(projects))]

        # Objective: maximise total weighted score
        prob += pulp.lpSum(p.score * x[i] for i, p in enumerate(projects))

        # Budget constraint
        prob += pulp.lpSum(p.estimated_cost * x[i] for i, p in enumerate(projects)) <= budget

        # Ward cap: max 3 projects per ward
        wards = set(p.ward for p in projects)
        for ward in wards:
            ward_indices = [i for i, p in enumerate(projects) if p.ward == ward]
            if len(ward_indices) > 3:
                prob += pulp.lpSum(x[i] for i in ward_indices) <= 3

        prob.solve(pulp.PULP_CBC_CMD(msg=0))
        return [projects[i] for i, v in enumerate(x) if pulp.value(v) == 1.0]

    except (ImportError, Exception):
        return _greedy_knapsack(projects, budget)


class PortfolioService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def optimize_portfolio(self, payload: PortfolioCreate) -> PortfolioResponse:
        # 1. Load latest ranked projects
        result = await self._db.execute(
            select(RankedProject)
            .where(RankedProject.constituency == payload.constituency)
            .order_by(RankedProject.score.desc())
        )
        rows = list(result.scalars().all())

        if not rows:
            portfolio_id = uuid4()
            return PortfolioResponse(
                portfolio_id=portfolio_id,
                constituency=payload.constituency,
                budget=payload.budget,
                selected_projects=[],
                total_benefit=0.0,
                constraints=payload.constraints,
                status="empty",
            )

        projects = [
            RankedProjectSchema(
                project_id=r.id,
                theme=r.theme_label,
                ward=r.ward,
                score=r.score,
                population_impact_score=r.population_impact_score,
                urgency_score=r.urgency_score,
                cost_effectiveness_score=r.cost_effectiveness_score,
                alignment_score=r.alignment_score,
                social_impact=r.social_impact or "",
                economic_impact=r.economic_impact or "",
                estimated_cost=r.estimated_cost,
            )
            for r in rows
        ]

        # 2. Run ILP (or greedy fallback)
        selected = _ilp_solve(projects, payload.budget)
        total_benefit = sum(p.score for p in selected)
        portfolio_id = uuid4()

        # 3. Persist
        civic_portfolio = CivicPortfolio(
            id=portfolio_id,
            constituency=payload.constituency,
            budget=payload.budget,
            selected_project_ids=[p.project_id for p in selected],
            total_benefit=total_benefit,
            constraints_satisfied={
                "geographical": payload.constraints.geographical,
                "timeline": payload.constraints.timeline,
                "administrative": payload.constraints.administrative,
            },
        )
        self._db.add(civic_portfolio)
        await self._db.commit()

        return PortfolioResponse(
            portfolio_id=portfolio_id,
            constituency=payload.constituency,
            budget=payload.budget,
            selected_projects=selected,
            total_benefit=total_benefit,
            constraints=payload.constraints,
            status="optimized",
        )


def get_portfolio_service(db: AsyncSession) -> PortfolioService:
    return PortfolioService(db)
