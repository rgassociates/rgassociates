# 📧 EmailJS Setup - Admin Notification Only

**Purpose:** Send email notifications to **rgassociatesjaipur@gmail.com** when forms are submitted

---

## 📋 Quick Setup Guide

### **Step 1: Create EmailJS Account** (5 min)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (Free - 200 emails/month)
3. Verify your email
4. Log in

---

### **Step 2: Connect Gmail** (5 min)

1. Go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with: **rgassociatesjaipur@gmail.com**
6. Grant permissions
7. **Copy your Service ID** → Save it (e.g., `service_abc123`)

---

### **Step 3: Create Email Template** (10 min)

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Configure:

**Template Name:** `admin_notification`

**From Name:** `RG Legal Solutions Website`

**To Email:** `rgassociatesjaipur@gmail.com`

**Subject:**
```
🔔 New Contact - {{service_type}} | {{first_name}} {{last_name}}
```

**HTML Content:** (Copy-paste this)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #051427 0%, #0A1A2F 100%); padding: 30px; text-align: center;">
                            <h1 style="color: #D4A646; margin: 0; font-size: 28px; font-weight: bold;">
                                🔔 New Contact Form Submission
                            </h1>
                            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">
                                RG Legal Solutions Website
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Contact Details -->
                    <tr>
                        <td style="padding: 30px;">
                            <h2 style="color: #051427; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #D4A646;">
                                📋 Contact Information
                            </h2>
                            
                            <table width="100%" cellpadding="10" cellspacing="0">
                                <tr>
                                    <td width="140" style="font-weight: bold; color: #051427; vertical-align: top;">
                                        👤 Name:
                                    </td>
                                    <td style="color: #333333;">
                                        {{first_name}} {{last_name}}
                                    </td>
                                </tr>
                                <tr style="background-color: #f9f9f9;">
                                    <td style="font-weight: bold; color: #051427; vertical-align: top;">
                                        ✉️ Email:
                                    </td>
                                    <td style="color: #333333;">
                                        <a href="mailto:{{email}}" style="color: #D4A646; text-decoration: none;">{{email}}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; color: #051427; vertical-align: top;">
                                        📱 Phone:
                                    </td>
                                    <td style="color: #333333;">
                                        <a href="tel:{{phone}}" style="color: #D4A646; text-decoration: none;">{{phone}}</a>
                                    </td>
                                </tr>
                                <tr style="background-color: #f9f9f9;">
                                    <td style="font-weight: bold; color: #051427; vertical-align: top;">
                                        ⚖️ Service Type:
                                    </td>
                                    <td style="color: #333333;">
                                        <span style="background-color: #D4A646; color: #051427; padding: 4px 12px; border-radius: 4px; font-weight: bold; font-size: 12px;">
                                            {{service_type}}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; color: #051427; vertical-align: top;">
                                        📝 Form Type:
                                    </td>
                                    <td style="color: #333333; text-transform: capitalize;">
                                        {{form_type}} Form
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Message -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <h3 style="color: #051427; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 3px solid #D4A646;">
                                💬 Message
                            </h3>
                            <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #D4A646; border-radius: 4px;">
                                <p style="color: #333333; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Action Button -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px; text-align: center;">
                            <a href="mailto:{{email}}?subject=Re: Your inquiry about {{service_type}}" 
                               style="display: inline-block; background-color: #D4A646; color: #051427; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                                📧 Reply to Client
                            </a>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9f9f9; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                            <p style="color: #666666; font-size: 12px; margin: 0 0 8px 0;">
                                <strong>⏰ Submitted:</strong> {{submission_time}}
                            </p>
                            <p style="color: #999999; font-size: 11px; margin: 0; line-height: 1.5;">
                                This is an automated notification from your RG Legal Solutions website contact form.
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

4. Click **"Save"**
5. **Copy your Template ID** → Save it (e.g., `template_xyz789`)

---

### **Step 4: Get Public Key** (2 min)

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy it** → Save it (e.g., `AbCdEfGhIjKlMnOp`)

---

### **Step 5: Update Configuration** (2 min)

1. Open: `web/src/lib/emailConfig.ts`
2. Replace with your values:

```typescript
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'AbCdEfGhIjKlMnOp',        // From Step 4
    SERVICE_ID: 'service_abc123',          // From Step 2
    TEMPLATE_ID: 'template_xyz789',        // From Step 3
};
```

3. Save the file

---

### **Step 6: Test!** (5 min)

1. Make sure dev server is running:
   ```bash
   npm run dev
   ```

2. **Test Hero Form:**
   - Go to http://localhost:3000
   - Fill out hero section form
   - Submit
   - Check **rgassociatesjaipur@gmail.com**

3. **Test Contact Form:**
   - Go to http://localhost:3000/contact
   - Fill out contact form
   - Submit
   - Check **rgassociatesjaipur@gmail.com**

---

## ✅ What You'll Receive

Every form submission sends ONE email to **rgassociatesjaipur@gmail.com** with:

- ✅ Client's full name
- ✅ Email address (if provided)
- ✅ Phone number
- ✅ Service type requested
- ✅ Their message
- ✅ Submission timestamp (IST)
- ✅ Form type (hero or contact)
- ✅ "Reply to Client" button

---

## 📧 Email Preview

```
Subject: 🔔 New Contact - Legal Consultation | John Doe

┌─────────────────────────────────────┐
│   🔔 New Contact Form Submission    │
│   RG Legal Solutions Website        │
└─────────────────────────────────────┘

📋 Contact Information
────────────────────────────────────
👤 Name: John Doe
✉️ Email: john@example.com
📱 Phone: +91 98765 43210
⚖️ Service Type: Legal Consultation
📝 Form Type: Contact Form

💬 Message
────────────────────────────────────
I need legal consultation regarding
property dispute...

        [📧 Reply to Client]

⏰ Submitted: Monday, December 23, 2025
```

---

## 🔧 Troubleshooting

### **Not receiving emails?**

1. **Check EmailJS Dashboard:**
   - Go to "History" tab
   - Verify email was sent

2. **Check Spam Folder:**
   - Emails might be in spam initially

3. **Verify Configuration:**
   - Double-check all 3 IDs in `emailConfig.ts`
   - No typos or extra spaces

4. **Check Browser Console:**
   - Press F12
   - Look for EmailJS errors

---

## 📊 EmailJS Limits

**Free Plan:**
- ✅ 200 emails/month
- ✅ 50 emails/day
- ✅ No credit card required

---

## 🎯 Summary

**Total Setup Time:** ~30 minutes

**What happens when form is submitted:**
1. Data saved to Supabase database ✅
2. Email sent to rgassociatesjaipur@gmail.com ✅
3. Success message shown to user ✅

**No customer confirmation emails** - Admin only! ✅

---

**Ready to start?** Follow Steps 1-6 above! 🚀
