"""Ranking service — MCDA scoring of development projects.

Scoring weights per PRD §4.4:
  populationImpact  = 0.40
  urgency           = 0.30
  costEffectiveness = 0.20
  alignmentWithPlans= 0.10

Demographic seed data for Khordha is hard-coded here for the hackathon MVP.
Replace with live Census/NHM queries once the ETL pipeline is connected.
"""

from uuid import UUID, uuid4

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.ward import Hotspot, RankedProject
from app.schemas.ranking import RankedProject as RankedProjectSchema
from app.schemas.ranking import RankingRequest, RankingResponse, ScoringWeights

# ---------------------------------------------------------------------------
# Hard-coded demographic seed data (Census 2011, NHM Odisha) — Khordha
# ---------------------------------------------------------------------------

WARD_POPULATION: dict[str, int] = {
    "Ward 1": 8200,
    "Ward 2": 7400,
    "Ward 3": 9100,
    "Ward 4": 6800,
    "Ward 5": 11200,
    "Ward 6": 5900,
    "Ward 7": 8700,
    "Ward 8": 7600,
    "Ward 9": 6300,
    "Ward 10": 9800,
    "Unknown": 5000,
}

THEME_COST_ESTIMATE: dict[str, int] = {
    "road_repair": 12_000_000,       # ₹1.2 Cr
    "school_infrastructure": 8_000_000,   # ₹80 L
    "health_clinic": 15_000_000,     # ₹1.5 Cr
    "water_supply": 6_000_000,       # ₹60 L
    "electricity": 4_000_000,        # ₹40 L
    "sanitation": 3_500_000,         # ₹35 L
    "other": 5_000_000,
}

THEME_SOCIAL_IMPACT: dict[str, str] = {
    "road_repair": "Saves {pop} commute hours/day for {ward} residents",
    "school_infrastructure": "Improves learning outcomes for {pop} students in {ward}",
    "health_clinic": "Reduces OOP medical expenditure for {pop} residents in {ward}",
    "water_supply": "Provides safe drinking water to {pop} households in {ward}",
    "electricity": "24-hour power access for {pop} residents in {ward}",
    "sanitation": "Open-defecation-free status for {pop} residents in {ward}",
    "other": "Improves quality of life for {pop} residents in {ward}",
}

THEME_ECONOMIC_IMPACT: dict[str, str] = {
    "road_repair": "ROI: 2.5x — generates 50 local jobs, reduces transport cost 30%",
    "school_infrastructure": "ROI: 3.1x — boosts enrolment 15%, reduces dropout 20%",
    "health_clinic": "ROI: 1.8x — reduces disease burden, generates 20 healthcare jobs",
    "water_supply": "ROI: 2.0x — saves 2 hrs/day per household on water collection",
    "electricity": "ROI: 1.5x — enables local businesses, reduces kerosene spend",
    "sanitation": "ROI: 2.2x — reduces diarrhoeal illness 40%, improves school attendance",
    "other": "ROI: 1.3x — general infrastructure improvement",
}

WEIGHTS = ScoringWeights()  # defaults: 0.4 / 0.3 / 0.2 / 0.1

MAX_POPULATION = max(WARD_POPULATION.values())


def _score_project(
    ward: str,
    theme: str,
    submission_count: int,
) -> dict[str, float]:
    """Compute normalised sub-scores [0–100] and weighted total."""
    population = WARD_POPULATION.get(ward, 5000)
    cost = THEME_COST_ESTIMATE.get(theme, 5_000_000)
    benefit = population * 1_000  # proxy benefit in INR

    pop_score = round((population / MAX_POPULATION) * 100, 1)
    urgency_score = round(min(submission_count * 10, 100), 1)
    cost_eff_score = round(min((benefit / cost) * 10, 100), 1)
    alignment_score = 70.0  # default — replace with NHM/Census cross-reference

    total = (
        WEIGHTS.population_impact * pop_score
        + WEIGHTS.urgency * urgency_score
        + WEIGHTS.cost_effectiveness * cost_eff_score
        + WEIGHTS.alignment_with_plans * alignment_score
    )
    return {
        "score": round(total, 2),
        "population_impact_score": pop_score,
        "urgency_score": urgency_score,
        "cost_effectiveness_score": cost_eff_score,
        "alignment_score": alignment_score,
    }


class RankingService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def generate_ranking(self, request: RankingRequest) -> RankingResponse:
        # 1. Load latest hotspots for constituency
        result = await self._db.execute(
            select(Hotspot)
            .where(Hotspot.constituency == request.constituency)
            .order_by(Hotspot.submission_count.desc())
        )
        hotspots = list(result.scalars().all())

        if not hotspots:
            return RankingResponse(
                projects=[], scoring_weights=WEIGHTS, constituency=request.constituency
            )

        # 2. Score each hotspot as a project
        projects: list[RankedProjectSchema] = []
        db_rows: list[RankedProject] = []

        for h in hotspots:
            scores = _score_project(h.ward or "Unknown", h.theme_label, h.submission_count)
            pop = WARD_POPULATION.get(h.ward or "Unknown", 5000)
            cost = THEME_COST_ESTIMATE.get(h.theme_label, 5_000_000)
            social_tpl = THEME_SOCIAL_IMPACT.get(h.theme_label, THEME_SOCIAL_IMPACT["other"])
            economic = THEME_ECONOMIC_IMPACT.get(h.theme_label, THEME_ECONOMIC_IMPACT["other"])

            project_id = uuid4()
            proj = RankedProjectSchema(
                project_id=project_id,
                theme=h.theme_label,
                ward=h.ward or "Unknown",
                score=scores["score"],
                population_impact_score=scores["population_impact_score"],
                urgency_score=scores["urgency_score"],
                cost_effectiveness_score=scores["cost_effectiveness_score"],
                alignment_score=scores["alignment_score"],
                social_impact=social_tpl.format(pop=pop, ward=h.ward or "Unknown"),
                economic_impact=economic,
                estimated_cost=cost,
            )
            projects.append(proj)

            db_rows.append(
                RankedProject(
                    id=project_id,
                    constituency=request.constituency,
                    theme_label=h.theme_label,
                    ward=h.ward or "Unknown",
                    score=scores["score"],
                    population_impact_score=scores["population_impact_score"],
                    urgency_score=scores["urgency_score"],
                    cost_effectiveness_score=scores["cost_effectiveness_score"],
                    alignment_score=scores["alignment_score"],
                    social_impact=proj.social_impact,
                    economic_impact=economic,
                    estimated_cost=cost,
                )
            )

        # 3. Sort descending by score
        projects.sort(key=lambda p: p.score, reverse=True)

        # 4. Persist (delete-then-insert for MVP)
        from sqlalchemy import delete

        await self._db.execute(
            delete(RankedProject).where(RankedProject.constituency == request.constituency)
        )
        for row in db_rows:
            self._db.add(row)
        await self._db.commit()

        return RankingResponse(
            projects=projects, scoring_weights=WEIGHTS, constituency=request.constituency
        )

    async def list_cached(self, constituency: str) -> RankingResponse:
        result = await self._db.execute(
            select(RankedProject)
            .where(RankedProject.constituency == constituency)
            .order_by(RankedProject.score.desc())
        )
        rows = result.scalars().all()
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
        return RankingResponse(
            projects=projects, scoring_weights=WEIGHTS, constituency=constituency
        )


def get_ranking_service(db: AsyncSession) -> RankingService:
    return RankingService(db)
