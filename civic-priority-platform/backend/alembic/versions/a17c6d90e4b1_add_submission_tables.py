"""Add citizen submission and extracted-theme tables.

Revision ID: a17c6d90e4b1
Revises: 9f4a1c2d7e8b
"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "a17c6d90e4b1"
down_revision: Union[str, Sequence[str], None] = "9f4a1c2d7e8b"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "submissions",
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("constituency", sa.String(length=50), nullable=False),
        sa.Column("language", sa.String(length=20), nullable=False),
        sa.Column("submission_type", sa.String(length=20), nullable=False),
        sa.Column("content", sa.Text(), nullable=True),
        sa.Column("audio_url", sa.String(length=500), nullable=True),
        sa.Column("photo_url", sa.String(length=500), nullable=True),
        sa.Column("ward", sa.String(length=100), nullable=True),
        sa.Column("block", sa.String(length=100), nullable=True),
        sa.Column("latitude", sa.Double(), nullable=True),
        sa.Column("longitude", sa.Double(), nullable=True),
        sa.Column("category", sa.String(length=100), nullable=True),
        sa.Column("citizen_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("status", sa.String(length=20), nullable=False, server_default="pending"),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_submissions_constituency", "submissions", ["constituency"])
    op.create_index("ix_submissions_ward", "submissions", ["ward"])
    op.create_index("ix_submissions_category", "submissions", ["category"])
    op.create_index("ix_submissions_status", "submissions", ["status"])

    op.create_table(
        "themes",
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("submission_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("theme_label", sa.String(length=100), nullable=False),
        sa.Column("confidence", sa.Double(), nullable=True),
        sa.Column("extracted_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.ForeignKeyConstraint(["submission_id"], ["submissions.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_themes_submission_id", "themes", ["submission_id"])
    op.create_index("ix_themes_theme_label", "themes", ["theme_label"])


def downgrade() -> None:
    op.drop_index("ix_themes_theme_label", table_name="themes")
    op.drop_index("ix_themes_submission_id", table_name="themes")
    op.drop_table("themes")
    op.drop_index("ix_submissions_status", table_name="submissions")
    op.drop_index("ix_submissions_category", table_name="submissions")
    op.drop_index("ix_submissions_ward", table_name="submissions")
    op.drop_index("ix_submissions_constituency", table_name="submissions")
    op.drop_table("submissions")
