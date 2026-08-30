"""Create users table for civilian and admin authentication.

Revision ID: f2a1b3c4d5e6
Revises: e5f7a9b0c1d2
"""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID

revision = "f2a1b3c4d5e6"
down_revision = "e5f7a9b0c1d2"
branch_labels = None
depends_on = None


def upgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()
    if "users" not in tables:
        op.create_table(
            "users",
            sa.Column("id", UUID(as_uuid=True), primary_key=True),
            sa.Column("full_name", sa.String(length=100), nullable=False),
            sa.Column("username", sa.String(length=50), nullable=False),
            sa.Column("email", sa.String(length=255), nullable=False),
            sa.Column("phone", sa.String(length=20), nullable=False),
            sa.Column("password_hash", sa.String(length=255), nullable=False),
            sa.Column("role", sa.String(length=20), nullable=False, server_default="civilian"),
            sa.Column("email_verified", sa.Boolean(), nullable=False, server_default=sa.text("false")),
            sa.Column("phone_verified", sa.Boolean(), nullable=False, server_default=sa.text("false")),
            sa.Column("consent", sa.Boolean(), nullable=False, server_default=sa.text("true")),
            sa.Column("last_login_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
            sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        )
        op.create_index("ix_users_username", "users", ["username"], unique=True)
        op.create_index("ix_users_email", "users", ["email"], unique=True)
        op.create_index("ix_users_phone", "users", ["phone"], unique=True)


def downgrade() -> None:
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    tables = inspector.get_table_names()
    if "users" in tables:
        op.drop_index("ix_users_phone", table_name="users")
        op.drop_index("ix_users_email", table_name="users")
        op.drop_index("ix_users_username", table_name="users")
        op.drop_table("users")
