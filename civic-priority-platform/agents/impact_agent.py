from typing import Any

from backend.app.analytics.impact.engine import ImpactEngine


class ImpactAgent:
    """Estimate impact from validated issue inputs without LLM prediction."""

    def __init__(self, impact_engine: ImpactEngine) -> None:
        self.impact = impact_engine

    async def run(self, issue: dict[str, Any]) -> dict[str, float]:
        return self.impact.estimate(
            population_affected=issue.get("population_affected", 0),
            expected_improvement=issue.get("expected_improvement", 0),
            duration_years=issue.get("duration_years", 1),
        )
