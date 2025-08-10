# Fix RLS Error for Freebies Email Capture

## Problem
You're getting a 401 error with code "42501" - "new row violates row-level security policy for table 'freebies_subscribers'"

## Solution Options

### Option 1: Run Migration Script (Recommended)
Run this SQL in your Supabase SQL Editor to add the full_name field and fix RLS:

```sql
-- Add full_name column if it doesn't exist
ALTER TABLE freebies_subscribers 
ADD COLUMN IF NOT EXISTS full_name VARCHAR(255);

-- Drop existing policies
DROP POLICY IF EXISTS "Allow inserts for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow reads for authenticated users" ON freebies_subscribers;

-- Create new policy that explicitly allows anonymous inserts
CREATE POLICY "Allow inserts for freebies subscribers" ON freebies_subscribers
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for authenticated reads (admin purposes)
CREATE POLICY "Allow reads for authenticated users" ON freebies_subscribers
  FOR SELECT 
  USING (auth.role() = 'authenticated');
```

### Option 2: Disable RLS (Simplest)
If you don't need RLS for this table, run:

```sql
-- Disable RLS entirely for this table
ALTER TABLE freebies_subscribers DISABLE ROW LEVEL SECURITY;

-- Add full_name column if it doesn't exist
ALTER TABLE freebies_subscribers 
ADD COLUMN IF NOT EXISTS full_name VARCHAR(255);
```

### Option 3: Recreate Table Without RLS
If the above doesn't work, recreate the table:

```sql
-- Drop the existing table
DROP TABLE IF EXISTS freebies_subscribers;

-- Recreate without RLS
CREATE TABLE freebies_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active',
  source VARCHAR(100) DEFAULT 'website'
);

-- Create indexes
CREATE INDEX idx_freebies_subscribers_email ON freebies_subscribers(email);
CREATE INDEX idx_freebies_subscribers_created_at ON freebies_subscribers(created_at);

-- Create trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
CREATE TRIGGER update_freebies_subscribers_updated_at
  BEFORE UPDATE ON freebies_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Steps to Fix

1. **Go to your Supabase Dashboard**
2. **Navigate to SQL Editor**
3. **Run Option 1 SQL above** (recommended)
4. **Test the email capture** in your website
5. **Check the browser console** for any remaining errors

## Environment Variable Check

Make sure your `.env.local` file has:
```
NEXT_PUBLIC_SUPABASE_ANON=your_actual_anon_key_here
```

## New Features Added

- ✅ **Full Name Field**: Users now provide their full name
- ✅ **Better Validation**: Both name and email are validated
- ✅ **Improved Error Handling**: More specific error messages
- ✅ **Form Reset**: Fields clear after successful submission

## Test the Fix

1. Open your website
2. Click "FREEBIES" button
3. Enter your full name and email address
4. Submit the form
5. Check for success message

If you still get errors, try Option 2 or 3 above.

## Troubleshooting

- **404 Manifest Error**: This is unrelated to the form - it's just a missing web manifest file
- **401 RLS Error**: Use the SQL fixes above
- **Still having issues**: Try Option 2 (disable RLS entirely) 