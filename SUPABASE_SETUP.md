# Supabase Setup Guide

## 1. Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy your **Project URL** and **anon (public) key**
5. Update `.env.local`:

```
VITE_SUPABASE_URL=https://aws-1-ap-northeast-1.pooler.supabase.com
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

## 2. Create Database Tables

In Supabase SQL Editor, run these commands:

### Company Table
```sql
CREATE TABLE company (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  short_name TEXT,
  email TEXT,
  phone TEXT,
  phone2 TEXT,
  instagram_id TEXT,
  instagram_url TEXT,
  address TEXT,
  logo TEXT,
  brand_line1 TEXT,
  brand_line2 TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### FAQ Items Table
```sql
CREATE TABLE faq_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Portfolio Projects Table
```sql
CREATE TABLE portfolio_projects (
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
```

### Services Table
```sql
CREATE TABLE services (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  focus TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Testimonials Table
```sql
CREATE TABLE testimonials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  title TEXT,
  quote TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Founder Profile Table
```sql
CREATE TABLE founder_profile (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  role TEXT,
  about TEXT,
  profile_image TEXT,
  profile_image_fit TEXT,
  qualities TEXT[] DEFAULT ARRAY[]::TEXT[],
  work_images TEXT[] DEFAULT ARRAY[]::TEXT[],
  contact_phone TEXT,
  contact_phone2 TEXT,
  contact_email TEXT,
  contact_instagram_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Media Table
```sql
CREATE TABLE media (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  background_videos JSONB DEFAULT '[]'::JSONB,
  hero_video TEXT,
  hero_poster TEXT,
  about_image TEXT,
  testimonial_image TEXT,
  contact_image TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 3. Insert Your Data

Run these insert commands:

### Company Data
```sql
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
);
```

### FAQ Data
```sql
INSERT INTO faq_items (question, answer) VALUES
('What makes Skyfill different from a traditional agency?', 'We operate as a premium growth partner, combining brand strategy, creative production, and performance analytics in one studio. You get senior talent, not layers of account management.'),
('How fast can we launch?', 'Most clients see a full brand and demand system live within 4 to 6 weeks, depending on scope and approvals.'),
('Do you work with global teams?', 'Yes. Our delivery model supports distributed stakeholders across North America, Europe, and Asia with weekly leadership reporting.'),
('What does a typical engagement include?', 'Every engagement includes strategy, creative direction, a content system, and performance optimization tailored to your goals.');
```

### Services Data
```sql
INSERT INTO services (title, description, focus) VALUES
('Branding', 'Positioning, naming, and identity systems that communicate prestige with clarity.', 'Identity, tone, governance'),
('Photography', 'Editorial photography and art direction for elevated product storytelling.', 'Studio, lifestyle, launch'),
('Podcasts', 'Premium podcast production that builds authority and lasting engagement.', 'Production, distribution'),
('Design', 'Web, UI, and campaign design that feels effortless and performs across touchpoints.', 'Web, campaigns, assets'),
('Business Analysis', 'Market diagnostics and funnel audits that reveal high-leverage growth paths.', 'Insights, forecasting'),
('Competitor Analysis', 'Competitive intelligence that reveals whitespace and premium differentiation.', 'Category mapping'),
('Marketing Packages', 'Modular retainers that scale content, media, and optimization.', 'Launch + growth');
```

### Testimonials Data
```sql
INSERT INTO testimonials (name, title, quote) VALUES
('Amelia Ross', 'CMO, Eira Skincare', 'Skyfill translated our vision into a premium launch that felt effortless. Demand exceeded forecasts within weeks.'),
('Dylan Patel', 'Founder, Arcline', 'Their team delivered a level of polish and strategic clarity we had never experienced. Pipeline velocity nearly doubled.'),
('Harper Lin', 'Head of Brand, Noir Hotels', 'Skyfill captured the exact emotional tone while still delivering measurable bookings. They became an extension of our brand team.');
```

### Founder Data
```sql
INSERT INTO founder_profile (name, role, about, profile_image, profile_image_fit, qualities, work_images, contact_phone, contact_phone2, contact_email, contact_instagram_id)
VALUES (
  'PG Gireesh',
  'Founder, Studio Skyfill Creations',
  'PG Gireesh the founder of Studio Skyfill Creations, focused on building premium brands with clarity and purpose. His work blends design, storytelling, and strategy to create impactful digital experiences....',
  '/Founder details/pg-gireesh.jpeg',
  'contain',
  ARRAY['Creative Direction', 'Brand Strategy', 'Growth Marketing', 'Client Partnership', 'Production Excellence', 'Execution Speed', 'Data-Driven Decisions', 'Team Leadership', 'Long-Term Vision', 'Detail Focus'],
  ARRAY['/Founder details/work gallery 1.jpeg', '/Founder details/work galery 2.jpeg', '/Founder details/work gallery 3.png', '/Founder details/work gallery 4.png', '/Founder details/work gallery 5.png'],
  '+91 9345370090',
  '+91 95001 25369',
  'skyfillcreationspg@gmail.com',
  'gireesh__pg'
);
```

### Media Data
```sql
INSERT INTO media (background_videos, hero_video, hero_poster, about_image, testimonial_image, contact_image)
VALUES (
  '[{"label":"Ad Shoots","src":"/videos/shooting.mp4","poster":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"},{"label":"Podcast","src":"/videos/podcast.mp4","poster":"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80"}]'::JSONB,
  '/videos/podcast.mp4',
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
);
```

### Portfolio Data
```sql
INSERT INTO portfolio_projects (title, category, description, results, tags, accent, image, featured) VALUES
('Ad Shoot Preparation', 'Ad Shoots', 'Planning and setup for production-ready ad visuals with clear direction and brand consistency.', 'Production workflow optimized', ARRAY['Ad Shoots', 'Pre-Production', 'Direction'], 'from-sky-400/40 via-cyan-300/10 to-transparent', 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1400&q=80', true),
('Ad Shoot Direction', 'Ad Shoots', 'On-ground shoot supervision to capture clean, campaign-ready assets for digital promotions.', 'Stronger ad creative output', ARRAY['Ad Shoots', 'Creative Direction', 'Campaigns'], 'from-cyan-400/40 via-sky-300/10 to-transparent', 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80', false);
```

## 4. Enable Real-Time

In Supabase:
1. Go to your project
2. Go to **Database** → **Replication**
3. Enable replication for all tables

## 5. Test the Connection

Run `npm run dev` and check:
- Browser console for any Supabase connection errors
- The website should display data
- When you update data in Supabase, the page will automatically reload

## Notes

- The anon key is public and safe to expose in frontend code
- Real-time updates will automatically reload the page when data changes
- Fallback data is included in case of connection errors
- Make sure Row Level Security (RLS) is disabled for public read access, or configure proper policies
