# 🔒 Environment Variables Setup

## Add these to your `.env.local` file:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=kzmXl46Pe0rbHgXuu
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ji09jsv
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_izxjfdf
```

---

## 📝 Instructions:

1. **Open:** `web/.env.local`
2. **Add the 3 lines above** (with your actual values)
3. **Save the file**
4. **Restart dev server:**
   - Stop the current server (Ctrl+C)
   - Run: `npm run dev`

---

## ✅ Why NEXT_PUBLIC_ prefix?

- `NEXT_PUBLIC_` makes the variable accessible in the browser
- Required for client-side code (like EmailJS)
- Next.js automatically exposes these to the frontend

---

## 🔒 Security Notes:

### **Safe to Expose:**
✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - Designed to be public  
✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - Public identifier  
✅ `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - Public identifier  

### **Why it's secure:**
- EmailJS Public Key is **meant** to be public
- It only allows **sending** emails (not reading)
- Rate limits prevent abuse
- Your Gmail password is **never** exposed
- EmailJS handles authentication on their servers

### **What's Protected:**
🔒 Your Gmail password (stored securely in EmailJS)  
🔒 Service Role Key (in Supabase)  
🔒 Database credentials  

---

## 📁 File Structure:

```
web/
├── .env.local          ← Add EmailJS variables here
├── .gitignore          ← Already ignores .env.local
└── src/
    └── lib/
        └── emailConfig.ts  ← Now reads from .env.local
```

---

## 🚀 After Adding Variables:

1. **Restart server** (important!)
2. **Test the form**
3. **Verify email is sent**

---

## ⚠️ Important:

- `.env.local` is already in `.gitignore` ✅
- Never commit `.env.local` to Git ✅
- For Vercel deployment, add these in Vercel dashboard ✅

---

## 🎯 Vercel Deployment (Future):

When deploying to Vercel:

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add the same 3 variables
4. Redeploy

---

**Your credentials are now secure!** 🔒
