from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "civico-backend"
    app_version: str = "0.1.0"
    environment: str = "development"
    api_v1_prefix: str = "/api/v1"
    database_url: str = "postgresql+asyncpg://civico:civico@localhost:5432/civico"
    readiness_timeout_seconds: float = 1.0
    cors_origins: str = ""
    log_level: str = "INFO"
    jwt_secret_key: str = "development-only-change-me"
    database_url: str = "postgresql+asyncpg://civico:change-me-local-only@127.0.0.1:5432/civico"
    database_pool_size: int = 5
    database_max_overflow: int = 10
    database_pool_timeout: float = 30.0

    model_config = SettingsConfigDict(
        env_file=".env.local",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def is_production(self) -> bool:
        return self.environment.lower() == "production"

@lru_cache
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
