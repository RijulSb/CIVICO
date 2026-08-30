"""Authentication request and response schemas."""

from datetime import datetime
from typing import Optional
from uuid import UUID

from pydantic import Field, field_validator

from app.schemas.common import APIModel


class UserSignUpRequest(APIModel):
    full_name: str = Field(..., min_length=2, max_length=100, description="Full citizen or official name")
    username: str = Field(..., min_length=3, max_length=50, description="Unique alphanumeric username")
    email: str = Field(..., min_length=5, max_length=255, description="Unique email address")
    phone: str = Field(..., min_length=10, max_length=20, description="Phone number with country code")
    password: str = Field(..., min_length=8, max_length=128, description="Password (min 8 chars)")
    confirm_password: str = Field(..., min_length=8, max_length=128, description="Password confirmation")
    consent: bool = Field(default=True, description="Consent to data processing for civic planning")
    admin_key: Optional[str] = Field(default=None, description="Optional admin key for official account elevation")

    @field_validator("username")
    @classmethod
    def validate_username(cls, value: str) -> str:
        clean = value.strip().lower()
        if not clean.replace("_", "").isalnum():
            raise ValueError("Username may only contain letters, numbers, and underscores.")
        return clean

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        clean = value.strip().lower()
        if "@" not in clean or "." not in clean:
            raise ValueError("Please provide a valid email address.")
        return clean

    @field_validator("confirm_password")
    @classmethod
    def validate_passwords_match(cls, value: str, info) -> str:
        if "password" in info.data and value != info.data["password"]:
            raise ValueError("Passwords do not match.")
        return value


class UserSignInRequest(APIModel):
    email_or_phone: str = Field(..., min_length=3, max_length=255, description="Email address or phone number")
    password: str = Field(..., min_length=8, max_length=128, description="Account password")
    remember_me: bool = Field(default=False, description="Extend session duration")
    admin_key: Optional[str] = Field(default=None, description="Optional admin key for official elevation")


class UserResponse(APIModel):
    id: UUID
    full_name: str
    username: str
    email: str
    phone: str
    role: str
    email_verified: bool = False
    phone_verified: bool = False
    consent: bool = True
    created_at: datetime


class AuthTokenResponse(APIModel):
    access_token: str
    token_type: str = "Bearer"
    user: UserResponse


class AdminKeyVerifyRequest(APIModel):
    admin_key: str = Field(..., min_length=1, max_length=128, description="Admin secret key")
