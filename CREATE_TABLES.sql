-- Create Company Table
CREATE TABLE IF NOT EXISTS company (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL DEFAULT 'Studio Skyfill Creations',
  short_name TEXT DEFAULT 'Skyfill',
  email TEXT DEFAULT 'skyfillcreationspg@gmail.com',
  phone TEXT DEFAULT '9345370090',
  phone2 TEXT DEFAULT '9500125369',
  instagram_id TEXT DEFAULT 'skyfill_creations',
  instagram_url TEXT DEFAULT 'https://www.instagram.com/skyfill_creations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  address TEXT DEFAULT 'VSK Nagar, Pannimadi Road, Near PV Mahal, Coimbatore, Thudiyalur 641017',
  logo TEXT DEFAULT '/logo.jpeg',
  brand_line1 TEXT DEFAULT 'Studio',
  brand_line2 TEXT DEFAULT 'Skyfill Creations',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create FAQ Items Table
CREATE TABLE IF NOT EXISTS faq_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert FAQ Data
INSERT INTO faq_items (question, answer) VALUES
('What makes Skyfill different from a traditional agency?', 'We operate as a premium growth partner, combining brand strategy, creative production, and performance analytics in one studio. You get senior talent, not layers of account management.'),
('How fast can we launch?', 'Most clients see a full brand and demand system live within 4 to 6 weeks, depending on scope and approvals.'),
('Do you work with global teams?', 'Yes. Our delivery model supports distributed stakeholders across North America, Europe, and Asia with weekly leadership reporting.'),
('What does a typical engagement include?', 'Every engagement includes strategy, creative direction, a content system, and performance optimization tailored to your goals.')
ON CONFLICT DO NOTHING;

-- Create Services Table
CREATE TABLE IF NOT EXISTS services (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  focus TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert Services Data
INSERT INTO services (title, description, focus) VALUES
('Branding', 'Positioning, naming, and identity systems that communicate prestige with clarity.', 'Identity, tone, governance'),
('Photography', 'Editorial photography and art direction for elevated product storytelling.', 'Studio, lifestyle, launch'),
('Podcasts', 'Premium podcast production that builds authority and lasting engagement.', 'Production, distribution'),
('Design', 'Web, UI, and campaign design that feels effortless and performs across touchpoints.', 'Web, campaigns, assets'),
('Business Analysis', 'Market diagnostics and funnel audits that reveal high-leverage growth paths.', 'Insights, forecasting'),
('Competitor Analysis', 'Competitive intelligence that reveals whitespace and premium differentiation.', 'Category mapping'),
('Marketing Packages', 'Modular retainers that scale content, media, and optimization.', 'Launch + growth')
ON CONFLICT DO NOTHING;

-- Create Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  title TEXT,
  quote TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert Testimonials Data
INSERT INTO testimonials (name, title, quote) VALUES
('Amelia Ross', 'CMO, Eira Skincare', 'Skyfill translated our vision into a premium launch that felt effortless. Demand exceeded forecasts within weeks.'),
('Dylan Patel', 'Founder, Arcline', 'Their team delivered a level of polish and strategic clarity we had never experienced. Pipeline velocity nearly doubled.'),
('Harper Lin', 'Head of Brand, Noir Hotels', 'Skyfill captured the exact emotional tone while still delivering measurable bookings. They became an extension of our brand team.')
ON CONFLICT DO NOTHING;

-- Create Portfolio Projects Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  category TEXT,
  description TEXT,
  results TEXT,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  accent TEXT,
  image TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert Portfolio Data
INSERT INTO portfolio_projects (title, category, description, results, tags, accent, image, featured) VALUES
('Ad Shoot Preparation', 'Ad Shoots', 'Planning and setup for production-ready ad visuals with clear direction and brand consistency.', 'Production workflow optimized', ARRAY['Ad Shoots', 'Pre-Production', 'Direction'], 'from-sky-400/40 via-cyan-300/10 to-transparent', 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1400&q=80', true),
('Ad Shoot Direction', 'Ad Shoots', 'On-ground shoot supervision to capture clean, campaign-ready assets for digital promotions.', 'Stronger ad creative output', ARRAY['Ad Shoots', 'Creative Direction', 'Campaigns'], 'from-cyan-400/40 via-sky-300/10 to-transparent', 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80', false),
('Editing Workflow', 'Editing', 'Post-production process focused on clarity, pacing, and polished output for social and campaign content.', 'Faster content turnaround', ARRAY['Editing', 'Post-Production', 'Content Delivery'], 'from-slate-400/40 via-sky-400/10 to-transparent', 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80', false),
('Performance Tracking', 'Business Analysis', 'Analyzing campaign performance trends and identifying patterns for data-backed improvements.', 'Clearer KPI visibility', ARRAY['Business Analysis', 'Performance Metrics', 'Reporting'], 'from-sky-500/40 via-cyan-400/10 to-transparent', '/Founder details/work gallery 4.png', false),
('Editing and Delivery Suite', 'Editing', 'Final cut review and delivery setup for high-quality outputs across platforms.', 'Consistent final quality', ARRAY['Editing', 'Quality Control', 'Delivery'], 'from-cyan-500/40 via-sky-400/10 to-transparent', 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80', false),
('Competitor Intelligence Review', 'Business Analysis', 'Comparative research and positioning insights to improve messaging and campaign decision-making.', 'Sharper market positioning', ARRAY['Business Analysis', 'Competitor Analysis'], 'from-slate-500/40 via-cyan-400/10 to-transparent', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80', false)
ON CONFLICT DO NOTHING;

-- Create Founder Profile Table
CREATE TABLE IF NOT EXISTS founder_profile (
  id BIGINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  eyebrow TEXT DEFAULT 'Founder Profile',
  title TEXT DEFAULT 'About the Founder',
  subtitle TEXT DEFAULT 'Explore the vision behind Skyfill Creations-featuring the founder''s journey, creative approach, signature work, and direct ways to collaborate.',
  badge_label TEXT DEFAULT 'Founder',
  name TEXT DEFAULT 'PG Gireesh',
  role TEXT DEFAULT 'Founder, Studio Skyfill Creations',
  about TEXT DEFAULT 'PG Gireesh the founder of Studio Skyfill Creations, focused on building premium brands with clarity and purpose. His work blends design, storytelling, and strategy to create impactful digital experiences. From branding and photography to business and competitor analysis, he helps businesses stand out, scale smarter, and communicate with confidence across every touchpoint. Driven by precision and creativity, his vision is to craft modern brands that feel effortless, perform consistently, and leave a lasting impression.',
  profile_image TEXT DEFAULT '/Founder details/pg-gireesh.jpeg',
  profile_image_fit TEXT DEFAULT 'contain',
  profile_image_label TEXT DEFAULT 'Founder Image',
  qualities TEXT[] DEFAULT ARRAY['Creative Direction', 'Brand Strategy', 'Growth Marketing', 'Client Partnership', 'Production Excellence', 'Execution Speed', 'Data-Driven Decisions', 'Team Leadership', 'Long-Term Vision', 'Detail Focus']::TEXT[],
  qualities_title TEXT DEFAULT 'Qualities of PG Gireesh',
  work_images TEXT[] DEFAULT ARRAY['/Founder details/work gallery 1.jpeg', '/Founder details/work galery 2.jpeg', '/Founder details/work gallery 3.png', '/Founder details/work gallery 4.png', '/Founder details/work gallery 5.png']::TEXT[],
  work_images_title TEXT DEFAULT 'Work Images',
  primary_cta_label TEXT DEFAULT 'Talk to Founder',
  primary_cta_path TEXT DEFAULT '/contact',
  secondary_cta_label TEXT DEFAULT 'View Services',
  secondary_cta_path TEXT DEFAULT '/services',
  contact_phone TEXT DEFAULT '+91 9345370090',
  contact_phone2 TEXT DEFAULT '+91 95001 25369',
  contact_email TEXT DEFAULT 'skyfillcreationspg@gmail.com',
  contact_instagram_id TEXT DEFAULT 'gireesh__pg',
  contact_instagram_url TEXT DEFAULT 'https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4',
  contact_mobile_label TEXT DEFAULT 'Mobile',
  contact_mail_label TEXT DEFAULT 'Mail',
  contact_instagram_label TEXT DEFAULT 'Instagram',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Upgrade existing Founder Profile tables without dropping data
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS eyebrow TEXT DEFAULT 'Founder Profile';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS title TEXT DEFAULT 'About the Founder';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS subtitle TEXT DEFAULT 'Explore the vision behind Skyfill Creations-featuring the founder''s journey, creative approach, signature work, and direct ways to collaborate.';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS badge_label TEXT DEFAULT 'Founder';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS profile_image_label TEXT DEFAULT 'Founder Image';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS qualities_title TEXT DEFAULT 'Qualities of PG Gireesh';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS work_images_title TEXT DEFAULT 'Work Images';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS primary_cta_label TEXT DEFAULT 'Talk to Founder';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS primary_cta_path TEXT DEFAULT '/contact';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS secondary_cta_label TEXT DEFAULT 'View Services';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS secondary_cta_path TEXT DEFAULT '/services';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS contact_instagram_url TEXT DEFAULT 'https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS contact_mobile_label TEXT DEFAULT 'Mobile';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS contact_mail_label TEXT DEFAULT 'Mail';
ALTER TABLE founder_profile ADD COLUMN IF NOT EXISTS contact_instagram_label TEXT DEFAULT 'Instagram';

-- Insert Founder Data
INSERT INTO founder_profile (
  eyebrow,
  title,
  subtitle,
  badge_label,
  name,
  role,
  about,
  profile_image,
  profile_image_fit,
  profile_image_label,
  qualities,
  qualities_title,
  work_images,
  work_images_title,
  primary_cta_label,
  primary_cta_path,
  secondary_cta_label,
  secondary_cta_path,
  contact_phone,
  contact_phone2,
  contact_email,
  contact_instagram_id,
  contact_instagram_url,
  contact_mobile_label,
  contact_mail_label,
  contact_instagram_label
)
SELECT
  'Founder Profile',
  'About the Founder',
  'Explore the vision behind Skyfill Creations-featuring the founder''s journey, creative approach, signature work, and direct ways to collaborate.',
  'Founder',
  'PG Gireesh',
  'Founder, Studio Skyfill Creations',
  'PG Gireesh the founder of Studio Skyfill Creations, focused on building premium brands with clarity and purpose. His work blends design, storytelling, and strategy to create impactful digital experiences. From branding and photography to business and competitor analysis, he helps businesses stand out, scale smarter, and communicate with confidence across every touchpoint. Driven by precision and creativity, his vision is to craft modern brands that feel effortless, perform consistently, and leave a lasting impression.',
  '/Founder details/pg-gireesh.jpeg',
  'contain',
  'Founder Image',
  ARRAY['Creative Direction', 'Brand Strategy', 'Growth Marketing', 'Client Partnership', 'Production Excellence', 'Execution Speed', 'Data-Driven Decisions', 'Team Leadership', 'Long-Term Vision', 'Detail Focus']::TEXT[],
  'Qualities of PG Gireesh',
  ARRAY['/Founder details/work gallery 1.jpeg', '/Founder details/work galery 2.jpeg', '/Founder details/work gallery 3.png', '/Founder details/work gallery 4.png', '/Founder details/work gallery 5.png']::TEXT[],
  'Work Images',
  'Talk to Founder',
  '/contact',
  'View Services',
  '/services',
  '+91 9345370090',
  '+91 95001 25369',
  'skyfillcreationspg@gmail.com',
  'gireesh__pg',
  'https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4',
  'Mobile',
  'Mail',
  'Instagram'
WHERE NOT EXISTS (SELECT 1 FROM founder_profile);

UPDATE founder_profile
SET
  eyebrow = COALESCE(eyebrow, 'Founder Profile'),
  title = COALESCE(title, 'About the Founder'),
  subtitle = COALESCE(subtitle, 'Explore the vision behind Skyfill Creations-featuring the founder''s journey, creative approach, signature work, and direct ways to collaborate.'),
  badge_label = COALESCE(badge_label, 'Founder'),
  profile_image_label = COALESCE(profile_image_label, 'Founder Image'),
  qualities_title = COALESCE(qualities_title, 'Qualities of PG Gireesh'),
  work_images_title = COALESCE(work_images_title, 'Work Images'),
  primary_cta_label = COALESCE(primary_cta_label, 'Talk to Founder'),
  primary_cta_path = COALESCE(primary_cta_path, '/contact'),
  secondary_cta_label = COALESCE(secondary_cta_label, 'View Services'),
  secondary_cta_path = COALESCE(secondary_cta_path, '/services'),
  contact_instagram_url = COALESCE(contact_instagram_url, 'https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4'),
  contact_mobile_label = COALESCE(contact_mobile_label, 'Mobile'),
  contact_mail_label = COALESCE(contact_mail_label, 'Mail'),
  contact_instagram_label = COALESCE(contact_instagram_label, 'Instagram');

-- Create Founder Work Images Table
CREATE TABLE IF NOT EXISTS founder_work_images (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert Founder Work Images
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

-- Create Media Table
CREATE TABLE IF NOT EXISTS media (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  background_videos JSONB DEFAULT '[{"label":"Ad Shoots","src":"/videos/shooting.mp4","poster":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"},{"label":"Podcast","src":"/videos/podcast.mp4","poster":"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80"},{"label":"Editing","src":"/videos/editing.mp4","poster":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"},{"label":"Business Development","src":"/videos/business-development.mp4","poster":"https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80"}]'::JSONB,
  hero_video TEXT DEFAULT '/videos/podcast.mp4',
  hero_poster TEXT DEFAULT 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80',
  about_image TEXT DEFAULT 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
  testimonial_image TEXT DEFAULT 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80',
  contact_image TEXT DEFAULT 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert Media Data
INSERT INTO media (background_videos, hero_video, hero_poster, about_image, testimonial_image, contact_image) 
VALUES (
  '[{"label":"Ad Shoots","src":"/videos/shooting.mp4","poster":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"},{"label":"Podcast","src":"/videos/podcast.mp4","poster":"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80"},{"label":"Editing","src":"/videos/editing.mp4","poster":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"},{"label":"Business Development","src":"/videos/business-development.mp4","poster":"https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80"}]'::JSONB,
  '/videos/podcast.mp4',
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
)
ON CONFLICT DO NOTHING;

-- Insert Company Data
INSERT INTO company (name, short_name, email, phone, phone2, instagram_id, instagram_url, address, logo, brand_line1, brand_line2) 
VALUES (
  'Studio Skyfill Creations',
  'Skyfill',
  'skyfillcreationspg@gmail.com',
  '9345370090',
  '9500125369',
  'skyfill_creations',
  'https://www.instagram.com/skyfill_creations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  'VSK Nagar, Pannimadi Road, Near PV Mahal, Coimbatore, Thudiyalur 641017',
  '/logo.jpeg',
  'Studio',
  'Skyfill Creations'
)
ON CONFLICT DO NOTHING;

-- Enable Real-time for all tables
DO $$
DECLARE
  table_name TEXT;
BEGIN
  FOREACH table_name IN ARRAY ARRAY[
    'company',
    'faq_items',
    'services',
    'testimonials',
    'portfolio_projects',
    'founder_profile',
    'founder_work_images',
    'media'
  ]
  LOOP
    IF NOT EXISTS (
      SELECT 1
      FROM pg_publication_tables
      WHERE pubname = 'supabase_realtime'
        AND schemaname = 'public'
        AND tablename = table_name
    ) THEN
      EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', table_name);
    END IF;
  END LOOP;
END $$;
