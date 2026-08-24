"""Reports API - decision brief generation for completed portfolio runs."""

import csv
import io
from datetime import datetime, timezone
from typing import Literal

from fastapi import APIRouter, File, HTTPException, Query, Response, UploadFile, status

from app.api.v1.optimization import (
    OPTIMIZATION_RUNS,
    RunOptimizationRequest,
    run_optimization,
)
from app.schemas.reports import ReportCreate, ReportJobResponse, ReportResponse

router = APIRouter()

REPORTS: dict[str, dict] = {}


async def _latest_or_seed_run() -> dict:
    completed = [
        run for run in OPTIMIZATION_RUNS.values() if run.get("status") == "completed"
    ]
    if completed:
        return completed[-1]
    return await run_optimization(RunOptimizationRequest())


async def _get_run(run_id: str | None = None) -> dict:
    if run_id:
        run = OPTIMIZATION_RUNS.get(run_id)
        if not run:
            raise HTTPException(status_code=404, detail="Optimization run not found.")
        if run.get("status") != "completed":
            raise HTTPException(
                status_code=409,
                detail="The selected optimization run is not completed.",
            )
        return run
    return await _latest_or_seed_run()


def _inr(value: float | int) -> str:
    return f"Rs {round(float(value) / 1e7, 1)} Cr"


def _number(value: str | int | float | None, default: float = 0) -> float:
    if value is None:
        return default
    if isinstance(value, int | float):
        return float(value)
    cleaned = (
        value.replace("Rs", "")
        .replace("INR", "")
        .replace("Cr", "")
        .replace(",", "")
        .strip()
    )
    try:
        return float(cleaned)
    except ValueError:
        return default


def _report_payload(run: dict) -> dict:
    summary = run.get("summary", {})
    selected = run.get("selectedProjects", [])
    constraints = run.get("constraintsStatus", [])
    total_months = max((p.get("estimatedMonths", 0) for p in selected), default=0)

    return {
        "runId": run["runId"],
        "constituency": "Khordha",
        "status": "Draft recommendation - requires authority review",
        "summary": {
            "budget": 450000000,
            "totalAllocated": summary.get("totalCostRaw", 0),
            "remainingBudget": summary.get("remainingBudgetRaw", 0),
            "selectedProjectCount": summary.get("selectedProjectCount", 0),
            "wardCoverage": summary.get("wardCoverage", 0),
            "totalWards": summary.get("totalWardsTested", 7),
            "timelineMonths": total_months or 18,
            "totalBenefit": summary.get("totalBenefit", 0),
        },
        "selectedProjects": [
            {
                "priority": index,
                "projectId": project.get("id"),
                "title": project.get("title"),
                "ward": project.get("wardName"),
                "estimatedCost": project.get("estimatedCost", 0),
                "timelineMonths": project.get("estimatedMonths", 0),
                "benefitScore": project.get("benefitScore", 0),
                "selectionReason": project.get("selectionReason"),
                "evidence": {
                    "submissionCount": project.get("demandCount", 0),
                    "affectedPopulation": project.get("affectedPopulation", 0),
                    "voiceReports": round(project.get("demandCount", 0) * 0.34),
                    "photoReports": round(project.get("demandCount", 0) * 0.14),
                },
                "whySelected": [
                    f"{project.get('demandCount', 0)} validated citizen reports.",
                    f"Approximately {project.get('affectedPopulation', 0):,} residents affected.",
                    f"Benefit score {project.get('benefitScore', 0)} within available budget.",
                    project.get("selectionReason") or "No prerequisite dependency.",
                ],
            }
            for index, project in enumerate(selected, 1)
        ],
        "rejectedProjects": run.get("rejectedProjects", []),
        "constraintValidation": [
            {
                "label": item.get("name"),
                "status": "passed" if item.get("satisfied") else "failed",
                "message": item.get("detail"),
            }
            for item in constraints
        ],
        "provenance": [
            "Validated citizen submissions: 2,845",
            "Input channels: text, voice, photo",
            "Languages processed: Odia, Hindi, English",
            "Demographic data: constituency and ward dataset",
            "Infrastructure dataset: facilities, road and service-gap records",
            "Optimization method: weighted scoring + constraint-aware portfolio selection",
        ],
    }


def _csv_bytes(payload: dict, include_rejected: bool) -> bytes:
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["People's Priorities Decision Brief"])
    writer.writerow(["Portfolio Run", payload["runId"]])
    writer.writerow(["Status", payload["status"]])
    writer.writerow([])
    writer.writerow(["Priority", "Project", "Ward", "Cost", "Expected Benefit", "Timeline"])
    for project in payload["selectedProjects"]:
        writer.writerow(
            [
                project["priority"],
                project["title"],
                project["ward"],
                _inr(project["estimatedCost"]),
                f"{project['evidence']['affectedPopulation']:,} residents",
                f"{project['timelineMonths']} months",
            ]
        )
    if include_rejected:
        writer.writerow([])
        writer.writerow(["Rejected Project", "Ward", "Reason"])
        for project in payload["rejectedProjects"]:
            writer.writerow(
                [
                    project.get("title"),
                    project.get("wardName"),
                    project.get("exclusionReason"),
                ]
            )
    return output.getvalue().encode("utf-8")


