-- ============================================
-- Make email column nullable in contact_submissions table
-- This allows hero form submissions without email
-- ============================================

-- Remove NOT NULL constraint from email column
ALTER TABLE contact_submissions 
ALTER COLUMN email DROP NOT NULL;

-- Add a comment explaining why email is nullable
COMMENT ON COLUMN contact_submissions.email IS 'Email address (optional - hero form submissions may not have email)';

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the column is now nullable
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
AND column_name = 'email';

-- Expected result: is_nullable should be 'YES'

-- ============================================
-- Test Insert (Hero Form Simulation)
-- ============================================
-- This should now work without error
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
    NULL,  -- NULL email (from hero form)
    '9309212401',
    'consultation',
    'Quick consultation request via homepage for consultation'
);

-- ============================================
-- NOTES:
-- ============================================
-- 1. Email is now optional (nullable)
-- 2. Hero form submissions will have NULL email
-- 3. Contact form submissions will have email
-- 4. This allows both forms to use the same table
-- ============================================
