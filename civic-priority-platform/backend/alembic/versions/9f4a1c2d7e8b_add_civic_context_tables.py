"""add isolated civic context tables

Revision ID: 9f4a1c2d7e8b
Revises: 7ce7c4ded3f8
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = "9f4a1c2d7e8b"
down_revision: Union[str, None] = "7ce7c4ded3f8"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "civic_ward_context",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("source_record_id", sa.String(length=128), nullable=False),
        sa.Column("source_dataset", sa.String(length=128), nullable=False),
        sa.Column("source_url", sa.Text(), nullable=True),
        sa.Column("source_file", sa.String(length=255), nullable=False),
        sa.Column("source_row_number", sa.Integer(), nullable=True),
        sa.Column("ingested_at_utc", sa.DateTime(timezone=True), nullable=False),
        sa.Column("city_name", sa.String(length=120), nullable=False),
        sa.Column("zone_name", sa.String(length=120), nullable=False),
        sa.Column("ward_id", sa.String(length=32), nullable=False),
        sa.Column("ward_name", sa.String(length=200), nullable=True),
        sa.Column("area_sq_km", sa.Numeric(14, 8), nullable=False),
        sa.Column("population_thousands", sa.Numeric(14, 6), nullable=False),
        sa.Column("male_population_thousands", sa.Numeric(14, 6), nullable=False),
        sa.Column("female_population_thousands", sa.Numeric(14, 6), nullable=False),
        sa.Column("children_population_thousands", sa.Numeric(14, 6), nullable=False),
        sa.Column("youth_population_thousands", sa.Numeric(14, 6), nullable=False),
        sa.Column("adult_population_thousands", sa.Numeric(14, 6), nullable=True),
        sa.Column("senior_population_thousands", sa.Numeric(14, 6), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("source_record_id", name="uq_civic_ward_context_source_record"),
        sa.UniqueConstraint("source_dataset", "ward_id", name="uq_civic_ward_context_dataset_ward"),
    )
    op.create_index("ix_civic_ward_context_city", "civic_ward_context", ["city_name"])
    op.create_index("ix_civic_ward_context_zone", "civic_ward_context", ["zone_name"])
    op.create_index("ix_civic_ward_context_ward", "civic_ward_context", ["ward_id"])

    op.create_table(
        "civic_sanitation_indicator",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("source_record_id", sa.String(length=128), nullable=False),
        sa.Column("source_dataset", sa.String(length=128), nullable=False),
        sa.Column("source_url", sa.Text(), nullable=True),
        sa.Column("source_file", sa.String(length=255), nullable=False),
        sa.Column("source_row_number", sa.Integer(), nullable=True),
        sa.Column("ingested_at_utc", sa.DateTime(timezone=True), nullable=False),
        sa.Column("state_name", sa.String(length=120), nullable=False),
        sa.Column("district_name", sa.String(length=120), nullable=False),
        sa.Column("block_name", sa.String(length=120), nullable=False),
        sa.Column("gram_panchayat_name", sa.String(length=200), nullable=False),
        sa.Column("observed_on", sa.Date(), nullable=False),
        sa.Column("ihhl_total_as_per_details", sa.Integer(), nullable=False),
        sa.Column("ihhl_total_achieved", sa.Integer(), nullable=False),
        sa.Column("ihhl_gap", sa.Integer(), nullable=False),
        sa.Column("achievement_ratio", sa.Numeric(12, 8), nullable=True),
        sa.Column("source_quality_flag", sa.String(length=64), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("source_record_id", name="uq_civic_sanitation_source_record"),
    )
    op.create_index("ix_civic_sanitation_district", "civic_sanitation_indicator", ["district_name"])
    op.create_index("ix_civic_sanitation_block", "civic_sanitation_indicator", ["block_name"])
    op.create_index(
        "ix_civic_sanitation_observed_on",
        "civic_sanitation_indicator",
        ["observed_on"],
    )


def downgrade() -> None:
    op.drop_index("ix_civic_sanitation_observed_on", table_name="civic_sanitation_indicator")
    op.drop_index("ix_civic_sanitation_block", table_name="civic_sanitation_indicator")
    op.drop_index("ix_civic_sanitation_district", table_name="civic_sanitation_indicator")
    op.drop_table("civic_sanitation_indicator")
    op.drop_index("ix_civic_ward_context_ward", table_name="civic_ward_context")
    op.drop_index("ix_civic_ward_context_zone", table_name="civic_ward_context")
    op.drop_index("ix_civic_ward_context_city", table_name="civic_ward_context")
    op.drop_table("civic_ward_context")
