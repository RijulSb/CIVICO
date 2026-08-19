from collections import defaultdict
from collections.abc import Iterable, Mapping
from typing import Any


class DataFusionEngine:
    """Aggregate civic demand with optional area-level contextual data."""

    def aggregate(
        self,
        issues: Iterable[Mapping[str, Any]],
        context: Iterable[Mapping[str, Any]] | None = None,
    ) -> list[dict[str, Any]]:
        context_by_area = {
            str(item["area_id"]): dict(item)
            for item in (context or [])
            if item.get("area_id") is not None
        }
        grouped: dict[str, dict[str, float | int]] = defaultdict(
            lambda: {"issue_count": 0, "severity_sum": 0.0}
        )

        for issue in issues:
            area_id = issue.get("area_id")
            if area_id is None:
                continue
            key = str(area_id)
            severity = self._number(issue.get("severity", 0), field="severity")
            grouped[key]["issue_count"] += 1
            grouped[key]["severity_sum"] += severity

        return [
            {
                "area_id": area_id,
                **values,
                "context": context_by_area.get(area_id, {}),
            }
            for area_id, values in sorted(grouped.items())
        ]

    @staticmethod
    def _number(value: Any, *, field: str) -> float:
        try:
            number = float(value)
        except (TypeError, ValueError) as exc:
            raise ValueError(f"{field} must be numeric.") from exc
        if number < 0:
            raise ValueError(f"{field} must be non-negative.")
        return number
