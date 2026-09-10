"""Apply RLS deny policies for anon/authenticated on flagged tables.

Revision ID: a0b1c2d3e4f5
Revises: f2a1b3c4d5e6
"""

from pathlib import Path

from alembic import op
import sqlalchemy as sa

revision = "a0b1c2d3e4f5"
down_revision = "f2a1b3c4d5e6"
branch_labels = None
depends_on = None

POLICY_NAME = "civico_deny_anon_authenticated"

PUBLIC_TABLES = (
    "alembic_version",
    "analyses",
    "audit_logs",
    "civic_sanitation_indicator",
    "civic_ward_context",
    "data_sources",
    "evidence",
    "geography_columns",
    "geometry_columns",
    "issues",
    "portfolios",
    "priorities",
    "projects",
    "spatial_ref_sys",
    "stg_bhubaneswar_ward_profile",
    "stg_ihhl_household_latrine",
    "submissions",
    "themes",
)

STORAGE_TABLES = (
    "buckets",
    "buckets_analytics",
    "buckets_vectors",
    "objects",
    "s3_multipart_uploads",
    "s3_multipart_uploads_parts",
    "vector_indexes",
)

_SQL_PATH = Path(__file__).resolve().parents[1].parent / "scripts" / "apply_supabase_rls.sql"


def _agent_log(message: str, data: dict, hypothesis_id: str, run_id: str = "apply") -> None:
    # #region agent log
    import json
    import time

    payload = {
        "sessionId": "2e8c97",
        "timestamp": int(time.time() * 1000),
        "location": "a0b1c2d3e4f5_apply_rls_security_policies.py",
        "message": message,
        "data": data,
        "runId": run_id,
        "hypothesisId": hypothesis_id,
    }
    log_path = Path(__file__).resolve().parents[3] / "debug-2e8c97.log"
    with log_path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(payload) + "\n")
    # #endregion


def _snapshot_security(conn) -> list[dict]:
    public_list = ", ".join(f"'{name}'" for name in PUBLIC_TABLES)
    storage_list = ", ".join(f"'{name}'" for name in STORAGE_TABLES)
    rows = conn.execute(
        sa.text(
            f"""
            SELECT
              n.nspname AS schema_name,
              c.relname AS table_name,
              c.relkind,
              c.relrowsecurity AS rls_enabled,
              EXISTS (
                SELECT 1
                FROM pg_policy p
                WHERE p.polrelid = c.oid
                  AND p.polname = '{POLICY_NAME}'
              ) AS has_deny_policy
            FROM pg_class c
            JOIN pg_namespace n ON n.oid = c.relnamespace
            WHERE c.relkind IN ('r', 'p', 'v', 'm')
              AND (
                (n.nspname = 'public' AND c.relname IN ({public_list}))
                OR (n.nspname = 'storage' AND c.relname IN ({storage_list}))
              )
            ORDER BY n.nspname, c.relname
            """
        )
    )
    return [dict(row._mapping) for row in rows]


def upgrade() -> None:
    conn = op.get_bind()
    before = _snapshot_security(conn)
    _agent_log(
        "RLS snapshot before apply",
        {
            "relation_count": len(before),
            "rls_disabled": [r["table_name"] for r in before if r["relkind"] in ("r", "p") and not r["rls_enabled"]],
            "missing_policy": [r["table_name"] for r in before if r["relkind"] in ("r", "p") and not r["has_deny_policy"]],
            "views": [r["table_name"] for r in before if r["relkind"] in ("v", "m")],
        },
        "A",
        "pre-fix",
    )
    sql = _SQL_PATH.read_text(encoding="utf-8")
    start = sql.index("DO $rls$")
    end = sql.index("$rls$;") + len("$rls$;")
    op.execute(sql[start:end])
    after = _snapshot_security(conn)
    _agent_log(
        "RLS snapshot after apply",
        {
            "relation_count": len(after),
            "rls_disabled": [r["table_name"] for r in after if r["relkind"] in ("r", "p") and not r["rls_enabled"]],
            "missing_policy": [r["table_name"] for r in after if r["relkind"] in ("r", "p") and not r["has_deny_policy"]],
            "secured_tables": [r["table_name"] for r in after if r["relkind"] in ("r", "p") and r["rls_enabled"]],
        },
        "A",
        "post-fix",
    )


def downgrade() -> None:
    conn = op.get_bind()
    public_list = ", ".join(f"'{name}'" for name in PUBLIC_TABLES)
    storage_list = ", ".join(f"'{name}'" for name in STORAGE_TABLES)
    rows = conn.execute(
        sa.text(
            f"""
            SELECT n.nspname AS schema_name, c.relname AS table_name, c.relkind
            FROM pg_class c
            JOIN pg_namespace n ON n.oid = c.relnamespace
            WHERE c.relkind IN ('r', 'p')
              AND (
                (n.nspname = 'public' AND c.relname IN ({public_list}))
                OR (n.nspname = 'storage' AND c.relname IN ({storage_list}))
              )
            """
        )
    )
    for row in rows:
        op.execute(
            sa.text(
                f'DROP POLICY IF EXISTS {POLICY_NAME} ON "{row.schema_name}"."{row.table_name}"'
            )
        )
        op.execute(
            sa.text(
                f'ALTER TABLE "{row.schema_name}"."{row.table_name}" DISABLE ROW LEVEL SECURITY'
            )
        )
