-- =====================================================
-- CLEANUP: Remove Test Data
-- =====================================================
-- Run this after you've verified the email capture works
-- =====================================================

-- Remove the test record created during migration
DELETE FROM freebies_subscribers 
WHERE email = 'test@example.com' 
   OR source = 'migration_test';

-- Verify cleanup
SELECT 
  'Cleanup complete' as status,
  COUNT(*) as remaining_records
FROM freebies_subscribers;

-- =====================================================
-- CLEANUP COMPLETE!
-- ===================================================== 