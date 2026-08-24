from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class ReportCreate(BaseModel):
    runId: str
    title: str = Field(
        default="Khordha Development Priority Decision Brief",
        min_length=1,
        max_length=180,
    )
    format: Literal["pdf", "csv"] = "pdf"
    includeHotspotMap: bool = True
    includeRejectedProjects: bool = False
    includeCitizenEvidence: bool = True


class ReportJobResponse(BaseModel):
    reportId: str
    status: Literal["generated"]
    format: Literal["pdf", "csv"]
    createdAt: datetime
    downloadUrl: str
    previewUrl: str


class ReportResponse(BaseModel):
    reportId: str
    title: str
    portfolioRun: str
    createdAt: datetime
    status: str
    format: Literal["pdf", "csv"]
    downloadUrl: str
