# Review: web/src/app/actions/heroForm.ts
**Language/Framework:** TypeScript (Next.js Server Action)  
**LOC (approx):** 46  
**Overall Rating (0–5):** 3.8 → **4.8** (After Improvements)  
**Risk Level:** Medium → **Low** (After Improvements)

## ✅ Implementation Status (Updated: 2025-12-24)

### **Completed Recommendations:**
- ✅ **Zod Validation** - Implemented comprehensive validation with Zod schemas
- ✅ **Input Sanitization** - Added DOMPurify sanitization for all text inputs
- ✅ **Rate Limiting** - Implemented Upstash Redis rate limiting (3 per 10 min)
- ✅ **Honeypot Protection** - Added invisible honeypot field for bot detection
- ✅ **Shared Validation Utilities** - Created `/src/lib/validation.ts` with reusable schemas
- ✅ **Structured Logging** - Implemented logger utility with proper error handling
- ✅ **Type Safety** - Added explicit return types and proper TypeScript typing
- ✅ **Phone Validation** - Using validator library for Indian mobile numbers
- ✅ **Service Type Validation** - Enum validation with all allowed service types

### **Deferred/Optional:**
- ⏳ **CAPTCHA** - Using honeypot instead (simpler, better UX)
- ⏳ **Sentry Integration** - Deferred for later
- ⏳ **Unit Tests** - To be added in testing phase
- ⏳ **Repository Layer** - Current implementation is sufficient

## Summary
- Server Action for handling hero section form submissions
- Good use of Next.js Server Actions pattern
- Basic validation but missing comprehensive input sanitization
- Proper error handling with user-friendly messages

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Clean, focused function
  - Clear variable naming
  - Good separation of concerns
  - Proper use of 'use server' directive
- ⚠️ Issues:
  - No JSDoc documentation
  - Magic numbers (10 for phone length)
  - Hardcoded error messages
- 💡 Suggestions:
  - Add JSDoc with parameter descriptions
  - Extract validation rules to constants
  - Create error message constants

### 2. Correctness & Logic
- ✅ Strengths:
  - Correct server action implementation
  - Proper async/await usage
  - Good null handling for email field
  - Logical validation flow
- ⚠️ Issues:
  - Phone validation too simplistic (only checks length)
  - No validation for name format
  - No validation for service type
  - Message generation could be more robust
- 💡 Suggestions:
  - Use proper phone number validation library
  - Validate name format (no numbers, special chars)
  - Validate service type against allowed values
  - Add more descriptive message generation

### 3. Performance & Efficiency
- ✅ Strengths:
  - Single database operation
  - Efficient validation
  - No unnecessary computations
- ⚠️ Issues:
  - Creates new Supabase client on every call
  - No caching or optimization
- 💡 Suggestions:
  - Use singleton Supabase client
  - Consider batching if multiple submissions

### 4. Security & Data Handling
- ✅ Strengths:
  - Server-side execution (not exposed to client)
  - Uses server Supabase client
  - Email set to null (good for privacy)
- ⚠️ Issues:
  - **CRITICAL**: No input sanitization (XSS vulnerability)
  - **CRITICAL**: No rate limiting
  - **CRITICAL**: No CAPTCHA verification
  - No validation of data types
  - Phone number stored without encryption
  - Console.error exposes error details
- 💡 Suggestions:
  - Sanitize all inputs with DOMPurify
  - Implement rate limiting per IP/session
  - Add CAPTCHA verification
  - Validate data types with Zod
  - Consider encrypting sensitive data
  - Use structured logging instead of console.error

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Try-catch block for error handling
  - User-friendly error messages
  - Separate handling for Supabase vs unexpected errors
  - Returns structured response
- ⚠️ Issues:
  - Console.error not suitable for production
  - No error logging to monitoring service
  - No retry logic for transient failures
  - Generic error messages don't help debugging
- 💡 Suggestions:
  - Integrate error monitoring (Sentry)
  - Add structured logging
  - Implement retry logic for database errors
  - Add error codes for better debugging

### 6. Consistency & Standards
- ✅ Strengths:
  - Follows Next.js Server Actions pattern
  - Consistent with contact form action
  - Standard TypeScript patterns
- ⚠️ Issues:
  - Inconsistent naming (camelCase vs snake_case)
  - Return type not explicitly defined
  - No shared validation utilities
- 💡 Suggestions:
  - Create shared validation utilities
  - Define explicit return type
  - Standardize naming conventions

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Simple, focused function
  - Easy to extend
- ⚠️ Issues:
  - Hardcoded validation rules
  - No abstraction for database operations
  - Tightly coupled to Supabase
- 💡 Suggestions:
  - Extract validation to reusable validators
  - Create repository layer for database operations
  - Add abstraction for easier testing and provider switching

### 8. Testing & Coverage
- ✅ Strengths:
  - Pure function design makes testing easier
- ⚠️ Issues:
  - No unit tests
  - No integration tests
  - No validation tests
  - Hard to test without mocking Supabase
- 💡 Suggestions:
  - Add unit tests for validation logic
  - Add integration tests with test database
  - Mock Supabase client for testing
  - Test all error scenarios

### 9. Documentation & Comments
- ✅ Strengths:
  - Code is relatively self-documenting
- ⚠️ Issues:
  - No JSDoc documentation
  - No parameter documentation
  - No return type documentation
  - No usage examples
- 💡 Suggestions:
  - Add comprehensive JSDoc
  - Document expected input format
  - Document return type structure
  - Add usage examples

### 10. Dependencies & Environment
- ✅ Strengths:
  - Uses server-side Supabase client
  - Proper Next.js Server Action
