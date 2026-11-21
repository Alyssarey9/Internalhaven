BEGIN;

ALTER TABLE public.freebies_subscribers ENABLE ROW LEVEL SECURITY;

DO $$
DECLARE
  existing_policy RECORD;
BEGIN
  FOR existing_policy IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'freebies_subscribers'
  LOOP
    RAISE NOTICE 'Dropping policy %', existing_policy.policyname;
    EXECUTE format('DROP POLICY %I ON public.freebies_subscribers', existing_policy.policyname);
  END LOOP;
END;
$$;

CREATE POLICY anon_insert_only ON public.freebies_subscribers
  FOR INSERT TO anon
  WITH CHECK (true);

REVOKE SELECT, UPDATE, DELETE ON public.freebies_subscribers FROM anon;

COMMIT;
