from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator


class Settings(BaseSettings):
    app_name: str = "civico-backend"
    app_version: str = "0.1.0"
    environment: str = "development"
    api_v1_prefix: str = "/api/v1"
    readiness_timeout_seconds: float = 1.0
    cors_origins: str = "http://localhost:3000,http://127.0.0.1:3000,https://civico.vercel.app"
    cors_origin_regex: str = r"^https?://(localhost|127\.0\.0\.1)(:\d+)?$"
    log_level: str = "INFO"
    jwt_secret_key: str = "development-only-change-me"
    civico_api_key: str = "civ_dev_secret_key_change-me"
    opencage_api_key: str = ""
    mapbox_geocoding_key: str = ""
    groq_api_key: str = ""
    openai_api_key: str = ""
    huggingface_api_key: str = ""
    rate_limit_per_minute: int = 10
    max_content_length_bytes: int = 10 * 1024 * 1024
    database_url: str = "postgresql+asyncpg://civico:change-me-local-only@127.0.0.1:5432/civico"
    database_pool_size: int = 5
    database_max_overflow: int = 10
    database_pool_timeout: float = 30.0

    @field_validator("rate_limit_per_minute")
    @classmethod
    def validate_rate_limit(cls, value: int) -> int:
        if value < 1:
            raise ValueError("RATE_LIMIT_PER_MINUTE must be at least 1")
        return value

    @field_validator("database_url", mode="before")
    @classmethod
    def normalize_async_database_url(cls, value: str) -> str:
        """Render may provide a generic PostgreSQL URL; the app requires asyncpg."""
        if not isinstance(value, str):
            return value
        if value.startswith("postgres://"):
            return "postgresql+asyncpg://" + value[len("postgres://"):]
        if value.startswith("postgresql+psycopg2://"):
            return "postgresql+asyncpg://" + value[len("postgresql+psycopg2://"):]
        if value.startswith("postgresql://"):
            return "postgresql+asyncpg://" + value[len("postgresql://"):]
        return value

    model_config = SettingsConfigDict(
        env_file=".env.local",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    @property
    def cors_origin_list(self) -> list[str]:
        origins = [
            origin.strip().rstrip("/")
            for origin in self.cors_origins.split(",")
            if origin.strip()
        ]
        return origins if origins else ["http://localhost:3000", "http://127.0.0.1:3000"]

    @property
    def is_production(self) -> bool:
        return self.environment.lower() == "production"

    def validate_production(self) -> None:
        if not self.is_production:
            return
        if self.jwt_secret_key == "development-only-change-me":
            raise ValueError("JWT_SECRET_KEY must be configured in production")
        if self.civico_api_key.startswith("civ_dev_"):
            raise ValueError("CIVICO_API_KEY must be configured in production")
        if "localhost" in self.database_url or "127.0.0.1" in self.database_url:
            raise ValueError("DATABASE_URL must point to a managed production database")


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
