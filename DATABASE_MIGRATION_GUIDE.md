# Database Migration Guide - Add service_type Column

## 📋 **Overview**

This guide will help you add the `service_type` column to your `contact_submissions` table in Supabase.

---

## 🎯 **What This Migration Does**

1. ✅ Adds `service_type` column (TEXT, nullable)
2. ✅ Adds column documentation
3. ✅ Creates index for better performance
4. ✅ (Optional) Adds validation constraint

---

## 🚀 **How to Execute the Migration**

### **Method 1: Supabase Dashboard (Recommended)**

1. **Open Supabase Dashboard:**
   - Go to https://supabase.com/dashboard
   - Select your project

2. **Navigate to SQL Editor:**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy and Paste the Script:**
   - Open: `database/migrations/add_service_type_column.sql`
   - Copy the entire script
   - Paste into the SQL Editor

4. **Execute the Script:**
   - Click "Run" or press `Ctrl+Enter` (Windows) / `Cmd+Enter` (Mac)
   - Wait for confirmation message

5. **Verify Success:**
   - You should see: "Success. No rows returned"
   - Run the verification query at the bottom of the script

---

### **Method 2: Supabase CLI**

If you have Supabase CLI installed:

```bash
# Navigate to your project directory
cd "e:\my docs\Freelance Project\RG Associates\RG Associate"

# Run the migration
supabase db push
```

---

### **Method 3: Direct SQL (Quick)**

**Minimum Required SQL:**

```sql
-- Just add the column (simplest approach)
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS service_type TEXT;

-- Create index (recommended)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_service_type 
ON contact_submissions(service_type);
```

---

## ✅ **Verification Steps**

### **Step 1: Check Column Exists**

Run this query in SQL Editor:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
AND column_name = 'service_type';
```

**Expected Result:**
```
column_name   | data_type | is_nullable
--------------+-----------+-------------
service_type  | text      | YES
```

---

### **Step 2: Test Insert**

Try inserting a test record:

```sql
INSERT INTO contact_submissions (
    first_name,
    last_name,
    email,
    phone,
    service_type,
    message
) VALUES (
    'Test',
    'User',
    'test@example.com',
    '1234567890',
    'consultation',
    'Test message'
);
```

**Expected:** Success message

---

### **Step 3: View Data**

Check if the column appears:

```sql
SELECT 
    first_name,
    last_name,
    service_type,
    created_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 5;
```

**Expected:** You should see the `service_type` column with values

---

## 📊 **Column Details**

### **Column Specifications:**
- **Name:** `service_type`
- **Type:** `TEXT`
- **Nullable:** `YES` (NULL allowed)
- **Default:** `NULL`
- **Index:** `idx_contact_submissions_service_type`

### **Valid Values:**
- `consultation` - Legal Consultation (Pan-India)
- `documentation` - Legal Documentation (Pan-India)
- `notice` - Legal Notice (Pan-India)
- `litigation` - Litigation (Jaipur Only)
- `research` - Legal Research (Pan-India)
- `title-search` - Title Search (Pan-India)
- `NULL` - No service type specified

---

## 🔧 **Troubleshooting**

### **Error: "column already exists"**
✅ **Solution:** The column is already added. You're good to go!

### **Error: "permission denied"**
❌ **Problem:** You don't have permission to alter the table
✅ **Solution:** Make sure you're logged in as the project owner in Supabase Dashboard

### **Error: "relation does not exist"**
❌ **Problem:** The `contact_submissions` table doesn't exist
✅ **Solution:** Create the table first (see below)

---

## 📝 **Create Table (If Needed)**

If the `contact_submissions` table doesn't exist yet, run this first:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    service_type TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_service_type ON contact_submissions(service_type);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (adjust as needed)
CREATE POLICY "Allow public inserts" ON contact_submissions
    FOR INSERT TO anon
    WITH CHECK (true);
```

---

## 🎯 **After Migration**

### **Test Your Forms:**

1. **Hero Form Test:**
   - Visit: `http://localhost:3000`
   - Fill and submit the hero form
   - Check Supabase table for new entry with `service_type`

2. **Contact Form Test:**
   - Visit: `http://localhost:3000/contact`
   - Fill and submit contact form
   - Check Supabase table for new entry

3. **Verify in Supabase:**
   - Go to Supabase Dashboard
   - Click "Table Editor"
   - Select `contact_submissions` table
   - Check the `service_type` column has values

---

## 📈 **Optional: Analytics Query**

See which services are most requested:

```sql
SELECT 
    service_type,
    COUNT(*) as request_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM contact_submissions
WHERE service_type IS NOT NULL
GROUP BY service_type
ORDER BY request_count DESC;
```

---

## ✅ **Migration Checklist**

- [ ] Opened Supabase Dashboard
- [ ] Navigated to SQL Editor
- [ ] Copied migration script
- [ ] Executed script successfully
- [ ] Verified column exists
- [ ] Tested hero form submission
- [ ] Tested contact form submission
- [ ] Checked data in Supabase table
- [ ] Confirmed service_type values are saving

---

## 🎉 **Success!**

Once all checklist items are complete, your database is ready to accept form submissions with service type tracking!

**Both forms will now save the selected service type to the database.** ✨

---

**Need Help?**
- Check Supabase logs for errors
- Verify your Supabase connection in `src/lib/supabase.ts`
- Make sure environment variables are set correctly
