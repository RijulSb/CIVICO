"""Dashboard schemas — matches PRD §3.2 DashboardResponse contract."""

from app.schemas.common import APIModel
from app.schemas.hotspots import HotspotItem
from app.schemas.ranking import RankedProject
from app.schemas.submissions import SubmissionResponse


class DashboardResponse(APIModel):
    hotspots: list[HotspotItem]
    top_projects: list[RankedProject]
    user_submissions: list[SubmissionResponse]
    constituency: str
    total_submissions: int
