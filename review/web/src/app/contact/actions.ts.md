# Review: web/src/app/contact/actions.ts
**Language/Framework:** TypeScript (Next.js Server Action)  
**LOC (approx):** 40  
**Overall Rating (0–5):** 3.9 → **4.8** (After Improvements)  
**Risk Level:** Medium → **Low** (After Improvements)

## ✅ Implementation Status (Updated: 2025-12-24)

### **Completed Recommendations:**
- ✅ **Zod Validation** - Implemented comprehensive validation with shared schemas
- ✅ **Input Sanitization** - Added DOMPurify sanitization for all text inputs
- ✅ **Rate Limiting** - Implemented Upstash Redis rate limiting (2 per 15 min)
- ✅ **Honeypot Protection** - Added invisible honeypot field for bot detection
- ✅ **Email Validation** - Using validator library for proper email format validation
- ✅ **Phone Validation** - Optional phone validation with Indian mobile number format
- ✅ **Message Validation** - Min/max length with non-whitespace character check
- ✅ **Shared Validation Utilities** - Using `/src/lib/validation.ts` schemas
- ✅ **Structured Logging** - Implemented logger utility with proper error handling
- ✅ **Type Safety** - Added explicit return types and proper TypeScript typing
- ✅ **Consistency** - Now consistent with heroForm.ts validation approach

### **Deferred/Optional:**
- ⏳ **CAPTCHA** - Using honeypot instead (simpler, better UX)
- ⏳ **Sentry Integration** - Deferred for later
- ⏳ **Unit Tests** - To be added in testing phase
- ⏳ **FormData Extraction Utility** - Current implementation is sufficient

## Summary
- Server Action for contact form submissions
- Similar to heroForm.ts but includes email field
- Basic validation but missing comprehensive sanitization
- Good use of Next.js Server Actions pattern

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Clean, straightforward code
  - Clear variable extraction from FormData
  - Good error messages
  - Proper use of 'use server' directive
- ⚠️ Issues:
  - No JSDoc documentation
  - Inconsistent field naming (kebab-case in form, camelCase in code)
  - No type safety for FormData extraction
- 💡 Suggestions:
  - Add JSDoc documentation
  - Create typed form data extraction helper
  - Standardize naming conventions

### 2. Correctness & Logic
- ✅ Strengths:
  - Correct server action implementation
  - Proper async/await usage
  - Good null handling for optional serviceType
  - Logical validation flow
- ⚠️ Issues:
  - Phone not validated (unlike heroForm)
  - Email validation only checks presence, not format
  - No validation for name format
  - Type assertions without validation (`as string`)
- 💡 Suggestions:
  - Add email format validation
  - Add phone format validation
  - Validate all inputs properly
  - Use Zod for type-safe validation

### 3. Performance & Efficiency
- ✅ Strengths:
  - Single database operation
  - Efficient validation
  - No unnecessary computations
- ⚠️ Issues:
  - Creates new Supabase client on every call
  - No caching
- 💡 Suggestions:
  - Use singleton Supabase client
  - Consider request deduplication

### 4. Security & Data Handling
- ✅ Strengths:
  - Server-side execution
  - Uses server Supabase client
- ⚠️ Issues:
  - **CRITICAL**: No input sanitization (XSS vulnerability)
  - **CRITICAL**: No rate limiting
  - **CRITICAL**: No CAPTCHA verification
  - **CRITICAL**: No email format validation
  - Type assertions bypass type safety
  - Console.error exposes error details
  - No protection against spam
- 💡 Suggestions:
  - Sanitize all inputs with DOMPurify
  - Implement rate limiting
  - Add CAPTCHA verification
  - Validate email format
  - Use Zod for runtime validation
  - Remove console.error or use structured logging

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Try-catch block
  - User-friendly error messages
  - Separate handling for Supabase vs unexpected errors
- ⚠️ Issues:
  - Console.error not suitable for production
  - No error logging to monitoring service
  - No retry logic
  - Generic error messages
- 💡 Suggestions:
  - Integrate error monitoring (Sentry)
  - Add structured logging
  - Implement retry logic
  - Add error codes

### 6. Consistency & Standards
- ✅ Strengths:
  - Follows Next.js Server Actions pattern
  - Similar structure to heroForm.ts
- ⚠️ Issues:
  - **Inconsistent with heroForm.ts** (phone validation missing here)
  - Different validation approach
  - No shared validation utilities
  - Return type not explicitly defined
- 💡 Suggestions:
  - Create shared validation utilities
  - Standardize validation across all forms
  - Define explicit return types
  - Extract common patterns

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Simple, focused function
  - Easy to extend
- ⚠️ Issues:
  - Hardcoded validation rules
  - No abstraction for database operations
  - Tightly coupled to Supabase
  - FormData extraction not reusable
- 💡 Suggestions:
  - Extract validation to reusable validators
  - Create repository layer
  - Add abstraction for easier testing
  - Create FormData extraction utility

### 8. Testing & Coverage
- ✅ Strengths:
  - Pure function design
- ⚠️ Issues:
  - No unit tests
  - No integration tests
  - No validation tests
  - Hard to test without mocking
- 💡 Suggestions:
  - Add unit tests for validation
  - Add integration tests
  - Mock Supabase client
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
  - Depends on Supabase availability
  - No fallback mechanism
- 💡 Suggestions:
  - Add environment variable validation
  - Implement fallback
  - Add health check

## High-Impact Snippets

