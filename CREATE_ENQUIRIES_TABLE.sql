-- Run this once in Supabase SQL Editor to create the enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Realtime for enquiries table (optional, for live updates)
ALTER PUBLICATION supabase_realtime ADD TABLE enquiries;

-- Create a security policy to allow public inserts
CREATE POLICY "Allow public insert on enquiries"
ON enquiries
FOR INSERT
TO public
WITH CHECK (true);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
