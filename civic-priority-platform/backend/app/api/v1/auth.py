"""Authentication endpoints — /api/v1/auth/signup, /signin, /me, /verify-admin-key."""

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import (
    ADMIN_WHITELIST_EMAILS,
    check_rate_limit,
    create_access_token,
    get_current_user,
    hash_password,
    verify_password,
)
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import (
    AdminKeyVerifyRequest,
    AuthTokenResponse,
    UserResponse,
    UserSignInRequest,
    UserSignUpRequest,
)

router = APIRouter()


@router.post("/signup", response_model=AuthTokenResponse, status_code=status.HTTP_201_CREATED, dependencies=[Depends(check_rate_limit)])
async def signup(payload: UserSignUpRequest, db: AsyncSession = Depends(get_db)) -> AuthTokenResponse:
    stmt = select(User).where(or_(User.username == payload.username, User.email == payload.email, User.phone == payload.phone))
    result = await db.execute(stmt)
    existing = result.scalar_one_or_none()
    if existing:
        if existing.username == payload.username:
            detail = "Username is already taken. Please choose another username."
        elif existing.email == payload.email:
            detail = "An account with this email address already exists."
        else:
            detail = "An account with this phone number already exists."
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=detail)

    role = "civilian"
    if payload.admin_key:
        if payload.admin_key.strip() != settings.civico_api_key:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid admin key provided.")
        if payload.email.lower().strip() not in ADMIN_WHITELIST_EMAILS:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="This email is not authorized for administrative access.")
        role = "admin"

    user = User(full_name=payload.full_name.strip(), username=payload.username.strip().lower(), email=payload.email.strip().lower(), phone=payload.phone.strip(), password_hash=hash_password(payload.password), role=role, consent=payload.consent, last_login_at=datetime.now(timezone.utc))
    db.add(user)
    await db.commit()
    await db.refresh(user)
    token = create_access_token(user_id=user.id, email=user.email, username=user.username, role=user.role)
    return AuthTokenResponse(access_token=token, token_type="Bearer", user=UserResponse.model_validate(user))


@router.post("/signin", response_model=AuthTokenResponse, dependencies=[Depends(check_rate_limit)])
async def signin(payload: UserSignInRequest, db: AsyncSession = Depends(get_db)) -> AuthTokenResponse:
    query_ident = payload.email_or_phone.strip().lower()
    stmt = select(User).where(or_(User.email == query_ident, User.username == query_ident, User.phone == payload.email_or_phone.strip()))
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials. Please check your email/phone and password.", headers={"WWW-Authenticate": "Bearer"})

    if payload.admin_key:
        if payload.admin_key.strip() != settings.civico_api_key:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid admin key provided.")
        if user.email.lower().strip() not in ADMIN_WHITELIST_EMAILS:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="This account email is not on the authorized admin whitelist.")
        user.role = "admin"

    user.last_login_at = datetime.now(timezone.utc)
    await db.commit()
    await db.refresh(user)
    token = create_access_token(user_id=user.id, email=user.email, username=user.username, role=user.role)
    return AuthTokenResponse(access_token=token, token_type="Bearer", user=UserResponse.model_validate(user))


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)) -> UserResponse:
    return UserResponse.model_validate(current_user)


@router.post("/verify-admin-key", response_model=AuthTokenResponse)
async def verify_admin_key(payload: AdminKeyVerifyRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)) -> AuthTokenResponse:
    if payload.admin_key.strip() != settings.civico_api_key:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid admin key. Access denied.")
    if current_user.email.lower().strip() not in ADMIN_WHITELIST_EMAILS:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Unauthorized: Only whitelisted official emails may unlock Admin access.")
    current_user.role = "admin"
    await db.commit()
    await db.refresh(current_user)
    token = create_access_token(user_id=current_user.id, email=current_user.email, username=current_user.username, role="admin")
    return AuthTokenResponse(access_token=token, token_type="Bearer", user=UserResponse.model_validate(current_user))
