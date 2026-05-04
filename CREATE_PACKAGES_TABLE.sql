-- Run this once in Supabase SQL Editor to create the editable Packages section.
CREATE TABLE IF NOT EXISTS packages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  services_offered TEXT[] DEFAULT ARRAY[]::TEXT[],
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO packages (name, description, services_offered, sort_order)
SELECT seed.name, seed.description, seed.services_offered, seed.sort_order
FROM (
  VALUES
    (
      'Signature Brand Build',
      'A focused identity package for businesses that need a sharper premium presence.',
      ARRAY['Branding', 'Design', 'Brand Storytelling']::TEXT[],
      1
    ),
    (
      'Content Engine Studio',
      'A production package for consistent social, campaign, and multimedia content.',
      ARRAY['Photography', 'Content Creation', 'Video Editing', 'Podcasts']::TEXT[],
      2
    ),
    (
      'Market Clarity Lab',
      'An analysis package for understanding performance, competitors, and growth gaps.',
      ARRAY['Business Analysis', 'Competitor Analysis', 'Performance Tracking']::TEXT[],
      3
    ),
    (
      'Launch Growth System',
      'A complete execution package for brands preparing to launch, scale, or relaunch.',
      ARRAY['Marketing Packages', 'Ad Shoot Direction', 'Campaign Content', 'Design', 'Growth Marketing']::TEXT[],
      4
    )
) AS seed(name, description, services_offered, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM packages);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'packages'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE packages;
  END IF;
END $$;