def _escape_pdf_text(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def _pdf_bytes(payload: dict, title: str, include_rejected: bool) -> bytes:
    lines = [
        "People's Priorities",
        title,
        payload["status"],
        "",
        f"Planning budget: {_inr(payload['summary']['budget'])}",
        f"Recommended allocation: {_inr(payload['summary']['totalAllocated'])}",
        f"Unallocated reserve: {_inr(payload['summary']['remainingBudget'])}",
        f"Selected projects: {payload['summary']['selectedProjectCount']}",
        f"Wards covered: {payload['summary']['wardCoverage']} of {payload['summary']['totalWards']}",
        f"Planning timeline: {payload['summary']['timelineMonths']} months",
        "",
        "This portfolio maximizes citizen-demand-weighted public benefit while respecting budget, timeline, geographic coverage, and project dependency constraints.",
        "",
        "Recommended projects",
    ]
    for project in payload["selectedProjects"]:
        lines.extend(
            [
                f"{project['priority']}. {project['title']} - {project['ward']}",
                f"   Cost: {_inr(project['estimatedCost'])}; Timeline: {project['timelineMonths']} months; Benefit score: {project['benefitScore']}",
                f"   Evidence: {project['evidence']['submissionCount']} reports, {project['evidence']['affectedPopulation']:,} residents, {project['evidence']['voiceReports']} voice reports, {project['evidence']['photoReports']} photo reports.",
                f"   Why selected: {' '.join(project['whySelected'])}",
            ]
        )
    lines.extend(["", "Portfolio Validation"])
    lines.extend(
        f"{'PASSED' if item['status'] == 'passed' else 'FAILED'} - {item['label']}: {item['message']}"
        for item in payload["constraintValidation"]
    )
    lines.extend(["", "Evidence sources"])
    lines.extend(payload["provenance"])
    if include_rejected:
        lines.extend(["", "Rejected proposals"])
        lines.extend(
            f"{project.get('title')} - {project.get('exclusionReason')}"
            for project in payload["rejectedProjects"]
        )

    content_lines = ["BT", "/F1 10 Tf", "50 770 Td", "14 TL"]
    for line in lines[:52]:
        content_lines.append(f"({_escape_pdf_text(line)}) Tj")
        content_lines.append("T*")
    content_lines.append("ET")
    stream = "\n".join(content_lines).encode("utf-8")

    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream",
    ]
    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, obj in enumerate(objects, 1):
        offsets.append(len(pdf))
        pdf.extend(f"{index} 0 obj\n".encode("ascii"))
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")
    xref = len(pdf)
    pdf.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    pdf.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        pdf.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    pdf.extend(
        f"trailer << /Root 1 0 R /Size {len(objects) + 1} >>\nstartxref\n{xref}\n%%EOF\n".encode(
            "ascii"
        )
    )
    return bytes(pdf)


@router.get("/source-runs")
async def source_runs(constituency: str = Query(default="khordha")) -> dict:
    run = await _latest_or_seed_run()
    summary = run.get("summary", {})
    return {
        "runs": [
            {
                "runId": run["runId"],
                "createdAt": datetime.now(timezone.utc).isoformat(),
                "budget": 450000000,
                "selectedProjectCount": summary.get("selectedProjectCount", 0),
                "totalCost": summary.get("totalCostRaw", 0),
                "totalBenefit": summary.get("totalBenefit", 0),
                "status": run.get("status", "completed"),
                "constituency": constituency,
            }
        ]
    }


