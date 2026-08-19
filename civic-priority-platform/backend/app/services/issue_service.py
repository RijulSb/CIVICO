from uuid import UUID

from fastapi import HTTPException, status

from app.schemas.issue import (
    IssueCreateRequest,
    IssueListResponse,
    IssueResponse,
    IssueStatus,
    IssueUpdateRequest,
)


class IssueService:
    """Application boundary for issue use cases.

    The service owns validation and orchestration. Database access belongs in
    IssueRepository and must not be placed in route handlers.
    """

    async def create_issue(self, payload: IssueCreateRequest) -> IssueResponse:
        raise self._not_implemented()

    async def list_issues(
        self,
        *,
        limit: int,
        cursor: str | None,
        status: IssueStatus | None,
        category: str | None,
    ) -> IssueListResponse:
        raise self._not_implemented()

    async def get_issue(self, issue_id: UUID) -> IssueResponse:
        raise self._not_implemented()

    async def update_issue(
        self,
        issue_id: UUID,
        payload: IssueUpdateRequest,
    ) -> IssueResponse:
        raise self._not_implemented()

    @staticmethod
    def _not_implemented() -> HTTPException:
        return HTTPException(
            status_code=status.HTTP_501_NOT_IMPLEMENTED,
            detail="Issue persistence service is not connected.",
        )


def get_issue_service() -> IssueService:
    """Dependency seam for replacing the scaffold with a repository-backed service."""
    return IssueService()
