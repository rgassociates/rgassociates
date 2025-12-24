# 🚨 Production Form Submission Error - Fix Guide

## ❌ **Error:**
```
POST https://www.rglegalsolutions.in/ [HTTP/2 500]
Error: An error occurred in the Server Components render.
```

## 🔍 **Root Cause:**
The hero form submission is failing on production because **required environment variables are missing** in your Vercel deployment.

---

## ✅ **Required Environment Variables for Production**

You need to add these to your **Vercel Project Settings**:

### **1. Supabase (CRITICAL - Required for form submission)**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### **2. Upstash Redis (CRITICAL - Required for rate limiting)**
```bash
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

### **3. EmailJS (Optional - Email notifications)**
```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### **4. Google Tag Manager (Optional - Analytics)**
```bash
NEXT_PUBLIC_GTM_ID=GT-NNS8WM2W
```

---

## 📝 **Step-by-Step Fix**

### **Step 1: Go to Vercel Dashboard**
1. Open https://vercel.com/
2. Select your project: **rglegalsolutions**
3. Go to **Settings** → **Environment Variables**

### **Step 2: Add Environment Variables**

For each variable above:

1. Click **"Add New"**
2. **Name:** Enter the variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
3. **Value:** Paste the value from your `.env.local` file
4. **Environment:** Select **Production**, **Preview**, and **Development**
5. Click **"Save"**

### **Step 3: Redeploy**

After adding all variables:

1. Go to **Deployments** tab
2. Click the **three dots** on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (~2-3 minutes)

---

## 🔑 **Where to Find Your Values**

### **Supabase:**
1. Go to https://app.supabase.com/
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` ⚠️ **KEEP SECRET!**

### **Upstash Redis:**
1. Go to https://console.upstash.com/
2. Select your Redis database
3. Go to **REST API** section
4. Copy:
   - **UPSTASH_REDIS_REST_URL**
   - **UPSTASH_REDIS_REST_TOKEN**

### **EmailJS:**
1. Go to https://dashboard.emailjs.com/
2. Go to **Account** → **General**
3. Copy **Public Key** → `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Go to **Email Services** → Copy **Service ID**
5. Go to **Email Templates** → Copy **Template ID**

---

## ⚠️ **IMPORTANT Security Notes**

1. **NEVER commit `.env.local` to git** (already in `.gitignore`)
2. **NEVER share `SUPABASE_SERVICE_ROLE_KEY` publicly** - it has full database access
3. **Use different keys for development and production** (if possible)
4. **Rotate keys immediately** if accidentally exposed

---

## 🧪 **Testing After Fix**

1. Wait for Vercel deployment to complete
2. Go to https://www.rglegalsolutions.in/
3. Fill out the hero form
4. Submit
5. Check:
   - ✅ No 500 error
   - ✅ Success message appears
   - ✅ Data appears in Supabase `contact_submissions` table
   - ✅ Email notification sent (if EmailJS configured)

---

## 🔍 **Debugging Production Issues**

If it still fails after adding variables:

### **Check Vercel Logs:**
1. Go to Vercel Dashboard → **Deployments**
2. Click on latest deployment
3. Go to **Runtime Logs**
4. Look for error messages

### **Check Supabase Logs:**
1. Go to Supabase Dashboard
2. Go to **Logs** → **API**
3. Look for failed requests

### **Common Issues:**

| Issue | Solution |
|-------|----------|
| "Missing environment variable" | Add the variable in Vercel settings |
| "Invalid Supabase URL" | Check URL format (should start with `https://`) |
| "Unauthorized" | Check service role key is correct |
| "Rate limit exceeded" | Verify Upstash Redis credentials |
| "Network error" | Check Supabase project is not paused |

---

## 📋 **Quick Checklist**

- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY` to Vercel
- [ ] Added `UPSTASH_REDIS_REST_URL` to Vercel
- [ ] Added `UPSTASH_REDIS_REST_TOKEN` to Vercel
- [ ] Added `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` to Vercel (optional)
- [ ] Added `NEXT_PUBLIC_EMAILJS_SERVICE_ID` to Vercel (optional)
- [ ] Added `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` to Vercel (optional)
- [ ] Added `NEXT_PUBLIC_GTM_ID` to Vercel (optional)
- [ ] Redeployed the project
- [ ] Tested form submission on production
- [ ] Verified data in Supabase
- [ ] Checked email notifications (if configured)

---

## 🆘 **Still Having Issues?**

If the form still doesn't work after following these steps:

1. **Check your `.env.local` file** - Make sure it has all the correct values
2. **Copy the exact values** from `.env.local` to Vercel
3. **Verify Supabase project is active** (not paused)
4. **Check Upstash Redis is active** (not expired)
5. **Look at Vercel Runtime Logs** for specific error messages

---

## ✅ **Expected Result**

After fixing:
- ✅ Form submits successfully on production
- ✅ No 500 errors
- ✅ Data saved to Supabase
- ✅ Email notifications sent
- ✅ Rate limiting works
- ✅ Bot protection active

---

**Last Updated:** December 24, 2025  
**Priority:** 🔴 **CRITICAL** - Form is currently broken on production
