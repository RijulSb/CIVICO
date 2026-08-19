from uuid import UUID

from fastapi import APIRouter, Depends, Query, status

from app.schemas.issue import (
    IssueCreateRequest,
    IssueListResponse,
    IssueResponse,
    IssueStatus,
    IssueUpdateRequest,
)
from app.services.issue_service import IssueService, get_issue_service

router = APIRouter()


@router.post("", response_model=IssueResponse, status_code=status.HTTP_201_CREATED)
async def create_issue(
    payload: IssueCreateRequest,
    service: IssueService = Depends(get_issue_service),
) -> IssueResponse:
    return await service.create_issue(payload)


@router.get("", response_model=IssueListResponse)
async def list_issues(
    limit: int = Query(default=50, ge=1, le=100),
    cursor: str | None = Query(default=None, max_length=512),
    status_filter: IssueStatus | None = Query(default=None, alias="status"),
    category: str | None = Query(default=None, max_length=100),
    service: IssueService = Depends(get_issue_service),
) -> IssueListResponse:
    return await service.list_issues(
        limit=limit,
        cursor=cursor,
        status=status_filter,
        category=category,
    )


@router.get("/{issue_id}", response_model=IssueResponse)
async def get_issue(
    issue_id: UUID,
    service: IssueService = Depends(get_issue_service),
) -> IssueResponse:
    return await service.get_issue(issue_id)


@router.patch("/{issue_id}", response_model=IssueResponse)
async def update_issue(
    issue_id: UUID,
    payload: IssueUpdateRequest,
    service: IssueService = Depends(get_issue_service),
) -> IssueResponse:
    return await service.update_issue(issue_id, payload)
