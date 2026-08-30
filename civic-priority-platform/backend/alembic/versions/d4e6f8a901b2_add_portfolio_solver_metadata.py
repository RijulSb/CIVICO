"""Add ILP solver metadata and protected reserve accounting.

Revision ID: d4e6f8a901b2
Revises: c2d4e6f8a901
"""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = "d4e6f8a901b2"
down_revision = "c2d4e6f8a901"
branch_labels = None
depends_on = None


def upgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()

    if "hotspots" not in tables:
        op.create_table(
            "hotspots",
            sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
            sa.Column("constituency", sa.String(length=50), nullable=False),
            sa.Column("theme_label", sa.String(length=100), nullable=False),
            sa.Column("ward", sa.String(length=100), nullable=True),
            sa.Column("block", sa.String(length=100), nullable=True),
            sa.Column("centroid_lat", sa.Double(), nullable=False),
            sa.Column("centroid_lon", sa.Double(), nullable=False),
            sa.Column("radius_meters", sa.Double(), nullable=False, server_default="500.0"),
            sa.Column("submission_count", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
            sa.PrimaryKeyConstraint("id"),
        )
        op.create_index("ix_hotspots_constituency", "hotspots", ["constituency"])
        op.create_index("ix_hotspots_theme_label", "hotspots", ["theme_label"])

    if "ranked_projects" not in tables:
        op.create_table(
            "ranked_projects",
            sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
            sa.Column("constituency", sa.String(length=50), nullable=False),
            sa.Column("theme_label", sa.String(length=100), nullable=False),
            sa.Column("ward", sa.String(length=100), nullable=False),
            sa.Column("score", sa.Double(), nullable=False),
            sa.Column("population_impact_score", sa.Double(), nullable=False),
            sa.Column("urgency_score", sa.Double(), nullable=False),
            sa.Column("cost_effectiveness_score", sa.Double(), nullable=False),
            sa.Column("alignment_score", sa.Double(), nullable=False),
            sa.Column("social_impact", sa.Text(), nullable=True),
            sa.Column("economic_impact", sa.Text(), nullable=True),
            sa.Column("estimated_cost", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
            sa.PrimaryKeyConstraint("id"),
        )
        op.create_index("ix_ranked_projects_constituency", "ranked_projects", ["constituency"])
        op.create_index("ix_ranked_projects_theme_label", "ranked_projects", ["theme_label"])
        op.create_index("ix_ranked_projects_score", "ranked_projects", ["score"])

    if "civic_portfolios" not in tables:
        op.create_table(
            "civic_portfolios",
            sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
            sa.Column("constituency", sa.String(length=50), nullable=False),
            sa.Column("budget", sa.Integer(), nullable=False),
            sa.Column("net_budget", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("reserve_amount", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("selected_project_ids", postgresql.ARRAY(postgresql.UUID(as_uuid=True)), nullable=True),
            sa.Column("total_benefit", sa.Double(), nullable=False, server_default="0.0"),
            sa.Column("solver_status", sa.String(length=30), nullable=False, server_default="unknown"),
            sa.Column("solver_name", sa.String(length=80), nullable=False, server_default="pulp-cbc"),
            sa.Column("mip_gap", sa.Double(), nullable=True),
            sa.Column("solve_seconds", sa.Double(), nullable=True),
            sa.Column("constraints_satisfied", postgresql.JSONB(astext_type=sa.Text()), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
            sa.PrimaryKeyConstraint("id"),
        )
        op.create_index("ix_civic_portfolios_constituency", "civic_portfolios", ["constituency"])
    else:
        existing_cols = [c["name"] for c in inspector.get_columns("civic_portfolios")]
        if "net_budget" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("net_budget", sa.Integer(), nullable=False, server_default="0"))
        if "reserve_amount" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("reserve_amount", sa.Integer(), nullable=False, server_default="0"))
        if "solver_status" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("solver_status", sa.String(length=30), nullable=False, server_default="unknown"))
        if "solver_name" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("solver_name", sa.String(length=80), nullable=False, server_default="pulp-cbc"))
        if "mip_gap" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("mip_gap", sa.Double(), nullable=True))
        if "solve_seconds" not in existing_cols:
            op.add_column("civic_portfolios", sa.Column("solve_seconds", sa.Double(), nullable=True))


def downgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()
    if "civic_portfolios" in tables:
        op.drop_index("ix_civic_portfolios_constituency", table_name="civic_portfolios")
        op.drop_table("civic_portfolios")
    if "ranked_projects" in tables:
        op.drop_index("ix_ranked_projects_score", table_name="ranked_projects")
        op.drop_index("ix_ranked_projects_theme_label", table_name="ranked_projects")
        op.drop_index("ix_ranked_projects_constituency", table_name="ranked_projects")
        op.drop_table("ranked_projects")
    if "hotspots" in tables:
        op.drop_index("ix_hotspots_theme_label", table_name="hotspots")
        op.drop_index("ix_hotspots_constituency", table_name="hotspots")
        op.drop_table("hotspots")
