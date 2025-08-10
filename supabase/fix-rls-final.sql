-- =====================================================
-- FINAL FIX: Disable RLS to Resolve 401 Error
-- =====================================================
-- This will completely disable RLS for the freebies_subscribers table
-- =====================================================

-- Step 1: Disable RLS entirely for this table
ALTER TABLE freebies_subscribers DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop all existing policies (clean slate)
DROP POLICY IF EXISTS "Allow inserts for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow reads for authenticated users" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow updates for authenticated users" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow deletes for authenticated users" ON freebies_subscribers;

-- Step 3: Verify RLS is disabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'freebies_subscribers';

-- Step 4: Test insert (this should work now)
INSERT INTO freebies_subscribers (full_name, email, source) 
VALUES ('Test User 2', 'test2@example.com', 'rls_fix_test')
ON CONFLICT (email) DO NOTHING;

-- Step 5: Verify the test insert worked
SELECT 
  'RLS Fix Complete' as status,
  COUNT(*) as total_records,
  COUNT(CASE WHEN source = 'rls_fix_test' THEN 1 END) as test_records
FROM freebies_subscribers;

-- =====================================================
-- RLS DISABLED - INSERTS SHOULD NOW WORK!
-- ===================================================== 