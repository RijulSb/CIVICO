from typing import Any

from retrieval.qdrant import CivicRetriever


class ContextAgent:
    """Retrieve only evidence relevant to the normalized civic issue."""

    def __init__(self, retriever: CivicRetriever) -> None:
        self.retriever = retriever

    async def run(
        self,
        issue: dict[str, Any],
        limit: int = 5,
    ) -> list[dict[str, Any]]:
        if not 1 <= limit <= 8:
            raise ValueError("limit must be between 1 and 8.")
        return await self.retriever.search(
            query=self._build_query(issue),
            limit=limit,
            location=issue.get("location"),
        )

    @staticmethod
    def _build_query(issue: dict[str, Any]) -> str:
        category = str(issue.get("category", "")).strip()
        text = str(issue.get("text", "")).strip()
        return f"{category}: {text}".strip(": ")
