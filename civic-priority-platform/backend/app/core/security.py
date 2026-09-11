"""Security mechanisms — authentication, RBAC, password security, prompt injection protection, input sanitization, rate limiting."""

import html
import re
import time
from collections import defaultdict
from datetime import datetime, timedelta, timezone
from typing import Any, Optional
from uuid import UUID

import bcrypt
import jwt
from fastapi import Depends, Header, HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.db.session import get_db

# ---------------------------------------------------------------------------
# Whitelisted Admin Emails (Only these emails can hold ADMIN status)
# ---------------------------------------------------------------------------

ADMIN_WHITELIST_EMAILS = {
    "rsekharbarik@gmail.com",
    "rijulbarik@gmail.com",
    "sadualmaanpreet@gmail.com",
    "pattnaikmayank072@gmail.com",
    "mlaxmidora0@gmail.com",
    "princyrout2007@gmail.com",
}

# ---------------------------------------------------------------------------
# Password Security (Bcrypt with salt)
# ---------------------------------------------------------------------------

def hash_password(password: str) -> str:
    """Securely hash plain-text password using bcrypt with automatic salt generation."""
    if not password or len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    salt = bcrypt.gensalt(rounds=12)
    hashed = bcrypt.hashpw(password.encode("utf-8"), salt)
    return hashed.decode("utf-8")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify plain-text password against bcrypt hashed password in constant time."""
    if not plain_password or not hashed_password:
        return False
    try:
        return bcrypt.checkpw(
            plain_password.encode("utf-8"),
            hashed_password.encode("utf-8"),
        )
    except Exception:
        return False


# ---------------------------------------------------------------------------
# JWT Token Management (pyjwt HS256)
# ---------------------------------------------------------------------------

JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days session lifetime


def create_access_token(
    user_id: UUID | str,
    email: str,
    username: str,
    role: str,
    expires_delta: Optional[timedelta] = None,
) -> str:
    """Generate signed JWT access token for user authentication."""
    now = datetime.now(timezone.utc)
    expire = now + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    
    payload: dict[str, Any] = {
        "sub": str(user_id),
        "email": email.lower().strip(),
        "username": username.strip(),
        "role": role,
        "iat": int(now.timestamp()),
        "exp": int(expire.timestamp()),
        "iss": "civico-auth",
    }
    return jwt.encode(payload, settings.jwt_secret_key, algorithm=JWT_ALGORITHM)


def decode_access_token(token: str) -> Optional[dict[str, Any]]:
    """Decode and validate JWT access token signature and expiration."""
    try:
        return jwt.decode(
            token,
            settings.jwt_secret_key,
            algorithms=[JWT_ALGORITHM],
            issuer="civico-auth",
        )
    except (jwt.PyJWTError, Exception):
        return None


# ---------------------------------------------------------------------------
# Prompt Injection & Malicious Input Defense Patterns
# ---------------------------------------------------------------------------

PROMPT_INJECTION_PATTERNS = [
    re.compile(r"ignore\s+(all\s+)?(previous|prior|above|existing)\s+(instructions|prompts|rules|guidelines)", re.IGNORECASE),
    re.compile(r"system\s*:\s*override", re.IGNORECASE),
    re.compile(r"you\s+are\s+now\s+(a|an)\s+(unrestricted|admin|god|root|dan|developer|jailbroken)", re.IGNORECASE),
    re.compile(r"(reveal|dump|print|output|display|show|leak|tell\s+me)\s+(all\s+)?(database|users|passwords|hashes|tokens|keys|secrets|env|system\s+prompt|settings)", re.IGNORECASE),
    re.compile(r"(what\s+is|give\s+me|tell\s+me|show\s+me|reveal)\s+(your|the|any)?\s*([a-z\s_-]{0,25})\s*(password|admin\s+key|api\s+key|secret\s+key|system\s+prompt|master\s+key|credential)", re.IGNORECASE),
    re.compile(r"<\s*script\b[^>]*>", re.IGNORECASE),
    re.compile(r"javascript\s*:", re.IGNORECASE),
    re.compile(r"union\s+all\s+select\s+", re.IGNORECASE),
    re.compile(r"union\s+select\s+", re.IGNORECASE),
    re.compile(r"drop\s+table\s+", re.IGNORECASE),
    re.compile(r"or\s+1\s*=\s*1", re.IGNORECASE),
    re.compile(r"(--|/\*|;\s*--)", re.IGNORECASE),
    re.compile(r"__proto__|constructor\.prototype", re.IGNORECASE),
]

PASSWORD_EXPOSURE_PATTERNS = [
    re.compile(r"\$2[aby]?\$\d{2}\$[./0-9A-Za-z]{53}"),  # bcrypt hash
    re.compile(r"bearer\s+[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*", re.IGNORECASE),
    re.compile(r"civ_dev_secret_key_[0-9a-f]+", re.IGNORECASE),
    re.compile(r"sk-[a-zA-Z0-9_-]{20,}", re.IGNORECASE),
]


def detect_prompt_injection(text: str) -> tuple[bool, Optional[str]]:
    """Check text content for prompt injection, jailbreaks, or extraction attempts."""
    if not text:
        return False, None
    for pattern in PROMPT_INJECTION_PATTERNS:
        if pattern.search(text):
            return True, "Blocked security violation matching unauthorized override or extraction pattern."
    return False, None


def sanitize_text_input(text: str, max_length: int = 2000) -> str:
    """Sanitize incoming text input: HTML escape, strip control chars, trim whitespace."""
    if not text:
        return ""
    # Strip null bytes and non-printable control characters (except newline/tab)
    cleaned = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", text)
    # HTML entity escape dangerous script/tag characters
    escaped = html.escape(cleaned.strip())
    # Truncate to maximum safe character threshold
    return escaped[:max_length]


def sanitize_output_for_secrets(text: str) -> str:
    """Ensure no sensitive password hashes, API keys, or secret tokens leak in text outputs."""
    if not text:
        return ""
    scrubbed = text
    for pattern in PASSWORD_EXPOSURE_PATTERNS:
        scrubbed = pattern.sub("[REDACTED_SECRET]", scrubbed)
    return scrubbed


# ---------------------------------------------------------------------------
# Authentication & RBAC Dependencies
# ---------------------------------------------------------------------------

http_bearer_scheme = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(http_bearer_scheme),
    x_api_key: Optional[str] = Header(None, alias="X-API-Key"),
    db: AsyncSession = Depends(get_db),
):
    """Validate JWT Bearer token or Admin Key and return current User object."""
    from app.models.user import User

    # 1. Check Bearer Token
    if credentials and credentials.credentials:
        token = credentials.credentials
        payload = decode_access_token(token)
        if payload and "sub" in payload:
            try:
                user_uuid = UUID(payload["sub"])
                stmt = select(User).where(User.id == user_uuid)
                result = await db.execute(stmt)
                user = result.scalar_one_or_none()
                if user:
                    return user
            except (ValueError, TypeError):
                pass

    # 2. Check X-API-Key fallback for system integrations
    if x_api_key and x_api_key.strip() == settings.civico_api_key:
        # Synthetic admin user for verified key
        return User(
            id=UUID("00000000-0000-0000-0000-000000000001"),
            full_name="CIVICO System Admin",
            username="system_admin",
            email="rijulbarik@gmail.com",
            phone="+919999999999",
            password_hash="[INTERNAL_SYSTEM_KEY]",
            role="admin",
            email_verified=True,
            phone_verified=True,
            consent=True,
        )

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorized: Valid authentication token is required.",
        headers={"WWW-Authenticate": "Bearer"},
    )


async def get_optional_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(http_bearer_scheme),
    db: AsyncSession = Depends(get_db),
):
    """Return current user if token is present and valid, otherwise None."""
    if not credentials or not credentials.credentials:
        return None
    try:
        return await get_current_user(credentials=credentials, db=db)
    except HTTPException:
        return None


async def require_admin(
    current_user=Depends(get_current_user),
):
    """Enforce that the requesting user has verified ADMIN status and is in the whitelist."""
    is_whitelisted = current_user.email.lower().strip() in ADMIN_WHITELIST_EMAILS
    is_admin_role = current_user.role == "admin"

    if not (is_admin_role and is_whitelisted):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Requires admin key! This section is restricted to authorized officials only.",
        )
    return current_user


async def verify_api_key(
    x_api_key: Optional[str] = Header(None, alias="X-API-Key"),
    authorization: Optional[str] = Header(None, alias="Authorization"),
) -> str:
    """Verify HTTP request has valid API Key or Bearer token for protected endpoints."""
    if x_api_key and x_api_key.strip() == settings.civico_api_key:
        return x_api_key.strip()

    if authorization and authorization.startswith("Bearer "):
        token = authorization[7:].strip()
        if token == settings.civico_api_key:
            return token

    if not settings.is_production and x_api_key == "dev":
        return "dev-bypass"

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorized: Valid X-API-Key or Authorization Bearer header is required.",
        headers={"WWW-Authenticate": "ApiKey"},
    )


# ---------------------------------------------------------------------------
# Rate Limiter (In-Memory Sliding Window)
# ---------------------------------------------------------------------------

class RateLimiter:
    def __init__(self, requests_per_minute: int = 20, window_seconds: int = 60):
        self.requests_per_minute = requests_per_minute
        self.window_seconds = window_seconds
        self._history: dict[str, list[float]] = defaultdict(list)

    def is_rate_limited(self, client_ip: str) -> bool:
        now = time.time()
        cutoff = now - self.window_seconds
        self._history[client_ip] = [t for t in self._history[client_ip] if t > cutoff]

        if len(self._history[client_ip]) >= self.requests_per_minute:
            return True

        self._history[client_ip].append(now)
        return False


global_rate_limiter = RateLimiter(
    requests_per_minute=settings.rate_limit_per_minute,
    window_seconds=60,
)


async def check_rate_limit(request: Request) -> None:
    """Enforce IP-based request rate limits on public intake routes."""
    client_ip = request.client.host if request.client else "unknown"
    if global_rate_limiter.is_rate_limited(client_ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Rate limit exceeded. Please wait a minute before submitting another request.",
        )
