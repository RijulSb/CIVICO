"""Add Census 2011 population reference data.

Revision ID: c2d4e6f8a901
Revises: b8e9f1a2c3d4
"""

from alembic import op
import sqlalchemy as sa

revision = "c2d4e6f8a901"
down_revision = "b8e9f1a2c3d4"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "census_population_reference",
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column("source_name", sa.String(length=160), nullable=False),
        sa.Column("source_resource_id", sa.String(length=120), nullable=True),
        sa.Column("source_url", sa.String(length=500), nullable=True),
        sa.Column("retrieved_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("reference_year", sa.Integer(), nullable=False),
        sa.Column("state_name", sa.String(length=80), nullable=False),
        sa.Column("district_name", sa.String(length=120), nullable=False),
        sa.Column("subdistrict_name", sa.String(length=160), nullable=False),
        sa.Column("locality_type", sa.String(length=40), nullable=False, server_default="subdistrict"),
        sa.Column("official_area_code", sa.String(length=80), nullable=True),
        sa.Column("households_total", sa.Integer(), nullable=False),
        sa.Column("population_total", sa.Integer(), nullable=False),
        sa.Column("male_population", sa.Integer(), nullable=False),
        sa.Column("female_population", sa.Integer(), nullable=False),
        sa.Column("children_0_6", sa.Integer(), nullable=False),
        sa.Column("sc_population", sa.Integer(), nullable=False),
        sa.Column("st_population", sa.Integer(), nullable=False),
        sa.Column("literate_population", sa.Integer(), nullable=False),
        sa.Column("illiterate_population", sa.Integer(), nullable=False),
        sa.Column("total_workers", sa.Integer(), nullable=False),
        sa.Column("non_workers", sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint(
            "state_name",
            "district_name",
            "subdistrict_name",
            "reference_year",
            name="uq_census_population_reference_area_year",
        ),
        sa.CheckConstraint("households_total >= 0", name="ck_census_households_nonnegative"),
        sa.CheckConstraint("population_total >= 0", name="ck_census_population_nonnegative"),
        sa.CheckConstraint("male_population + female_population = population_total", name="ck_census_sex_total"),
        sa.CheckConstraint("children_0_6 <= population_total", name="ck_census_children_bound"),
        sa.CheckConstraint("literate_population + illiterate_population = population_total", name="ck_census_literacy_total"),
        sa.CheckConstraint("total_workers + non_workers = population_total", name="ck_census_worker_total"),
    )
    op.create_index(
        "ix_census_population_reference_district_subdistrict",
        "census_population_reference",
        ["district_name", "subdistrict_name"],
    )
    op.create_index(
        "ix_census_population_reference_reference_year",
        "census_population_reference",
        ["reference_year"],
    )


def downgrade() -> None:
    op.drop_index("ix_census_population_reference_reference_year", table_name="census_population_reference")
    op.drop_index("ix_census_population_reference_district_subdistrict", table_name="census_population_reference")
    op.drop_table("census_population_reference")
