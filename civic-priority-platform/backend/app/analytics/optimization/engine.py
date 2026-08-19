from collections.abc import Mapping, Sequence
from typing import Any


class OptimizationEngine:
    """Deterministic budget-constrained project selection."""

    def select(
        self,
        projects: Sequence[Mapping[str, Any]],
        budget: float,
    ) -> list[dict[str, Any]]:
        remaining = self._non_negative(budget, "budget")
        normalized: list[tuple[int, float, Mapping[str, Any]]] = []
        for index, project in enumerate(projects):
            cost = self._non_negative(project.get("cost", 0), "cost")
            score = self._non_negative(project.get("priority_score", 0), "priority_score")
            normalized.append((index, score, {**dict(project), "cost": cost}))

        normalized.sort(key=lambda item: (-item[1], item[0]))
        selected: list[dict[str, Any]] = []
        for _, _, project in normalized:
            cost = float(project["cost"])
            if cost <= remaining:
                selected.append(project)
                remaining -= cost
        return selected

    @staticmethod
    def _non_negative(value: Any, field: str) -> float:
        try:
            number = float(value)
        except (TypeError, ValueError) as exc:
            raise ValueError(f"{field} must be numeric.") from exc
        if number < 0:
            raise ValueError(f"{field} must be non-negative.")
        return number
