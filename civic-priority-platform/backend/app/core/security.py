from typing import Annotated

from fastapi import Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.core.exceptions import ForbiddenOperation, UnauthorizedOperation

bearer_scheme = HTTPBearer(auto_error=False)


class CurrentUser:
    def __init__(self, user_id: str, role: str) -> None:
        self.user_id = user_id
        self.role = role


async def get_current_user(
    credentials: Annotated[
        HTTPAuthorizationCredentials | None,
        Depends(bearer_scheme),
    ],
) -> CurrentUser:
    if credentials is None:
        raise UnauthorizedOperation("Authentication is required.")

    # JWT verification must be added here before protected endpoints are
    # enabled. Never accept an unverified token merely to bypass the boundary.
    raise UnauthorizedOperation("Token validation is not configured yet.")


def require_roles(*allowed_roles: str):
    async def dependency(
        user: CurrentUser = Depends(get_current_user),
    ) -> CurrentUser:
        if user.role not in allowed_roles:
            raise ForbiddenOperation("You do not have permission to perform this operation.")
        return user

    return dependency
