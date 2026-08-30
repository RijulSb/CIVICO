from __future__ import annotations

import os
import re
from dataclasses import dataclass


@dataclass
class _Response:
    content: str


class _FallbackLLM:
    """Deterministic local fallback used when no external model is configured."""

    async def ainvoke(self, prompt: str) -> _Response:
        text = prompt.lower()
        if "return only the category" in text:
            categories = (
                ("road", "roads"),
                ("water", "water"),
                ("school", "education"),
                ("hospital", "healthcare"),
                ("health", "healthcare"),
                ("electric", "electricity"),
                ("drain", "sanitation"),
            )
            for keyword, category in categories:
                if keyword in text:
                    return _Response(category)
            return _Response("other")
        issue = re.search(r"Issue:\s*(.+?)(?:\n\s*Category:|$)", prompt, re.IGNORECASE | re.DOTALL)
        issue_text = issue.group(1).strip() if issue else "the reported civic issue"
        return _Response(f"Core problem: {issue_text}. Urgency: requires local authority assessment.")


def get_llm():
    """Return the configured LLM, falling back safely for local tests and development."""
    provider = os.getenv("CIVICO_LLM_PROVIDER", "fallback").lower()
    if provider == "ollama":
        try:
            from langchain_ollama import ChatOllama

            return ChatOllama(model=os.getenv("CIVICO_OLLAMA_MODEL", "llama3.2:3b"), temperature=0)
        except Exception:
            pass
    return _FallbackLLM()


__all__ = ["get_llm"]
