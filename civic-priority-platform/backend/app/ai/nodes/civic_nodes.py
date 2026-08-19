from app.ai.agents.civic_agent import CivicState
from app.ai.models.providers import get_llm
from app.ai.prompts.civic_prompts import ANALYSIS_PROMPT, CLASSIFICATION_PROMPT


async def classify_issue(state: CivicState) -> CivicState:
    response = await get_llm().ainvoke(
        CLASSIFICATION_PROMPT.format(text=state["input_text"])
    )
    return {**state, "issue_type": response.content.strip()}


async def analyze_issue(state: CivicState) -> CivicState:
    response = await get_llm().ainvoke(
        ANALYSIS_PROMPT.format(
            text=state["input_text"],
            issue_type=state.get("issue_type", "unknown"),
        )
    )
    return {**state, "analysis": {"text": response.content.strip()}}


async def generate_result(state: CivicState) -> CivicState:
    return {
        **state,
        "result": {
            "issue_type": state.get("issue_type"),
            "analysis": state.get("analysis"),
        },
    }
