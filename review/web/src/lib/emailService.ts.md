# Review: web/src/lib/emailService.ts
**Language/Framework:** TypeScript (EmailJS Integration)  
**LOC (approx):** 70  
**Overall Rating (0–5):** 3.2  
**Risk Level:** High

## Summary
- EmailJS integration for sending email notifications from client-side
- Handles form submissions from hero and contact forms
- **CRITICAL**: Client-side email sending exposes API keys and is vulnerable to abuse
- Good error handling and parameter formatting

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Clean, well-structured code
  - Good use of TypeScript interfaces
  - Clear function naming and parameter handling
  - Helpful console logging with emojis for debugging
- ⚠️ Issues:
  - Magic strings for form types ('hero' | 'contact')
  - Hardcoded fallback values ('Not provided', 'General Inquiry')
  - Console.log statements should be removed in production
- 💡 Suggestions:
  - Create enum for form types: `enum FormType { Hero = 'hero', Contact = 'contact' }`
  - Extract fallback values to constants
  - Use proper logging library (e.g., winston, pino) instead of console.log

### 2. Correctness & Logic
- ✅ Strengths:
  - Proper null handling for optional email field
  - Correct async/await usage
  - Good timestamp formatting with Indian timezone
  - Proper service type formatting (kebab-case to Title Case)
- ⚠️ Issues:
  - EmailJS init called at module level (side effect)
  - Service type formatting assumes kebab-case input (no validation)
  - Return type could be more specific (success/error union type)
  - No validation of email format when provided
- 💡 Suggestions:
  - Move emailjs.init() to lazy initialization
  - Add input validation for service_type
  - Use discriminated union for return type
  - Validate email format when not null

### 3. Performance & Efficiency
- ✅ Strengths:
  - Single email send operation (no loops)
  - Efficient string manipulation
- ⚠️ Issues:
  - Module-level initialization may cause unnecessary overhead
  - No request debouncing or rate limiting
  - Creating new Date() and formatting on every call
  - No caching of formatted data
- 💡 Suggestions:
  - Implement rate limiting to prevent spam
  - Add request debouncing on client side
  - Consider batching emails if multiple submissions occur
  - Cache timezone formatter

### 4. Security & Data Handling
- ✅ Strengths:
  - Uses environment variables for configuration
  - Sanitizes null values
- ⚠️ Issues:
  - **CRITICAL**: Client-side email sending exposes EmailJS keys to browser
  - **CRITICAL**: No rate limiting - vulnerable to spam/abuse
  - **CRITICAL**: No CAPTCHA or bot protection
  - **CRITICAL**: No input sanitization (XSS risk in email content)
  - **CRITICAL**: Phone numbers and personal data sent from client without encryption
  - No validation of data before sending
  - Console.log exposes user data in browser console
- 💡 Suggestions:
  - **URGENT**: Move to server-side email sending (API route)
  - Implement CAPTCHA (reCAPTCHA, hCaptcha)
  - Add rate limiting (per IP, per session)
  - Sanitize all inputs to prevent XSS
  - Remove console.log or use environment-based logging
  - Implement server-side validation

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Try-catch block for error handling
  - Returns structured error response
  - Handles EmailJS response status
  - Type-safe error handling with instanceof check
- ⚠️ Issues:
  - Only checks for status 200 (what about 201, 202?)
  - Error messages not user-friendly
  - No retry logic for transient failures
  - No error logging to monitoring service
  - Console.error in production is not sufficient
- 💡 Suggestions:
  - Check for 2xx status codes: `response.status >= 200 && response.status < 300`
  - Add user-friendly error messages
  - Implement exponential backoff retry logic
  - Integrate error tracking (Sentry, LogRocket)
  - Add fallback email method if EmailJS fails

### 6. Consistency & Standards
- ✅ Strengths:
  - Consistent naming conventions
  - Follows TypeScript best practices
  - Consistent error handling pattern
- ⚠️ Issues:
  - Inconsistent with server-side approach (should use API routes)
  - Parameter naming inconsistent (snake_case in interface, camelCase in usage)
  - Return type structure inconsistent with typical API responses
- 💡 Suggestions:
  - Standardize on camelCase for TypeScript interfaces
  - Use consistent API response format across application
  - Align with Next.js best practices (server actions)

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Interface-based design allows easy extension
  - Modular function design
- ⚠️ Issues:
  - Hardcoded to EmailJS (vendor lock-in)
  - No abstraction for email provider
  - Single template ID (not extensible for different email types)
  - No support for attachments or HTML emails
- 💡 Suggestions:
  - Create email provider abstraction layer
  - Support multiple templates based on form type
  - Add configuration for different email types
  - Consider using Resend, SendGrid, or AWS SES for production

### 8. Testing & Coverage
- ✅ Strengths:
  - Pure function design makes testing easier
- ⚠️ Issues:
  - No unit tests
  - No mock for EmailJS
  - No integration tests
  - Console.log makes testing harder
  - Module-level side effect (emailjs.init) complicates testing
- 💡 Suggestions:
  - Add unit tests with mocked EmailJS
  - Create integration tests with test email account
  - Mock emailjs.send for testing
  - Add test for all error scenarios
  - Test timezone formatting

