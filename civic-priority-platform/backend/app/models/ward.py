"""Hotspot, RankedProject and CivicPortfolio ORM models — matches PRD §5 schema."""

from datetime import datetime
from uuid import UUID

from sqlalchemy import DateTime, Double, ForeignKey, Integer, String, Text, func
from sqlalchemy.dialects.postgresql import ARRAY, JSONB, UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class Hotspot(UUIDPrimaryKeyMixin, Base):
    """DBSCAN geo-cluster of citizen submissions."""

    __tablename__ = "hotspots"

    constituency: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    theme_label: Mapped[str] = mapped_column(String(100), nullable=False, index=True)
    ward: Mapped[str | None] = mapped_column(String(100), nullable=True)
    block: Mapped[str | None] = mapped_column(String(100), nullable=True)
    centroid_lat: Mapped[float] = mapped_column(Double, nullable=False)
    centroid_lon: Mapped[float] = mapped_column(Double, nullable=False)
    radius_meters: Mapped[float] = mapped_column(Double, nullable=False, default=500.0)
    submission_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )


class RankedProject(UUIDPrimaryKeyMixin, Base):
    """MCDA-scored development project derived from hotspot analysis."""

    __tablename__ = "ranked_projects"

    constituency: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    theme_label: Mapped[str] = mapped_column(String(100), nullable=False, index=True)
    ward: Mapped[str] = mapped_column(String(100), nullable=False)
    score: Mapped[float] = mapped_column(Double, nullable=False, index=True)
    population_impact_score: Mapped[float] = mapped_column(Double, nullable=False)
    urgency_score: Mapped[float] = mapped_column(Double, nullable=False)
    cost_effectiveness_score: Mapped[float] = mapped_column(Double, nullable=False)
    alignment_score: Mapped[float] = mapped_column(Double, nullable=False)
    social_impact: Mapped[str | None] = mapped_column(Text, nullable=True)
    economic_impact: Mapped[str | None] = mapped_column(Text, nullable=True)
    estimated_cost: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )


class CivicPortfolio(UUIDPrimaryKeyMixin, Base):
    """ILP-optimised portfolio of ranked projects within a budget.

    solver_status values:
      optimal          — solver proved global optimality within MIP gap.
      feasible         — solver found a feasible solution but did not prove optimality.
      infeasible       — no feasible solution exists under current constraints.
      unbounded        — objective is unbounded (should not occur in a bounded knapsack).
      timeout          — solver hit time_limit with a feasible incumbent.
      error            — solver returned an unexpected status.
      heuristic_fallback — greedy algorithm was used because PuLP/CBC was unavailable.
      empty            — no candidate projects found in the constituency.
    """

    __tablename__ = "civic_portfolios"

    constituency: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    budget: Mapped[int] = mapped_column(Integer, nullable=False)
    net_budget: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    reserve_amount: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    selected_project_ids: Mapped[list[UUID] | None] = mapped_column(
        ARRAY(PGUUID(as_uuid=True)), nullable=True
    )
    total_benefit: Mapped[float] = mapped_column(Double, nullable=False, default=0.0)

    # Solver run metadata
    solver_status: Mapped[str] = mapped_column(String(30), nullable=False, default="unknown")
    solver_name: Mapped[str] = mapped_column(String(80), nullable=False, default="pulp-cbc")
    mip_gap: Mapped[float | None] = mapped_column(Double, nullable=True)
    solve_seconds: Mapped[float | None] = mapped_column(Double, nullable=True)

    # Constraint audit
    constraint_version: Mapped[str] = mapped_column(
        String(20), nullable=False, server_default="v1",
        comment="Weight/formulation version; changes whenever scoring weights or "
                "constraint structure changes, allowing reproducibility audits.",
    )
    constraints_satisfied: Mapped[dict | None] = mapped_column(
        JSONB, nullable=True,
        comment="Full JSON snapshot: typed constraint parameters, weight values, "
                "per-constraint pass/fail evidence and human-readable explanations.",
    )

    # Fallback tracking
    fallback_reason: Mapped[str | None] = mapped_column(
        Text, nullable=True,
        comment="Non-null only when solver_status='heuristic_fallback'. "
                "Records why the ILP solver could not be used.",
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
