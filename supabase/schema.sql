-- Freebies email capture table
CREATE TABLE IF NOT EXISTS freebies_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active',
  source VARCHAR(100) DEFAULT 'website'
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_freebies_subscribers_email ON freebies_subscribers(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_freebies_subscribers_created_at ON freebies_subscribers(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE freebies_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow inserts for freebies subscribers" ON freebies_subscribers;
DROP POLICY IF EXISTS "Allow reads for authenticated users" ON freebies_subscribers;

-- Create policy to allow inserts from ANY user (authenticated or anonymous)
CREATE POLICY "Allow inserts for freebies subscribers" ON freebies_subscribers
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users only (for admin purposes)
CREATE POLICY "Allow reads for authenticated users" ON freebies_subscribers
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_freebies_subscribers_updated_at
  BEFORE UPDATE ON freebies_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 