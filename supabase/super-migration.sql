-- =====================================================
-- SUPER MIGRATION: Complete Freebies Email Capture Setup
-- =====================================================
-- This script will:
-- 1. Drop existing table and policies
-- 2. Recreate table with full_name field
-- 3. Set up proper RLS policies
-- 4. Create indexes and triggers
-- =====================================================

-- Step 1: Drop existing triggers (if they exist)
DROP TRIGGER IF EXISTS update_freebies_subscribers_updated_at ON freebies_subscribers;

-- Step 2: Drop existing policies (if they exist)
DROP POLICY IF EXISTS "Allow inserts for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow reads for authenticated users" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow updates for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow deletes for freebies subscribers" ON freebies_subscribers;

-- Step 3: Drop existing indexes (if they exist)
DROP INDEX IF EXISTS idx_freebies_subscribers_email;
DROP INDEX IF EXISTS idx_freebies_subscribers_created_at;

-- Step 4: Drop existing table (if it exists)
DROP TABLE IF EXISTS freebies_subscribers;

-- Step 5: Create the trigger function (if it doesn't exist)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 6: Create the main table with all fields
CREATE TABLE freebies_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active',
  source VARCHAR(100) DEFAULT 'website'
);

-- Step 7: Create indexes for performance
CREATE INDEX idx_freebies_subscribers_email ON freebies_subscribers(email);
CREATE INDEX idx_freebies_subscribers_created_at ON freebies_subscribers(created_at);
CREATE INDEX idx_freebies_subscribers_status ON freebies_subscribers(status);

-- Step 8: Create trigger for automatic updated_at
CREATE TRIGGER update_freebies_subscribers_updated_at
  BEFORE UPDATE ON freebies_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Step 9: Enable Row Level Security
ALTER TABLE freebies_subscribers ENABLE ROW LEVEL SECURITY;

-- Step 10: Create RLS policies
-- Policy 1: Allow ANYONE to insert (for email capture)
CREATE POLICY "Allow inserts for freebies subscribers" ON freebies_subscribers
  FOR INSERT 
  WITH CHECK (true);

-- Policy 2: Allow authenticated users to read (for admin purposes)
CREATE POLICY "Allow reads for authenticated users" ON freebies_subscribers
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Policy 3: Allow authenticated users to update (for admin purposes)
CREATE POLICY "Allow updates for authenticated users" ON freebies_subscribers
  FOR UPDATE 
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Policy 4: Allow authenticated users to delete (for admin purposes)
CREATE POLICY "Allow deletes for authenticated users" ON freebies_subscribers
  FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Step 11: Insert a test record to verify everything works
-- (This will be automatically removed if you want to start fresh)
INSERT INTO freebies_subscribers (full_name, email, source) 
VALUES ('Test User', 'test@example.com', 'migration_test')
ON CONFLICT (email) DO NOTHING;

-- Step 12: Verify the setup
SELECT 
  'Table created successfully' as status,
  COUNT(*) as record_count
FROM freebies_subscribers;

-- =====================================================
-- MIGRATION COMPLETE!
-- =====================================================
-- 
-- What was created:
-- ✅ Table: freebies_subscribers
-- ✅ Fields: id, full_name, email, created_at, updated_at, status, source
-- ✅ Indexes: email, created_at, status
-- ✅ Trigger: Automatic updated_at timestamp
-- ✅ RLS Policies: Insert (anyone), Read/Update/Delete (authenticated only)
-- ✅ Test record inserted
--
-- Next steps:
-- 1. Test the email capture form on your website
-- 2. Remove the test record if desired: DELETE FROM freebies_subscribers WHERE email = 'test@example.com';
-- 3. Monitor the table for new subscriptions
-- ===================================================== 