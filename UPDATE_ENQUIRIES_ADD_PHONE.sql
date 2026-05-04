-- Run this in Supabase SQL Editor to add phone column to enquiries table

-- Add phone column if it doesn't exist
ALTER TABLE enquiries 
ADD COLUMN IF NOT EXISTS phone TEXT;

-- Verify the table structure
-- SELECT * FROM enquiries LIMIT 1;
