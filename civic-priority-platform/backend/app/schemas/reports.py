from datetime import datetime
from typing import Literal

ReportLanguage = Literal["en", "hi", "or"]

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
    language: ReportLanguage = "en"


class ReportJobResponse(BaseModel):
    reportId: str
    status: Literal["generated"]
    format: Literal["pdf", "csv"]
    createdAt: datetime
    downloadUrl: str
    previewUrl: str
    language: ReportLanguage = "en"


class ReportResponse(BaseModel):
    reportId: str
    title: str
    portfolioRun: str
    createdAt: datetime
    status: str
    format: Literal["pdf", "csv"]
    downloadUrl: str
    language: ReportLanguage = "en"