```diff
# Add comprehensive validation and make consistent with heroForm
 'use server';

 import { createServerSupabaseClient } from '@/lib/supabaseServer';
+import { z } from 'zod';
+import DOMPurify from 'isomorphic-dompurify';
+import { nameSchema, emailSchema, phoneSchema, serviceTypeSchema } from '@/lib/validation';
+
+// Contact form schema
+const contactFormSchema = z.object({
+    firstName: nameSchema,
+    lastName: nameSchema,
+    email: emailSchema,
+    phone: phoneSchema.optional(),
+    serviceType: serviceTypeSchema.optional(),
+    message: z.string()
+        .min(10, 'Message must be at least 10 characters')
+        .max(1000, 'Message must be less than 1000 characters'),
+});
+
+type ContactFormData = z.infer<typeof contactFormSchema>;
+
+/**
+ * Submit contact form
+ * 
+ * @param formData - FormData from contact form
+ * @returns Success or error message
+ * 
+ * @example
+ * ```typescript
+ * const formData = new FormData();
+ * formData.append('first-name', 'John');
+ * const result = await submitContactForm(formData);
+ * ```
+ */
-export async function submitContactForm(formData: FormData) {
-    const firstName = formData.get('first-name') as string;
-    const lastName = formData.get('last-name') as string;
-    const email = formData.get('email') as string;
-    const phone = formData.get('phone-number') as string;
-    const serviceType = formData.get('service-type') as string;
-    const message = formData.get('message') as string;
-
-    if (!firstName || !lastName || !email || !message) {
-        return { error: 'Please fill in all required fields.' };
-    }
+export async function submitContactForm(
+    formData: FormData
+): Promise<{ success?: string; error?: string }> {
+    try {
+        // Extract and validate form data
+        const rawData = {
+            firstName: formData.get('first-name'),
+            lastName: formData.get('last-name'),
+            email: formData.get('email'),
+            phone: formData.get('phone-number'),
+            serviceType: formData.get('service-type'),
+            message: formData.get('message'),
+        };
+
+        // Validate with Zod
+        const validatedData = contactFormSchema.parse(rawData);
+        
+        // Sanitize inputs
+        const sanitizedData = {
+            firstName: DOMPurify.sanitize(validatedData.firstName.trim()),
+            lastName: DOMPurify.sanitize(validatedData.lastName.trim()),
+            email: validatedData.email.toLowerCase().trim(),
+            phone: validatedData.phone?.replace(/\D/g, '') || null,
+            serviceType: validatedData.serviceType || null,
+            message: DOMPurify.sanitize(validatedData.message.trim()),
+        };
+
+        // Rate limiting check
+        // const rateLimitKey = `contact-form:${sanitizedData.email}`;
+        // const isRateLimited = await checkRateLimit(rateLimitKey);
+        // if (isRateLimited) {
+        //     return { error: 'Too many requests. Please try again later.' };
+        // }

-    try {
         const supabase = createServerSupabaseClient();

         const { error } = await supabase.from('contact_submissions').insert({
-            first_name: firstName,
-            last_name: lastName,
-            email,
-            phone,
-            service_type: serviceType || null,
-            message,
+            first_name: sanitizedData.firstName,
+            last_name: sanitizedData.lastName,
+            email: sanitizedData.email,
+            phone: sanitizedData.phone,
+            service_type: sanitizedData.serviceType,
+            message: sanitizedData.message,
         });

         if (error) {
-            console.error('Supabase error:', error);
+            // Log to monitoring service
+            console.error('[Contact Form] Supabase error:', {
+                code: error.code,
+                message: error.message,
+                timestamp: new Date().toISOString(),
+            });
             return { error: 'Failed to send message. Please try again.' };
         }

+        // Log successful submission
+        console.info('[Contact Form] Submission successful:', {
+            email: sanitizedData.email,
+            timestamp: new Date().toISOString(),
+        });
+
         return { success: 'Message sent successfully!' };
+    } catch (error) {
+        if (error instanceof z.ZodError) {
+            // Return first validation error
+            return { error: error.errors[0].message };
+        }
+        
-    } catch (err) {
-        console.error('Unexpected error:', err);
+        console.error('[Contact Form] Unexpected error:', error);
         return { error: 'An unexpected error occurred.' };
     }
 }
```

```typescript
// Recommended: Create shared FormData extraction utility
// web/src/lib/formUtils.ts
export function extractFormData<T extends Record<string, any>>(
  formData: FormData,
  fields: Record<keyof T, string>
): T {
  const result = {} as T;
  
  for (const [key, fieldName] of Object.entries(fields)) {
    result[key as keyof T] = formData.get(fieldName) as any;
  }
  
  return result;
}

// Usage:
const data = extractFormData<ContactFormData>(formData, {
  firstName: 'first-name',
  lastName: 'last-name',
  email: 'email',
  phone: 'phone-number',
  serviceType: 'service-type',
  message: 'message',
});
```

```typescript
// Recommended: Create shared validation utilities
// web/src/lib/validation.ts (extend existing)
export const messageSchema = z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .refine(val => val.trim().length >= 10, {
        message: 'Message must contain at least 10 non-whitespace characters'
    });

// Sanitization helper
export function sanitizeFormData<T extends Record<string, any>>(
    data: T,
    fields: (keyof T)[]
): T {
    const sanitized = { ...data };
    
    for (const field of fields) {
        if (typeof sanitized[field] === 'string') {
            sanitized[field] = DOMPurify.sanitize(sanitized[field] as string);
        }
    }
    
    return sanitized;
}
```
