"""add report media and enrichment fields

Revision ID: b8e9f1a2c3d4
Revises: a17c6d90e4b1
"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = "b8e9f1a2c3d4"
down_revision = "a17c6d90e4b1"
branch_labels = None
depends_on = None

def upgrade() -> None:
    op.add_column("submissions", sa.Column("video_url", sa.String(length=500), nullable=True))
    op.add_column("submissions", sa.Column("full_name", sa.String(length=120), nullable=True))
    op.add_column("submissions", sa.Column("email", sa.String(length=254), nullable=True))
    op.add_column("submissions", sa.Column("phone", sa.String(length=20), nullable=True))
    op.add_column("submissions", sa.Column("transcript", sa.Text(), nullable=True))
    op.add_column("submissions", sa.Column("formatted_text", postgresql.JSONB(astext_type=sa.Text()), nullable=True))
    op.add_column("submissions", sa.Column("extracted", postgresql.JSONB(astext_type=sa.Text()), nullable=True))

def downgrade() -> None:
    for name in ("extracted", "formatted_text", "transcript", "phone", "email", "full_name", "video_url"):
        op.drop_column("submissions", name)
