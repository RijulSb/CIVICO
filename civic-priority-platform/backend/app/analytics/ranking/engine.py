from collections.abc import Mapping, Sequence
from typing import Any


class RankingEngine:
    """Transparent multi-criteria priority ranking."""

    def rank(
        self,
        items: Sequence[Mapping[str, Any]],
        weights: Mapping[str, float],
    ) -> list[dict[str, Any]]:
        if not weights:
            raise ValueError("At least one ranking weight is required.")

        normalized_weights = self._validate_weights(weights)
        ranked: list[dict[str, Any]] = []
        for index, item in enumerate(items):
            score = sum(
                self._number(item.get(metric, 0), metric=metric) * weight
                for metric, weight in normalized_weights.items()
            )
            ranked.append(
                {
                    **dict(item),
                    "priority_score": round(score, 4),
                    "rank": 0,
                    "_input_order": index,
                }
            )

        ranked.sort(key=lambda item: (-item["priority_score"], item["_input_order"]))
        for rank, item in enumerate(ranked, start=1):
            item["rank"] = rank
            item.pop("_input_order", None)
        return ranked

    @staticmethod
    def _validate_weights(weights: Mapping[str, float]) -> dict[str, float]:
        normalized: dict[str, float] = {}
        for metric, weight in weights.items():
            if not metric or weight < 0:
                raise ValueError("Ranking metrics must have non-negative weights.")
            normalized[metric] = float(weight)
        if sum(normalized.values()) <= 0:
            raise ValueError("At least one ranking weight must be greater than zero.")
        return normalized

    @staticmethod
    def _number(value: Any, *, metric: str) -> float:
        try:
            number = float(value)
        except (TypeError, ValueError) as exc:
            raise ValueError(f"Ranking metric '{metric}' must be numeric.") from exc
        if number < 0:
            raise ValueError(f"Ranking metric '{metric}' must be non-negative.")
        return number
