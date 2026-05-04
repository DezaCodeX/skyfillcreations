-- Run this once in Supabase SQL Editor to create the editable Portfolio work images table.
CREATE TABLE IF NOT EXISTS founder_work_images (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO founder_work_images (image_url, alt_text, sort_order)
SELECT seed.image_url, seed.alt_text, seed.sort_order
FROM (
  VALUES
    ('/Founder details/work gallery 1.jpeg', 'Work sample 1', 1),
    ('/Founder details/work galery 2.jpeg', 'Work sample 2', 2),
    ('/Founder details/work gallery 3.png', 'Work sample 3', 3),
    ('/Founder details/work gallery 4.png', 'Work sample 4', 4),
    ('/Founder details/work gallery 5.png', 'Work sample 5', 5)
) AS seed(image_url, alt_text, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM founder_work_images);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'founder_work_images'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE founder_work_images;
  END IF;
END $$;