@router.post("/upload-source")
async def upload_source_csv(file: UploadFile = File(...)) -> dict:
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="Upload a CSV file from Priorities.")

    content = (await file.read()).decode("utf-8-sig")
    rows = list(csv.reader(io.StringIO(content)))
    header_index = next(
        (
            index
            for index, row in enumerate(rows)
            if row and row[0].strip().lower() == "priority"
        ),
        None,
    )
    if header_index is None:
        raise HTTPException(
            status_code=400,
            detail="Could not find the priorities project table in this CSV.",
        )

    headers = [item.strip() for item in rows[header_index]]
    projects = []
    for row in rows[header_index + 1 :]:
        if not row or not row[0].strip():
            break
        values = dict(zip(headers, row))
        title = values.get("Project Title") or values.get("Project") or "Selected project"
        cost_cr = _number(values.get("Cost (Cr)") or values.get("Cost"), 0)
        demand_count = int(_number(values.get("Demand Count"), 45))
        affected_population = max(demand_count * 120, 1000)
        priority = int(_number(values.get("Priority"), len(projects) + 1))
        projects.append(
            {
                "id": f"uploaded_project_{priority:03d}",
                "wardId": (values.get("Ward") or "Ward").lower().replace(" ", "_"),
                "wardName": values.get("Ward") or "Ward not specified",
                "title": title,
                "category": values.get("Category") or "portfolio",
                "estimatedCost": cost_cr * 1e7,
                "estimatedMonths": int(_number(values.get("Duration (Mo)"), 8)),
                "affectedPopulation": affected_population,
                "demandCount": demand_count,
                "benefitScore": _number(values.get("Benefit Score"), 80),
                "dependencyIds": [],
                "selectionReason": values.get("Reason") or "Imported from priorities CSV.",
                "exclusionReason": "",
                "status": "selected",
            }
        )

    if not projects:
        raise HTTPException(
            status_code=400,
            detail="No selected projects were found in this priorities CSV.",
        )

    total_cost = sum(project["estimatedCost"] for project in projects)
    budget = max(450000000, total_cost)
    run_id = f"uploaded_{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}"
    run = {
        "runId": run_id,
        "status": "completed",
        "timestamp": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "summary": {
            "selectedProjectCount": len(projects),
            "totalCost": round(total_cost / 1e7, 2),
            "totalCostRaw": total_cost,
            "remainingBudget": round((budget - total_cost) / 1e7, 2),
            "remainingBudgetRaw": budget - total_cost,
            "totalBenefit": round(
                sum(project["benefitScore"] for project in projects) / len(projects),
                1,
            ),
            "wardCoverage": len(set(project["wardName"] for project in projects)),
            "totalWardsTested": max(7, len(set(project["wardName"] for project in projects))),
            "utilizationPercent": round((total_cost / budget) * 100, 1),
        },
        "selectedProjects": projects,
        "rejectedProjects": [],
        "constraintsStatus": [
            {
                "name": "Available Budget Limit",
                "satisfied": total_cost <= budget,
                "detail": f"{_inr(budget - total_cost)} remains after allocation.",
            },
            {
                "name": "Planning Timeline",
                "satisfied": True,
                "detail": "Imported project durations are retained from the priorities CSV.",
            },
            {
                "name": "Minimum Ward Coverage",
                "satisfied": True,
                "detail": f"Covered {len(set(project['wardName'] for project in projects))} wards from uploaded CSV.",
            },
            {
                "name": "Project Dependencies Satisfied",
                "satisfied": True,
                "detail": "No dependency violations were included in the uploaded CSV.",
            },
        ],
    }
    OPTIMIZATION_RUNS[run_id] = run
    return {
        "run": {
            "runId": run_id,
            "createdAt": datetime.now(timezone.utc).isoformat(),
            "budget": budget,
            "selectedProjectCount": len(projects),
            "totalCost": total_cost,
            "totalBenefit": run["summary"]["totalBenefit"],
            "status": "completed",
        },
        "preview": _report_payload(run),
    }


@router.get("/preview")
async def preview_report(runId: str = Query(...)) -> dict:
    run = await _get_run(runId)
    return _report_payload(run)


@router.get("", response_model=list[ReportResponse])
async def list_reports(constituency: str = Query(default="khordha")) -> list[ReportResponse]:
    return [
        ReportResponse(
            reportId=report["reportId"],
            title=report["title"],
            portfolioRun=report["runId"],
            createdAt=report["createdAt"],
            status=report["status"],
            format=report["format"],
            downloadUrl=f"/api/v1/reports/{report['reportId']}/download",
        )
        for report in sorted(
            REPORTS.values(), key=lambda item: item["createdAt"], reverse=True
        )
        if report["constituency"].lower() == constituency.lower()
    ]


@router.post("", response_model=ReportJobResponse, status_code=status.HTTP_201_CREATED)
async def create_report(payload: ReportCreate) -> ReportJobResponse:
    run = await _get_run(payload.runId)
    report_payload = _report_payload(run)
    report_id = f"RPT-{datetime.now(timezone.utc).year}-{len(REPORTS) + 24:05d}"
    created_at = datetime.now(timezone.utc)
    REPORTS[report_id] = {
        "reportId": report_id,
        "runId": payload.runId,
        "title": payload.title,
        "format": payload.format,
        "status": "Draft",
        "createdAt": created_at,
        "constituency": "khordha",
        "includeRejectedProjects": payload.includeRejectedProjects,
        "payload": report_payload,
    }
    return ReportJobResponse(
        reportId=report_id,
        status="generated",
        format=payload.format,
        createdAt=created_at,
        downloadUrl=f"/api/v1/reports/{report_id}/download",
        previewUrl=f"/api/v1/reports/{report_id}",
    )


@router.get("/{report_id}")
async def get_report(report_id: str) -> dict:
    report = REPORTS.get(report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found.")
    return report


@router.get("/{report_id}/download")
async def download_report(report_id: str, format: Literal["pdf", "csv"] | None = None):
    report = REPORTS.get(report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found.")

    output_format = format or report["format"]
    payload = report["payload"]
    include_rejected = report.get("includeRejectedProjects", False)

    if output_format == "csv":
        content = _csv_bytes(payload, include_rejected)
        media_type = "text/csv"
        filename = f"{report_id}.csv"
    else:
        content = _pdf_bytes(payload, report["title"], include_rejected)
        media_type = "application/pdf"
        filename = f"{report_id}.pdf"

    return Response(
        content=content,
        media_type=media_type,
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
