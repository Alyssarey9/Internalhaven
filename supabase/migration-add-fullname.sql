-- Migration: Add full_name field to existing freebies_subscribers table
-- Run this if the table already exists

-- Add full_name column if it doesn't exist
ALTER TABLE freebies_subscribers 
ADD COLUMN IF NOT EXISTS full_name VARCHAR(255);

-- Fix RLS policies (in case they're still causing issues)
DROP POLICY IF EXISTS "Allow inserts for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow reads for authenticated users" ON freebies_subscribers;

-- Create new policies
CREATE POLICY "Allow inserts for freebies subscribers" ON freebies_subscribers
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow reads for authenticated users" ON freebies_subscribers
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Alternative: Disable RLS entirely if policies still cause issues
-- ALTER TABLE freebies_subscribers DISABLE ROW LEVEL SECURITY; 