"""Add constraint_version and fallback_reason to civic_portfolios.

Revision ID: e5f7a9b0c1d2
Revises: d4e6f8a901b2
"""

from alembic import op
import sqlalchemy as sa

revision = "e5f7a9b0c1d2"
down_revision = "d4e6f8a901b2"
branch_labels = None
depends_on = None


def upgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()
    if "civic_portfolios" in tables:
        existing_cols = [c["name"] for c in inspector.get_columns("civic_portfolios")]
        if "constraint_version" not in existing_cols:
            op.add_column(
                "civic_portfolios",
                sa.Column(
                    "constraint_version",
                    sa.String(length=20),
                    nullable=False,
                    server_default="v1",
                ),
            )
        if "fallback_reason" not in existing_cols:
            op.add_column(
                "civic_portfolios",
                sa.Column("fallback_reason", sa.Text(), nullable=True),
            )


def downgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()
    if "civic_portfolios" in tables:
        existing_cols = [c["name"] for c in inspector.get_columns("civic_portfolios")]
        if "fallback_reason" in existing_cols:
            op.drop_column("civic_portfolios", "fallback_reason")
        if "constraint_version" in existing_cols:
            op.drop_column("civic_portfolios", "constraint_version")
