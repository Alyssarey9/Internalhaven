-- =====================================================
-- VERIFICATION: Check Freebies Setup
-- =====================================================
-- Run this to verify everything is set up correctly
-- =====================================================

-- Check table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'freebies_subscribers'
ORDER BY ordinal_position;

-- Check indexes
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE tablename = 'freebies_subscribers';

-- Check RLS policies
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'freebies_subscribers';

-- Check if RLS is enabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'freebies_subscribers';

-- Check record count
SELECT 
  'Current records' as info,
  COUNT(*) as count
FROM freebies_subscribers;

-- =====================================================
-- VERIFICATION COMPLETE!
-- ===================================================== 