from dataclasses import dataclass
from typing import Any


@dataclass(slots=True)
class IssueResult:
    text: str
    category: str
    severity: float
    location: dict[str, Any] | None = None


class IssueAgent:
    """Normalize citizen submissions without inventing analytical signals."""

    async def run(
        self,
        text: str,
        category: str | None = None,
        location: dict[str, Any] | None = None,
    ) -> IssueResult:
        normalized = text.strip()
        if not normalized:
            raise ValueError("text must not be empty.")
        return IssueResult(
            text=normalized,
            category=category or "unclassified",
            severity=0.0,
            location=dict(location) if location else None,
        )