### 9. Documentation & Comments
- ✅ Strengths:
  - Good JSDoc for main function
  - Clear parameter documentation
  - Return type documented
- ⚠️ Issues:
  - No file-level documentation
  - No security warnings in comments
  - No usage examples
  - Missing documentation for EmailParams interface
  - No explanation of why client-side email sending is used
- 💡 Suggestions:
  - Add file header with security warnings
  - Document EmailParams interface with JSDoc
  - Add usage examples in comments
  - Document limitations and security implications
  - Add migration path to server-side sending

### 10. Dependencies & Environment
- ✅ Strengths:
  - Uses official EmailJS library
  - Proper environment variable usage
- ⚠️ Issues:
  - **CRITICAL**: EmailJS config not validated (could be empty strings)
  - Dependency on client-side library
  - No fallback if EmailJS is down
  - No version pinning in imports
- 💡 Suggestions:
  - Validate EmailJS config at initialization
  - Add fallback email provider
  - Consider server-side email libraries (Nodemailer, Resend)
  - Add health check for EmailJS service

## High-Impact Snippets

```diff
# CRITICAL: Move to server-side email sending
-import emailjs from '@emailjs/browser';
-import { EMAILJS_CONFIG } from './emailConfig';
-
-// Initialize EmailJS with your public key
-emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

+// This file should be moved to app/api/send-email/route.ts
+// Use server-side email sending instead of client-side

+import { Resend } from 'resend';
+
+const resend = new Resend(process.env.RESEND_API_KEY);

 interface EmailParams {
-    first_name: string;
-    last_name: string;
-    email: string | null;
-    phone: string;
-    service_type: string;
-    message: string;
-    form_type: 'hero' | 'contact';
+  firstName: string;
+  lastName: string;
+  email: string | null;
+  phone: string;
+  serviceType: string;
+  message: string;
+  formType: 'hero' | 'contact';
 }
```

```diff
# Add input validation and sanitization
+import DOMPurify from 'isomorphic-dompurify';
+import validator from 'validator';
+
+/**
+ * Validate and sanitize email parameters
+ */
+function validateAndSanitize(params: EmailParams): { valid: boolean; errors: string[] } {
+  const errors: string[] = [];
+
+  // Validate names
+  if (!params.firstName || params.firstName.length < 2) {
+    errors.push('First name must be at least 2 characters');
+  }
+  if (!params.lastName || params.lastName.length < 2) {
+    errors.push('Last name must be at least 2 characters');
+  }
+
+  // Validate email if provided
+  if (params.email && !validator.isEmail(params.email)) {
+    errors.push('Invalid email format');
+  }
+
+  // Validate phone
+  if (!validator.isMobilePhone(params.phone, 'en-IN')) {
+    errors.push('Invalid Indian phone number');
+  }
+
+  // Sanitize message
+  params.message = DOMPurify.sanitize(params.message);
+
+  return { valid: errors.length === 0, errors };
+}

 export const sendEmailNotification = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
     try {
+        // Validate inputs
+        const validation = validateAndSanitize(params);
+        if (!validation.valid) {
+            return { success: false, error: validation.errors.join(', ') };
+        }
+
+        // Rate limiting check (implement with Redis or in-memory store)
+        const rateLimitKey = `email:${params.phone}`;
+        // ... rate limiting logic ...
```

```diff
# Improve error handling and logging
-        console.log('📧 Sending email with params:', emailParams);
+        // Use environment-aware logging
+        if (process.env.NODE_ENV === 'development') {
+            console.log('📧 Sending email with params:', emailParams);
+        }

-        if (response.status === 200) {
-            console.log('✅ Email sent successfully:', response);
+        if (response.status >= 200 && response.status < 300) {
+            if (process.env.NODE_ENV === 'development') {
+                console.log('✅ Email sent successfully:', response);
+            }
+            // Log to monitoring service
+            // await logEvent('email_sent', { formType: params.formType });
             return { success: true };
         } else {
-            console.error('❌ Email send failed:', response);
+            console.error('❌ Email send failed:', { status: response.status, text: response.text });
+            // Log to error tracking service (Sentry)
+            // Sentry.captureException(new Error('Email send failed'), { extra: { response } });
-            return { success: false, error: 'Failed to send email' };
+            return { success: false, error: 'Failed to send email. Please try again or contact us directly.' };
         }
     } catch (error) {
         console.error('❌ EmailJS Error:', error);
+        // Log to error tracking
+        // Sentry.captureException(error);
         return {
             success: false,
-            error: error instanceof Error ? error.message : 'Unknown error occurred'
+            error: 'Unable to send email at this time. Please contact us at +919309212401'
         };
     }
 };
```

```typescript
// Recommended: Server-side API route (app/api/send-email/route.ts)
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip ?? 'unknown';
    const { success } = await rateLimit.check(ip);
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    // Validate and sanitize inputs...
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: 'RG Legal Solutions <noreply@rglegalsolutions.in>',
      to: 'rgassociatesjaipur@gmail.com',
      subject: `New ${body.formType} Form Submission`,
      html: `...`,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```
