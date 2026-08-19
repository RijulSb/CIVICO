import asyncio

import pytest

from app.ai.pipelines import CivicPipeline
from app.ai.validators import validate_result


class FakeAgent:
    async def run(self, input_text: str, language: str | None = None):
        return {
            "result": {
                "issue_type": "roads",
                "analysis": {"text": input_text},
            }
        }


def test_pipeline_returns_validated_result():
    result = asyncio.run(CivicPipeline(agent=FakeAgent()).process("Broken road"))
    assert result["issue_type"] == "roads"


def test_validator_rejects_incomplete_result():
    with pytest.raises(ValueError, match="Missing"):
        validate_result({"issue_type": "roads"})


def test_validator_rejects_non_object_analysis():
    with pytest.raises(ValueError, match="analysis must be an object"):
        validate_result({"issue_type": "roads", "analysis": "invalid"})
