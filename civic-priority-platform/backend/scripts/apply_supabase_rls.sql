-- CIVICO: enable RLS and deny PostgREST roles on tables flagged by Supabase.
-- Backend SQLAlchemy connections use the table owner / service role and are unchanged.
-- Safe to re-run. Privilege failures are reported with WARNING, not rolled back.

DO $rls$
DECLARE
  rel record;
  polname constant text := 'civico_deny_anon_authenticated';
  has_anon boolean;
  has_auth boolean;
BEGIN
  SELECT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') INTO has_anon;
  SELECT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') INTO has_auth;

  IF has_anon THEN
    BEGIN
      REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;
      ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM anon;
    EXCEPTION WHEN insufficient_privilege OR undefined_object THEN
      RAISE WARNING 'could not schema-revoke public from anon: %', SQLERRM;
    END;
  END IF;

  IF has_auth THEN
    BEGIN
      REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated;
      ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM authenticated;
    EXCEPTION WHEN insufficient_privilege OR undefined_object THEN
      RAISE WARNING 'could not schema-revoke public from authenticated: %', SQLERRM;
    END;
  END IF;

  IF EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'storage') THEN
    IF has_anon THEN
      BEGIN
        REVOKE ALL ON ALL TABLES IN SCHEMA storage FROM anon;
      EXCEPTION WHEN insufficient_privilege OR undefined_object THEN
        RAISE WARNING 'could not schema-revoke storage from anon: %', SQLERRM;
      END;
    END IF;
    IF has_auth THEN
      BEGIN
        REVOKE ALL ON ALL TABLES IN SCHEMA storage FROM authenticated;
      EXCEPTION WHEN insufficient_privilege OR undefined_object THEN
        RAISE WARNING 'could not schema-revoke storage from authenticated: %', SQLERRM;
      END;
    END IF;
  END IF;

  FOR rel IN
    SELECT n.nspname AS schema_name, c.relname AS table_name, c.relkind,
           pg_get_userbyid(c.relowner) AS owner_name
    FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relkind IN ('r', 'p', 'v', 'm')
      AND (
        (n.nspname = 'public' AND c.relname IN (
          'alembic_version',
          'analyses',
          'audit_logs',
          'civic_sanitation_indicator',
          'civic_ward_context',
          'data_sources',
          'evidence',
          'geography_columns',
          'geometry_columns',
          'issues',
          'portfolios',
          'priorities',
          'projects',
          'spatial_ref_sys',
          'stg_bhubaneswar_ward_profile',
          'stg_ihhl_household_latrine',
          'submissions',
          'themes'
        ))
        OR
        (n.nspname = 'storage' AND c.relname IN (
          'buckets',
          'buckets_analytics',
          'buckets_vectors',
          'objects',
          's3_multipart_uploads',
          's3_multipart_uploads_parts',
          'vector_indexes'
        ))
      )
  LOOP
    IF NOT (
      rel.schema_name = 'public'
      AND rel.table_name IN ('spatial_ref_sys', 'geometry_columns', 'geography_columns')
    ) THEN
      BEGIN
        EXECUTE format('REVOKE ALL ON TABLE %I.%I FROM PUBLIC', rel.schema_name, rel.table_name);
      EXCEPTION WHEN insufficient_privilege OR undefined_table OR undefined_object THEN
        RAISE WARNING 'revoke PUBLIC skipped %.% owner=%: %', rel.schema_name, rel.table_name, rel.owner_name, SQLERRM;
      END;
    END IF;

    IF has_anon THEN
      BEGIN
        EXECUTE format('REVOKE ALL ON TABLE %I.%I FROM anon', rel.schema_name, rel.table_name);
      EXCEPTION WHEN insufficient_privilege OR undefined_table OR undefined_object THEN
        RAISE WARNING 'revoke anon skipped %.% owner=%: %', rel.schema_name, rel.table_name, rel.owner_name, SQLERRM;
      END;
    END IF;

    IF has_auth THEN
      BEGIN
        EXECUTE format('REVOKE ALL ON TABLE %I.%I FROM authenticated', rel.schema_name, rel.table_name);
      EXCEPTION WHEN insufficient_privilege OR undefined_table OR undefined_object THEN
        RAISE WARNING 'revoke authenticated skipped %.% owner=%: %', rel.schema_name, rel.table_name, rel.owner_name, SQLERRM;
      END;
    END IF;

    IF rel.relkind IN ('r', 'p') THEN
      BEGIN
        EXECUTE format('ALTER TABLE %I.%I ENABLE ROW LEVEL SECURITY', rel.schema_name, rel.table_name);
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', polname, rel.schema_name, rel.table_name);
        EXECUTE format(
          'CREATE POLICY %I ON %I.%I AS PERMISSIVE FOR ALL USING (false) WITH CHECK (false)',
          polname,
          rel.schema_name,
          rel.table_name
        );
        IF has_anon THEN
          EXECUTE format('DROP POLICY IF EXISTS civico_deny_anon ON %I.%I', rel.schema_name, rel.table_name);
          EXECUTE format(
            'CREATE POLICY civico_deny_anon ON %I.%I AS PERMISSIVE FOR ALL TO anon USING (false) WITH CHECK (false)',
            rel.schema_name,
            rel.table_name
          );
        END IF;
        IF has_auth THEN
          EXECUTE format('DROP POLICY IF EXISTS civico_deny_authenticated ON %I.%I', rel.schema_name, rel.table_name);
          EXECUTE format(
            'CREATE POLICY civico_deny_authenticated ON %I.%I AS PERMISSIVE FOR ALL TO authenticated USING (false) WITH CHECK (false)',
            rel.schema_name,
            rel.table_name
          );
        END IF;
        RAISE NOTICE 'secured %.% (owner=%)', rel.schema_name, rel.table_name, rel.owner_name;
      EXCEPTION WHEN insufficient_privilege OR undefined_table OR undefined_object THEN
        RAISE WARNING 'RLS skipped %.% owner=%: %', rel.schema_name, rel.table_name, rel.owner_name, SQLERRM;
      END;
    ELSE
      RAISE NOTICE 'view/matview revoke-only %.% (owner=%)', rel.schema_name, rel.table_name, rel.owner_name;
    END IF;
  END LOOP;
