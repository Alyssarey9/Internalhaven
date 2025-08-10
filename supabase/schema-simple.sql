-- Freebies email capture table (Simple version without RLS)
CREATE TABLE IF NOT EXISTS freebies_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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