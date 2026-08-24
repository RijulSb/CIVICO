"""Dashboard service — aggregates hotspots, top projects, and user submissions."""

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.submission import Submission
from app.models.ward import Hotspot, RankedProject
from app.schemas.dashboard import DashboardResponse
from app.schemas.hotspots import HotspotItem
from app.schemas.ranking import RankedProject as RankedProjectSchema
from app.schemas.ranking import ScoringWeights
from app.schemas.submissions import SubmissionResponse, SubmissionStatus


class DashboardService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def get_dashboard(self, constituency: str) -> DashboardResponse:
        # 1. Load cached hotspots
        hotspot_result = await self._db.execute(
            select(Hotspot)
            .where(Hotspot.constituency == constituency)
            .order_by(Hotspot.submission_count.desc())
        )
        hotspot_rows = hotspot_result.scalars().all()
        hotspots = [
            HotspotItem(
                ward=h.ward or "Unknown",
                theme=h.theme_label,
                submission_count=h.submission_count,
                latitude=h.centroid_lat,
                longitude=h.centroid_lon,
                radius=h.radius_meters,
            )
            for h in hotspot_rows
        ]

        # 2. Load top 10 ranked projects
        projects_result = await self._db.execute(
            select(RankedProject)
            .where(RankedProject.constituency == constituency)
            .order_by(RankedProject.score.desc())
            .limit(10)
        )
        project_rows = projects_result.scalars().all()
        top_projects = [
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
            for r in project_rows
        ]

        # 3. Load recent submissions
        sub_result = await self._db.execute(
            select(Submission)
            .where(Submission.constituency == constituency)
            .order_by(Submission.created_at.desc())
            .limit(20)
        )
        sub_rows = sub_result.scalars().all()
        user_submissions = [
            SubmissionResponse(
                submission_id=s.id,
                status=SubmissionStatus(s.status),
                theme=s.category,
                confidence=None,
                message="Retrieved from history.",
            )
            for s in sub_rows
        ]

        # 4. Total count
        count_result = await self._db.execute(
            select(func.count()).select_from(Submission).where(
                Submission.constituency == constituency
            )
        )
        total = count_result.scalar_one()

        return DashboardResponse(
            hotspots=hotspots,
            top_projects=top_projects,
            user_submissions=user_submissions,
            constituency=constituency,
            total_submissions=total,
        )


def get_dashboard_service(db: AsyncSession) -> DashboardService:
    return DashboardService(db)