END
$rls$;

-- Remaining browser-role grants (should be empty for public app tables).
SELECT
  table_schema,
  table_name,
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema IN ('public', 'storage')
  AND grantee IN ('anon', 'authenticated', 'public')
  AND table_name IN (
    'alembic_version',
    'analyses',
    'audit_logs',
    'civic_sanitation_indicator',
    'civic_ward_context',
    'data_sources',
    'evidence',
    'geography_columns',
    'geometry_columns',
    'issues',
    'portfolios',
    'priorities',
    'projects',
    'spatial_ref_sys',
    'stg_bhubaneswar_ward_profile',
    'stg_ihhl_household_latrine',
    'submissions',
    'themes',
    'buckets',
    'buckets_analytics',
    'buckets_vectors',
    'objects',
    's3_multipart_uploads',
    's3_multipart_uploads_parts',
    'vector_indexes'
  )
ORDER BY table_schema, table_name, grantee, privilege_type;

-- RLS + policy status for the flagged relations.
SELECT
  n.nspname AS schema_name,
  c.relname AS table_name,
  c.relkind,
  pg_get_userbyid(c.relowner) AS owner_name,
  c.relrowsecurity AS rls_enabled,
  EXISTS (
    SELECT 1 FROM pg_policy p
    WHERE p.polrelid = c.oid AND p.polname = 'civico_deny_anon_authenticated'
  ) AS has_deny_policy
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE c.relkind IN ('r', 'p', 'v', 'm')
  AND (
    (n.nspname = 'public' AND c.relname IN (
      'alembic_version', 'analyses', 'audit_logs', 'civic_sanitation_indicator',
      'civic_ward_context', 'data_sources', 'evidence', 'geography_columns',
      'geometry_columns', 'issues', 'portfolios', 'priorities', 'projects',
      'spatial_ref_sys', 'stg_bhubaneswar_ward_profile', 'stg_ihhl_household_latrine',
      'submissions', 'themes'
    ))
    OR
    (n.nspname = 'storage' AND c.relname IN (
      'buckets', 'buckets_analytics', 'buckets_vectors', 'objects',
      's3_multipart_uploads', 's3_multipart_uploads_parts', 'vector_indexes'
    ))
  )
ORDER BY n.nspname, c.relname;
