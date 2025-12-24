# 📋 Pending .env.local Configuration Tasks

This document tracks all pending environment variable configurations that require external service setup.

**Last Updated:** December 23, 2025

---

## 🔴 **CRITICAL - Required for Production**

### 1. Rate Limiting (Upstash Redis)
**Status:** ✅ **COMPLETED**  
**Priority:** CRITICAL  
**Completed:** December 24, 2025

**What Was Done:**
- ✅ Upstash Redis credentials added to `.env.local`
- ✅ Rate limiting utility created (`web/src/lib/rateLimit.ts`)
- ✅ Hero form protected (3 submissions per 10 minutes)
- ✅ Contact form protected (2 submissions per 15 minutes)
- ✅ Documentation created (`web/docs/RATE_LIMITING.md`)

**Configuration:**
```bash
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

**Files Updated:**
- ✅ `web/src/lib/rateLimit.ts` (created)
- ✅ `web/src/app/actions/heroForm.ts` (rate limiting added)
- ✅ `web/src/app/contact/actions.ts` (rate limiting added)
- ✅ `web/docs/RATE_LIMITING.md` (documentation created)

---

### 2. Email Service (EmailJS)
**Status:** ✅ **CONFIGURED**  
**Priority:** CRITICAL  
**Note:** Using EmailJS (no migration to Resend needed)

**Current Setup:**
- ✅ EmailJS credentials in `.env.local` and production
- ✅ Working for both hero and contact forms
- ✅ No migration needed - EmailJS is the chosen solution

**Configuration:**
```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

---

## 🟠 **HIGH PRIORITY - Recommended for Production**

### 3. Honeypot Protection (Bot Prevention)
**Status:** ✅ **COMPLETED**  
**Priority:** HIGH  
**Completed:** December 24, 2025

**What Was Done:**
- ✅ Honeypot utility created (`web/src/lib/honeypot.ts`)
- ✅ Hero form protected with invisible honeypot field
- ✅ Contact form protected with invisible honeypot field
- ✅ Server-side validation added to both form actions
- ✅ Bot detection logging implemented

**How It Works:**
- Invisible field added to forms (hidden from real users)
- Bots auto-fill all fields including the hidden one
- Server rejects submissions with honeypot field filled
- Completely transparent to legitimate users

**Files Updated:**
- ✅ `web/src/lib/honeypot.ts` (created)
- ✅ `web/src/components/homepage/HeroSection.tsx` (honeypot added)
- ✅ `web/src/app/contact/page.tsx` (honeypot added)
- ✅ `web/src/app/actions/heroForm.ts` (validation added)
- ✅ `web/src/app/contact/actions.ts` (validation added)

---

### 4. Error Monitoring (Sentry)
**Status:** ⏳ Pending Setup  
**Priority:** HIGH  
**Estimated Time:** 20 minutes

**Why Needed:**
- Track production errors in real-time
- Get notified of issues before users report them
- Debug production issues easily

**Setup Steps:**
1. Create account at: https://sentry.io/
2. Create new Next.js project
3. Get DSN from project settings
4. Run: `npx @sentry/wizard@latest -i nextjs`
5. Or manually add to `.env.local`:
   ```bash
   SENTRY_DSN=https://your-sentry-dsn
   NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn
   ```

**Files to Update After Setup:**
- Sentry wizard will handle most setup
- Update `web/src/lib/logger.ts` to send errors to Sentry

---

## 🟡 **MEDIUM PRIORITY - Nice to Have**

### 5. Google Tag Manager (Environment Variable)
**Status:** ✅ **COMPLETED**  
**Priority:** MEDIUM  
**Completed:** December 24, 2025

**What Was Done:**
- ✅ Moved GTM ID from hardcoded value to environment variable
- ✅ Updated layout.tsx to use `process.env.NEXT_PUBLIC_GTM_ID`
- ✅ Added conditional rendering (only loads if env var is set)
- ✅ Updated .env.example with GTM configuration

**Configuration:**
```bash
NEXT_PUBLIC_GTM_ID=GTM-TVL5Z4XP
```

**Files Updated:**
- ✅ `web/src/app/layout.tsx` (uses env variable now)
- ✅ `web/.env.example` (uncommented GTM section)

---

## 📊 **Progress Tracking**

```
Critical Tasks:    [✓] [✓]           2/2 (100%) ✅
High Priority:     [✓] [ ]           1/2 (50%)
Medium Priority:   [✓]               1/1 (100%) ✅

Total Progress:    ████████████████░ 4/5 (80%)
```

---

## 🎯 **Recommended Order**

1. ✅ **Upstash Redis** (Rate Limiting) - COMPLETED
2. ✅ **EmailJS** (Email Service) - CONFIGURED  
3. ✅ **Honeypot** (Bot Prevention) - COMPLETED
4. **Sentry** (Error Monitoring) - Optional (deferred for later)
5. ✅ **GTM** (Environment Variable) - COMPLETED

---

## 📝 **How to Proceed**

### When You Complete a Setup:

1. ✅ Complete the setup steps above
2. ✅ Add the environment variables to your `.env.local`
3. ✅ Restart your dev server: `npm run dev`
4. ✅ Notify me which service you've set up
5. ✅ I'll implement the corresponding code changes

### Example Message:
```
"I've set up Upstash Redis and added the credentials to .env.local. 
Please implement rate limiting."
```

---

## ⚠️ **Important Notes**

### Security Reminders:
- ❌ **NEVER** commit `.env.local` to git
- ❌ **NEVER** share service role keys or secret keys
- ✅ **ALWAYS** use environment variables for sensitive data
- ✅ **ALWAYS** restart dev server after changing `.env.local`

### Testing After Setup:
- Test in development first
- Verify environment variables are loaded
- Check functionality works as expected
- Deploy to staging before production

---

## 📚 **Additional Resources**

- [Upstash Documentation](https://docs.upstash.com/)
- [Resend Documentation](https://resend.com/docs)
- [hCaptcha Documentation](https://docs.hcaptcha.com/)
- [Sentry Next.js Guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

**Status:** All tasks pending - waiting for external service setup  
**Next Action:** Choose which service to set up first (recommend Upstash Redis)
