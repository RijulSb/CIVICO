from app.ai.agents.civic_agent import CivicState
from app.ai.nodes.civic_nodes import analyze_issue, classify_issue, generate_result
from app.core.exceptions import ExternalToolUnavailable


def build_civic_graph():
    try:
        from langgraph.graph import END, StateGraph
    except ImportError as exc:
        raise ExternalToolUnavailable(
            "LangGraph is not installed."
        ) from exc

    graph = StateGraph(CivicState)
    graph.add_node("classify", classify_issue)
    graph.add_node("analyze", analyze_issue)
    graph.add_node("generate", generate_result)
    graph.set_entry_point("classify")
    graph.add_edge("classify", "analyze")
    graph.add_edge("analyze", "generate")
    graph.add_edge("generate", END)
    return graph.compile()
