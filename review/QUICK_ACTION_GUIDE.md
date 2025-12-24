# 🚀 Quick Action Guide - RG Associates Code Review

**Last Updated:** December 23, 2025

This guide provides immediate, actionable steps to address the critical issues found in the code review.

---

## 🚨 CRITICAL FIXES (Do These First - Today!)

### 1. Secure Email Sending (2-4 hours)
**Current Issue:** EmailJS keys exposed in browser, vulnerable to spam/abuse

**Action Steps:**
```bash
# 1. Create server-side API route
mkdir -p web/src/app/api/send-email
```

Create `web/src/app/api/send-email/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate and sanitize inputs here
    
    const { data, error } = await resend.emails.send({
      from: 'RG Legal <noreply@rglegalsolutions.in>',
      to: 'rgassociatesjaipur@gmail.com',
      subject: `New ${body.formType} Submission`,
      html: `...`,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

**Install Resend:**
```bash
cd web
npm install resend
```

**Update .env.local:**
```bash
RESEND_API_KEY=re_your_api_key_here
```

---

### 2. Add Security Headers (30 minutes)
**Current Issue:** Missing critical security headers

**Action:** Update `web/next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  // Add this new section
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ];
  },
  
  // Existing redirects...
};
```

---

### 3. Add Rate Limiting (2-3 hours)
**Current Issue:** Forms vulnerable to spam/abuse

**Install dependencies:**
```bash
cd web
npm install @upstash/ratelimit @upstash/redis
```

**Create rate limiter** (`web/src/lib/rateLimit.ts`):
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
  analytics: true,
});
```

**Add to .env.local:**
```bash
UPSTASH_REDIS_REST_URL=your_url_here
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

**Use in server actions:**
```typescript
import { rateLimit } from '@/lib/rateLimit';

export async function submitHeroForm(formData: any) {
  const ip = headers().get('x-forwarded-for') ?? 'unknown';
  const { success } = await rateLimit.limit(ip);
  
  if (!success) {
    return { error: 'Too many requests. Please try again later.' };
  }
  
  // Rest of your code...
}
```

---

### 4. Remove Console.log Statements (1 hour)
**Current Issue:** Sensitive data exposed in browser console

**Create logging utility** (`web/src/lib/logger.ts`):
```typescript
const isDev = process.env.NODE_ENV === 'development';

export const logger = {
  info: (...args: any[]) => {
    if (isDev) console.log('[INFO]', ...args);
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
    // TODO: Send to Sentry in production
  },
  warn: (...args: any[]) => {
    if (isDev) console.warn('[WARN]', ...args);
  },
};
```

**Replace all console.log:**
```bash
# Find all console.log statements
grep -r "console.log" web/src --include="*.ts" --include="*.tsx"

# Replace with logger.info
# Do this manually or with find-replace
```

---

## ⚠️ HIGH PRIORITY (Do These This Week)

### 5. Add Input Validation (4-6 hours)
**Install Zod:**
```bash
cd web
npm install zod validator isomorphic-dompurify
npm install -D @types/validator
```

**Create validation schemas** (`web/src/lib/validation.ts`):
```typescript
import { z } from 'zod';
import validator from 'validator';

export const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name too long')
  .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters');

export const phoneSchema = z.string()
  .refine(val => validator.isMobilePhone(val, 'en-IN'), {
    message: 'Invalid Indian phone number'
  });

export const emailSchema = z.string()
  .email('Invalid email')
  .refine(val => validator.isEmail(val));
```

**Use in server actions:**
```typescript
import { nameSchema, phoneSchema } from '@/lib/validation';
import DOMPurify from 'isomorphic-dompurify';

export async function submitHeroForm(formData: any) {
  // Validate
  const firstName = nameSchema.parse(formData.firstName);
  const phone = phoneSchema.parse(formData.phone);
  
  // Sanitize
  const sanitized = {
    firstName: DOMPurify.sanitize(firstName),
    phone: phone.replace(/\D/g, ''),
  };
  
  // Continue...
}
```

---

### 6. Set Up Error Monitoring (1-2 hours)
**Install Sentry:**
```bash
cd web
npx @sentry/wizard@latest -i nextjs
```

**Follow the wizard and add to .env.local:**
```bash
SENTRY_DSN=your_sentry_dsn_here
```

---

### 7. Add Testing Framework (4-6 hours)
**Install Jest and React Testing Library:**
```bash
cd web
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

**Create jest.config.js:**
```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

**Create jest.setup.js:**
```javascript
import '@testing-library/jest-dom';
```

**Add to package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

**Write first test** (`web/src/lib/__tests__/validation.test.ts`):
```typescript
import { nameSchema, phoneSchema } from '../validation';

describe('Validation', () => {
  describe('nameSchema', () => {
    it('should accept valid names', () => {
      expect(() => nameSchema.parse('John Doe')).not.toThrow();
    });

    it('should reject names with numbers', () => {
      expect(() => nameSchema.parse('John123')).toThrow();
    });
  });
});
```

---

## 📋 MEDIUM PRIORITY (Do These This Month)

### 8. Add CAPTCHA (2-3 hours)
**Install hCaptcha:**
```bash
cd web
npm install @hcaptcha/react-hcaptcha
```

**Add to forms:**
```typescript
import HCaptcha from '@hcaptcha/react-hcaptcha';

// In your form component
const [captchaToken, setCaptchaToken] = useState('');

<HCaptcha
  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
  onVerify={(token) => setCaptchaToken(token)}
/>
```

---

### 9. Implement Singleton Supabase Client (1 hour)
**Update `web/src/lib/supabaseServer.ts`:**
```typescript
let serverClient: SupabaseClient | null = null;

export function getServerClient() {
  if (serverClient) return serverClient;
  
  // Create client...
  serverClient = createClient(...);
  return serverClient;
}
```

---

### 10. Add Environment Variable Validation (1 hour)
**Create `web/src/lib/env.ts`:**
```typescript
function validateEnv() {
  const required = {
    'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL,
    'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    'SUPABASE_SERVICE_ROLE_KEY': process.env.SUPABASE_SERVICE_ROLE_KEY,
  };

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Missing env vars:\n${missing.join('\n')}`);
  }
}

validateEnv();
```

**Import in `web/src/app/layout.tsx`:**
```typescript
import '@/lib/env'; // Validates on app startup
```

---

## 📊 Progress Tracking

Create a checklist to track your progress:

- [ ] **Critical 1:** Secure email sending (server-side)
- [ ] **Critical 2:** Add security headers
- [ ] **Critical 3:** Add rate limiting
- [ ] **Critical 4:** Remove console.log statements
- [ ] **High 5:** Add input validation & sanitization
- [ ] **High 6:** Set up error monitoring (Sentry)
- [ ] **High 7:** Add testing framework
- [ ] **Medium 8:** Add CAPTCHA
- [ ] **Medium 9:** Implement singleton pattern
- [ ] **Medium 10:** Add env variable validation

---

## 🆘 Need Help?

### Resources
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Zod Documentation](https://zod.dev/)
- [Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

### Common Issues
1. **Rate limiting not working?** Check Upstash Redis connection
2. **Tests failing?** Ensure jest.config.js is correct
3. **Validation errors?** Check Zod schema definitions
4. **Email not sending?** Verify Resend API key and domain

---

**Remember:** Security is not optional. Complete the critical fixes before deploying to production!
