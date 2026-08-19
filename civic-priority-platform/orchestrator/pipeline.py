from dataclasses import asdict
from typing import Any

from agents.context_agent import ContextAgent
from agents.impact_agent import ImpactAgent
from agents.issue_agent import IssueAgent
from agents.priority_agent import PriorityAgent
from agents.report_agent import ReportAgent


class CivicOrchestrator:
    """Linear CIVICO decision-support pipeline."""

    def __init__(
        self,
        issue_agent: IssueAgent,
        context_agent: ContextAgent,
        priority_agent: PriorityAgent,
        impact_agent: ImpactAgent,
        report_agent: ReportAgent,
    ) -> None:
        self.issue = issue_agent
        self.context = context_agent
        self.priority = priority_agent
        self.impact = impact_agent
        self.report = report_agent

    async def run(
        self,
        text: str,
        location: dict[str, Any] | None = None,
    ) -> dict[str, Any]:
        issue = await self.issue.run(text=text, location=location)
        issue_data = asdict(issue)
        context = await self.context.run(issue_data, limit=5)
        priority = await self.priority.run(issue_data, context)
        impact = await self.impact.run(issue_data)
        return await self.report.run(
            issue=issue_data,
            context=context,
            priority=priority,
            impact=impact,
        )
