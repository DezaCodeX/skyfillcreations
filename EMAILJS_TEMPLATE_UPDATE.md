# EmailJS Template Setup - Updated Version

## Step 1: Go to EmailJS Dashboard

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Log in to your account
3. Click on **Email Templates** (left sidebar)
4. Find your existing template and click **Edit** (or create a new one)

---

## Step 2: Update the Template Content

Replace the entire template with this professional formatted version:

```
New Enquiry from Skyfill Creations Website
========================================

CLIENT INFORMATION:
─────────────────────
Name: {{full_name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}

PROJECT SUMMARY:
─────────────────────
{{message}}

SUBMITTED ON:
─────────────────────
{{time}}

========================================
This enquiry has been automatically recorded in our database.
We'll respond within 48 hours.

Best regards,
Skyfill Creations Team
```

---

## Step 3: Verify Template Variables

Make sure these variables are used in your template:
- `{{full_name}}` - Customer's name
- `{{email}}` - Customer's email
- `{{phone}}` - Customer's phone number ✨ NEW
- `{{company}}` - Customer's company name
- `{{message}}` - Project summary/details
- `{{time}}` - Submission timestamp

---

## Step 4: Save the Template

1. Click **Save** button
2. Make note of your:
   - **Service ID** (you already have this)
   - **Template ID** (you already have this)
   - **Public Key** (you already have this)

---

## Step 5: Update Supabase Database

Run this SQL in your Supabase SQL Editor:

```sql
ALTER TABLE enquiries 
ADD COLUMN IF NOT EXISTS phone TEXT;
```

Or use the file: `UPDATE_ENQUIRIES_ADD_PHONE.sql`

---

## Step 6: Test the Form

1. Go to **Contact Page** on your website
2. Fill in all fields including the new **Phone** field
3. Click **Send Inquiry**
4. Check:
   - ✅ Toast notification appears
   - ✅ Email received with all details
   - ✅ Data in Supabase dashboard

---

## Example Email Output

When someone submits the form, they'll receive an email like:

```
New Enquiry from Skyfill Creations Website
========================================

CLIENT INFORMATION:
─────────────────────
Name: Avery Johnson
Email: hello@brand.com
Phone: +1 (555) 123-4567
Company: Brand Co.

PROJECT SUMMARY:
─────────────────────
We need a complete brand redesign with social media content strategy for our Q3 launch.

SUBMITTED ON:
─────────────────────
5/5/2026, 1:54 PM

========================================
```

---

## What Changed

✨ **Added to Form:**
- Phone number input field (required)
- Better organized layout (2-column grid)

✨ **Added to Email:**
- Phone number in client info section
- Professional formatting with sections
- Better visual hierarchy

✨ **Added to Database:**
- Phone column in enquiries table

---

## Files Updated

- `src/components/Contact.jsx` - Added phone field
- `UPDATE_ENQUIRIES_ADD_PHONE.sql` - Database migration
- This guide file

**Next Action:** Run the SQL query and update your EmailJS template!

---
