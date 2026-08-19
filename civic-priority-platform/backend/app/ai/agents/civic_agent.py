from typing import TypedDict


class CivicState(TypedDict, total=False):
    input_text: str
    language: str
    issue_type: str
    analysis: dict[str, str]
    result: dict[str, object]


class CivicAgent:
    """Application-facing wrapper around a compiled LangGraph graph."""

    def __init__(self, graph) -> None:
        self.graph = graph

    async def run(self, input_text: str, language: str | None = None) -> CivicState:
        text = input_text.strip()
        if not text:
            raise ValueError("input_text must not be empty.")
        return await self.graph.ainvoke(
            {
                "input_text": text,
                "language": language or "en",
            }
        )
