-- CIVICO read-only Supabase/Postgres security audit.
-- Run this in the Supabase SQL Editor after the project is resumed.
-- This script does not modify tables, policies, grants, or storage.

-- 1. RLS enabled/forced for application tables.
SELECT
  n.nspname AS schema_name,
  c.relname AS table_name,
  c.relrowsecurity AS rls_enabled,
  c.relforcerowsecurity AS rls_forced
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname IN ('public', 'storage')
  AND c.relkind IN ('r', 'p')
ORDER BY n.nspname, c.relname;

-- 2. Policies currently defined.
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname IN ('public', 'storage')
ORDER BY schemaname, tablename, policyname;

-- 3. Direct table grants to browser-facing roles.
SELECT
  table_schema,
  table_name,
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema IN ('public', 'storage')
  AND grantee IN ('anon', 'authenticated', 'public')
ORDER BY table_schema, table_name, grantee, privilege_type;

-- 4. Storage buckets and whether they are public.
SELECT id, name, public, file_size_limit, allowed_mime_types
FROM storage.buckets
ORDER BY name;

-- 5. Storage policies.
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'storage'
  AND tablename = 'objects'
ORDER BY policyname;
