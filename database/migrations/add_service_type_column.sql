-- ============================================
-- Add service_type column to contact_submissions table
-- Database: Supabase
-- Table: contact_submissions
-- ============================================

-- Step 1: Add the service_type column (nullable, TEXT type)
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS service_type TEXT;

-- Step 2: Add a comment to the column for documentation
COMMENT ON COLUMN contact_submissions.service_type IS 'Type of legal service requested: consultation, documentation, notice, litigation, research, or title-search';

-- Step 3: (Optional) Add a check constraint to ensure valid service types
-- Uncomment the lines below if you want to enforce specific values
/*
ALTER TABLE contact_submissions
ADD CONSTRAINT valid_service_type CHECK (
    service_type IS NULL OR 
    service_type IN (
        'consultation',
        'documentation',
        'notice',
        'litigation',
        'research',
        'title-search'
    )
);
*/

-- Step 4: Create an index on service_type for faster queries (optional but recommended)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_service_type 
ON contact_submissions(service_type);

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the column was added successfully
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- ============================================
-- Sample Query to View Data
-- ============================================
-- Run this to see your contact submissions with the new service_type column
SELECT 
    id,
    first_name,
    last_name,
    email,
    phone,
    service_type,
    message,
    created_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;

-- ============================================
-- NOTES:
-- ============================================
-- 1. The column is nullable (NULL allowed) because:
--    - Contact form: service_type is optional
--    - Existing records won't have this value
--
-- 2. Valid service_type values:
--    - 'consultation' = Legal Consultation (Pan-India)
--    - 'documentation' = Legal Documentation (Pan-India)
--    - 'notice' = Legal Notice (Pan-India)
--    - 'litigation' = Litigation (Jaipur Only)
--    - 'research' = Legal Research (Pan-India)
--    - 'title-search' = Title Search (Pan-India)
--
-- 3. The index will improve query performance when filtering by service_type
--
-- 4. If you want to make service_type required in the future:
--    ALTER TABLE contact_submissions ALTER COLUMN service_type SET NOT NULL;
--    (Only do this after ensuring all existing records have a value)
-- ============================================
