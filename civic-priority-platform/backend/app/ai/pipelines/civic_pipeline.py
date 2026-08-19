from app.ai.agents.civic_agent import CivicAgent
from app.ai.graphs.civic_graph import build_civic_graph
from app.ai.validators.outputs import validate_result


class CivicPipeline:
    """Application-facing entry point for CIVICO AI processing."""

    def __init__(self, agent: CivicAgent | None = None) -> None:
        self.agent = agent or CivicAgent(build_civic_graph())

    async def process(self, text: str, language: str = "en") -> dict:
        result = await self.agent.run(text, language)
        return validate_result(result.get("result", {}))
