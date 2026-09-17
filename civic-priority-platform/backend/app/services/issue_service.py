"""Issue service — database-backed service for managing issues."""

from datetime import datetime
from uuid import UUID, uuid4

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.issue import Issue
from app.schemas.common import PaginationMeta
from app.schemas.issue import (
    IssueCreateRequest,
    IssueListResponse,
    IssueResponse,
    IssueStatus,
    IssueUpdateRequest,
)


class IssueService:
    """Application service for issue use cases."""

    def __init__(self, db: AsyncSession | None = None) -> None:
        self._db = db

    async def create_issue(self, payload: IssueCreateRequest) -> IssueResponse:
        issue_id = uuid4()
        now = datetime.utcnow()

        if self._db is not None:
            # Get or create a default project if project_id is not provided
            from sqlalchemy import text
            result = await self._db.execute(text("SELECT id FROM projects LIMIT 1"))
            project = result.fetchone()
            
            if not project:
                # Create a default project
                default_project_id = uuid4()
                await self._db.execute(
                    text("INSERT INTO projects (id, name, description, status) VALUES (:id, 'Default Project', 'Auto-generated default project', 'active')"),
                    {"id": default_project_id}
                )
                project_id = default_project_id
            else:
                project_id = project[0]

            issue = Issue(
                id=issue_id,
                project_id=project_id,
                title=payload.title,
                description=payload.description,
                category=payload.category,
                language=payload.language,
                status=IssueStatus.OPEN.value,
            )
            self._db.add(issue)
            await self._db.commit()

        return IssueResponse(
            id=issue_id,
            title=payload.title,
            description=payload.description,
            category=payload.category,
            latitude=payload.latitude,
            longitude=payload.longitude,
            language=payload.language,
            status=IssueStatus.OPEN,
            created_at=now,
            updated_at=None,
        )

    async def list_issues(
        self,
        *,
        limit: int = 50,
        cursor: str | None = None,
        status_filter: IssueStatus | None = None,
        category: str | None = None,
    ) -> IssueListResponse:
        items: list[IssueResponse] = []
        try:
            if self._db is not None:
                # Select scalar columns explicitly. The Issue model contains a
                # PostGIS Geography field which asyncpg cannot decode on every
                # production connection; selecting the entity made this GET
                # endpoint fail before the response could be serialized.
                query = select(
                    Issue.id,
                    Issue.title,
                    Issue.description,
                    Issue.category,
                    Issue.language,
                    Issue.status,
                    Issue.created_at,
                    Issue.updated_at,
                )
                if status_filter:
                    query = query.where(Issue.status == status_filter.value)
                if category:
                    query = query.where(Issue.category == category)
                query = query.order_by(Issue.created_at.desc()).limit(limit)

                result = await self._db.execute(query)
                db_issues = result.mappings().all()
                for i in db_issues:
                    st = IssueStatus.OPEN
                    try:
                        st = IssueStatus(i["status"])
                    except ValueError:
                        pass
                    items.append(
                        IssueResponse(
                            id=i["id"],
                            title=i["title"],
                            description=i["description"],
                            category=i["category"],
                            latitude=None,
                            longitude=None,
                            language=i["language"],
                            status=st,
                            created_at=i["created_at"],
                            updated_at=i["updated_at"],
                        )
                    )
        except Exception as e:
            # Return empty list on error instead of crashing
            print(f"Error listing issues: {e}")

        return IssueListResponse(
            items=items,
            pagination=PaginationMeta(
                page=1,
                page_size=limit,
                total=len(items),
                has_next=False,
            ),
        )

    async def get_issue(self, issue_id: UUID) -> IssueResponse:
        if self._db is not None:
            result = await self._db.execute(select(Issue).where(Issue.id == issue_id))
            issue = result.scalar_one_or_none()
            if issue is not None:
                st = IssueStatus.OPEN
                try:
                    st = IssueStatus(issue.status)
                except ValueError:
                    pass
                return IssueResponse(
                    id=issue.id,
                    title=issue.title,
                    description=issue.description,
                    category=issue.category,
                    latitude=None,
                    longitude=None,
                    language=issue.language,
                    status=st,
                    created_at=issue.created_at,
                    updated_at=issue.updated_at,
                )

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Issue {issue_id} not found.",
        )

    async def update_issue(
        self,
        issue_id: UUID,
        payload: IssueUpdateRequest,
    ) -> IssueResponse:
        issue = await self.get_issue(issue_id)
        return issue


from fastapi import Depends, HTTPException, status
from app.db.session import get_db

def get_issue_service(db: AsyncSession = Depends(get_db)) -> IssueService:
    return IssueService(db)
