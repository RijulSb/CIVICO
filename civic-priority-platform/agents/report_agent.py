from typing import Any


class ReportAgent:
    """Build a decision-support result from supplied issue, evidence, priority, and impact."""

    async def run(
        self,
        issue: dict[str, Any],
        context: list[dict[str, Any]],
        priority: dict[str, Any],
        impact: dict[str, Any],
    ) -> dict[str, Any]:
        return {
            "issue": issue,
            "evidence": context,
            "priority": priority,
            "impact": impact,
            "grounded": bool(context),
        }
