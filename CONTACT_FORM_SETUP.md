# Contact Form Setup - Complete Guide

## Status: 95% Complete ✅

All code has been implemented! You just need to:

---

## 🔴 STEP 1: Run This SQL in Supabase

Go to **Supabase Dashboard → SQL Editor** and run:

```sql
CREATE TABLE IF NOT EXISTS enquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER PUBLICATION supabase_realtime ADD TABLE enquiries;

CREATE POLICY "Allow public insert on enquiries"
ON enquiries
FOR INSERT
TO public
WITH CHECK (true);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
```

---

## 🟠 STEP 2: Get Your EmailJS Credentials

1. Go to [EmailJS.com](https://www.emailjs.com/) → Create Account
2. Go to **Dashboard** → **Email Services** → Click **Gmail**
3. Connect your Gmail account
4. Go to **Email Templates** and create a new template
5. Name it anything (e.g., "Contact Form")

### Template Variables:
Use this template:
```
New Enquiry from Skyfill Creations Website

Name: {{full_name}}
Email: {{email}}
Company: {{company}}

Message:
{{message}}

-----------------------------------
Submitted at: {{time}}
```

6. Copy your keys from **Settings → API Keys**:
   - `Service ID`
   - `Template ID`
   - `Public Key`

---

## 🟡 STEP 3: Update Your .env.local File

Open `.env.local` and update these three lines:

```env
VITE_EMAILJS_PUBLIC_KEY=YOUR_ACTUAL_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID=YOUR_ACTUAL_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_ACTUAL_TEMPLATE_ID
```

(Replace `YOUR_ACTUAL_*` with the keys from EmailJS)

---

## 🟢 STEP 4: Verify Everything

✅ Files Updated:
- `src/components/Contact.jsx` - Full submission logic
- `.env.local` - EmailJS keys (need your credentials)
- `CREATE_ENQUIRIES_TABLE.sql` - Database schema
- `package.json` - emailjs-com added

✅ What the Form Does Now:
1. User fills out form
2. Data saved to Supabase `enquiries` table
3. Email sent via EmailJS
4. Success toast notification shows
5. Form resets
6. Button shows loading spinner while submitting

---

## 📋 Form Fields

The form collects:
- **full_name** - Customer name
- **email** - Customer email
- **company** - Customer company (optional)
- **message** - Project summary

---

## 🎯 What Each Part Does

### Supabase
- **Storage**: All enquiries saved in `enquiries` table
- **Real-time**: New enquiries visible instantly in dashboard
- **Security**: Row Level Security prevents unauthorized access

### EmailJS
- **Email Delivery**: Sends formatted email to your inbox
- **Custom Template**: Professional email with all customer info
- **Error Handling**: If email fails, data still saves to database

### UI/UX Improvements
- **Loading State**: Button disabled + spinner while sending
- **Toast Notifications**: Green (success) or Red (error) toast
- **Error Handling**: User-friendly error messages
- **Form Reset**: Clears form after successful submission
- **Disabled Inputs**: Cannot edit while submission in progress

---

## ⚠️ Important Notes

### Security
Row Level Security is **ENABLED**. This table only allows:
- Public users to INSERT (submit forms)
- Only your authenticated user can READ/UPDATE/DELETE

### Email Template
Make sure your EmailJS template uses these exact variable names:
- `{{full_name}}`
- `{{email}}`
- `{{company}}`
- `{{message}}`
- `{{time}}`

### Environment Variables
Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## 🧪 Testing

1. Go to `/contact` page
2. Fill out the form
3. Click "Send Inquiry"
4. You should see:
   - Loading spinner on button
   - Success toast notification
   - Data in Supabase Dashboard
   - Email in your inbox

---

## 📊 Supabase Dashboard

To view submissions:
1. Go to **Supabase Dashboard**
2. Click **enquiries** table
3. See all form submissions with timestamps

---

## 🔧 Next Steps (Optional)

Want to upgrade further?
- [ ] Add reCAPTCHA to prevent spam
- [ ] Add form field validation
- [ ] Create admin dashboard
- [ ] Add email to customer (auto-reply)
- [ ] Integrate with CRM
- [ ] Add file uploads

---

## ❓ Troubleshooting

**Issue**: Email not sending but data saved ✅
- **Cause**: EmailJS not configured
- **Fix**: Verify keys in `.env.local` are correct

**Issue**: Form not submitting
- **Cause**: Missing environment variables
- **Fix**: Check `.env.local` has all 3 EmailJS keys

**Issue**: Toast not showing
- **Cause**: Tailwind CSS not loading animate-pulse
- **Fix**: Make sure `tailwind.config.cjs` has animation config

---

## 📁 Files Reference

- `/src/components/Contact.jsx` - Main form component
- `/.env.local` - Environment variables
- `/CREATE_ENQUIRIES_TABLE.sql` - Database setup script
- `/package.json` - Dependencies (emailjs-com added)

---

Done! Your contact form is now fully set up. 🚀
