from collections.abc import Mapping
from typing import Any


def validate_result(result: Mapping[str, Any]) -> dict[str, Any]:
    required = {"issue_type", "analysis"}
    missing = required - result.keys()
    if missing:
        raise ValueError(
            f"Invalid AI result. Missing: {', '.join(sorted(missing))}"
        )

    issue_type = result["issue_type"]
    analysis = result["analysis"]
    if not isinstance(issue_type, str) or not issue_type.strip():
        raise ValueError("Invalid AI result. issue_type must be a non-empty string.")
    if not isinstance(analysis, dict):
        raise ValueError("Invalid AI result. analysis must be an object.")
    return dict(result)