- ⚠️ Issues:
  - No validation of environment variables
  - Depends on Supabase being available
  - No fallback mechanism
- 💡 Suggestions:
  - Add environment variable validation
  - Implement fallback for database unavailability
  - Add health check before operations

## High-Impact Snippets

```diff
# Add comprehensive validation and sanitization
 'use server';

 import { createServerSupabaseClient } from '@/lib/supabaseServer';
+import { z } from 'zod';
+import DOMPurify from 'isomorphic-dompurify';
+import validator from 'validator';
+
+// Validation schema
+const heroFormSchema = z.object({
+    firstName: z.string()
+        .min(2, 'First name must be at least 2 characters')
+        .max(50, 'First name must be less than 50 characters')
+        .regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
+    lastName: z.string()
+        .min(2, 'Last name must be at least 2 characters')
+        .max(50, 'Last name must be less than 50 characters')
+        .regex(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
+    phone: z.string()
+        .refine(val => validator.isMobilePhone(val, 'en-IN'), {
+            message: 'Please enter a valid Indian mobile number'
+        }),
+    serviceType: z.enum([
+        'consultation',
+        'documentation',
+        'notice',
+        'litigation',
+        'research',
+        'title-search'
+    ], { errorMap: () => ({ message: 'Please select a valid service type' }) }),
+});
+
+type HeroFormData = z.infer<typeof heroFormSchema>;
+
+/**
+ * Submit hero section form
+ * 
+ * @param formData - Form data from hero section
+ * @returns Success or error message
+ * 
+ * @example
+ * ```typescript
+ * const result = await submitHeroForm({
+ *   firstName: 'John',
+ *   lastName: 'Doe',
+ *   phone: '9876543210',
+ *   serviceType: 'consultation'
+ * });
+ * ```
+ */
-export async function submitHeroForm(formData: {
-    firstName: string;
-    lastName: string;
-    phone: string;
-    serviceType: string;
-}) {
-    const { firstName, lastName, phone, serviceType } = formData;
-
-    // Validation
-    if (!firstName || !lastName || !phone || !serviceType) {
-        return { error: 'Please fill in all required fields.' };
-    }
-
-    // Basic phone validation
-    if (phone.length < 10) {
-        return { error: 'Please enter a valid phone number.' };
-    }
+export async function submitHeroForm(
+    formData: HeroFormData
+): Promise<{ success?: string; error?: string }> {
+    try {
+        // Validate input
+        const validatedData = heroFormSchema.parse(formData);
+        
+        // Sanitize inputs
+        const sanitizedData = {
+            firstName: DOMPurify.sanitize(validatedData.firstName.trim()),
+            lastName: DOMPurify.sanitize(validatedData.lastName.trim()),
+            phone: validatedData.phone.replace(/\D/g, ''), // Remove non-digits
+            serviceType: validatedData.serviceType,
+        };
+
+        // Rate limiting check (implement with Redis or similar)
+        // const rateLimitKey = `hero-form:${sanitizedData.phone}`;
+        // const isRateLimited = await checkRateLimit(rateLimitKey);
+        // if (isRateLimited) {
+        //     return { error: 'Too many requests. Please try again later.' };
+        // }

-    try {
         const supabase = createServerSupabaseClient();

         const { error } = await supabase.from('contact_submissions').insert({
-            first_name: firstName,
-            last_name: lastName,
+            first_name: sanitizedData.firstName,
+            last_name: sanitizedData.lastName,
             email: null, // Hero form doesn't collect email
-            phone,
-            service_type: serviceType,
-            message: `Quick consultation request via homepage for ${serviceType}`,
+            phone: sanitizedData.phone,
+            service_type: sanitizedData.serviceType,
+            message: `Quick consultation request via homepage for ${sanitizedData.serviceType}`,
         });

         if (error) {
-            console.error('Supabase error:', error);
+            // Log to monitoring service
+            // Sentry.captureException(error, { extra: { formData: sanitizedData } });
+            console.error('[Hero Form] Supabase error:', {
+                code: error.code,
+                message: error.message,
+                timestamp: new Date().toISOString(),
+            });
             return { error: 'Failed to submit request. Please try again or call us directly.' };
         }

+        // Log successful submission
+        console.info('[Hero Form] Submission successful:', {
+            serviceType: sanitizedData.serviceType,
+            timestamp: new Date().toISOString(),
+        });
+
         return { success: 'Request submitted successfully! We will contact you within 24-48 hours.' };
+    } catch (error) {
+        if (error instanceof z.ZodError) {
+            // Return first validation error
+            return { error: error.errors[0].message };
+        }
+        
-    } catch (err) {
-        console.error('Unexpected error:', err);
+        // Log unexpected errors
+        console.error('[Hero Form] Unexpected error:', error);
+        // Sentry.captureException(error);
+        
         return { error: 'An unexpected error occurred. Please try calling us directly.' };
     }
 }
```

```typescript
// Recommended: Create shared validation utilities (src/lib/validation.ts)
import { z } from 'zod';
import validator from 'validator';

export const nameSchema = z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters');

export const phoneSchema = z.string()
    .refine(val => validator.isMobilePhone(val, 'en-IN'), {
        message: 'Please enter a valid Indian mobile number'
    });

export const emailSchema = z.string()
    .email('Please enter a valid email address')
    .refine(val => validator.isEmail(val), {
        message: 'Please enter a valid email address'
    });

export const serviceTypeSchema = z.enum([
    'consultation',
    'documentation',
    'notice',
    'litigation',
    'research',
    'title-search'
]);

// Sanitization helper
export function sanitizeString(input: string): string {
    return DOMPurify.sanitize(input.trim());
}
```
