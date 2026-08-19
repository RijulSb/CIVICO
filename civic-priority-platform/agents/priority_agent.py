from typing import Any

from backend.app.analytics.ranking.engine import RankingEngine


class PriorityAgent:
    """Convert validated issue signals into a transparent priority score."""

    _WEIGHTS = {
        "demand": 0.35,
        "severity": 0.25,
        "population_affected": 0.20,
        "urgency": 0.20,
    }

    def __init__(self, ranking_engine: RankingEngine) -> None:
        self.ranking = ranking_engine

    async def run(
        self,
        issue: dict[str, Any],
        context: list[dict[str, Any]],
    ) -> dict[str, Any]:
        del context  # Context retrieval remains part of the report evidence contract.
        signals = {
            "demand": issue.get("demand", 0),
            "severity": issue.get("severity", 0),
            "population_affected": issue.get("population_affected", 0),
            "urgency": issue.get("urgency", 0),
        }
        ranked = self.ranking.rank([signals], self._WEIGHTS)
        return {
            "priority_score": ranked[0]["priority_score"],
            "signals": signals,
        }
