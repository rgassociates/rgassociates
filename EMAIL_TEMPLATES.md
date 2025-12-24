# 📧 EmailJS - Complete Email Templates

## Template 1: Admin Notification Email
**Purpose:** Notify rgassociatesjaipur@gmail.com when someone submits a form

---

### **Admin Template Configuration**

**Template Name:** `admin_notification`  
**Template ID:** (You'll get this after creating)

**From Name:** `RG Legal Solutions Website`  
**From Email:** (Leave default - uses your connected Gmail)  
**To Email:** `rgassociatesjaipur@gmail.com`

**Subject:**
```
🔔 New Contact Form - {{service_type}} | {{first_name}} {{last_name}}
```

**HTML Content:**
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
                                Please respond to the client within 24-48 hours for best customer service.
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

---

## Template 2: Customer Confirmation Email
**Purpose:** Send confirmation to the customer who submitted the form

---

### **Customer Confirmation Template Configuration**

**Template Name:** `customer_confirmation`  
**Template ID:** (You'll get this after creating)

**From Name:** `RG Legal Solutions`  
**From Email:** (Leave default - uses your connected Gmail)  
**To Email:** `{{email}}` ← **IMPORTANT: Use this variable**

**Subject:**
```
✅ Thank you for contacting RG Legal Solutions - {{first_name}}
```

**HTML Content:**
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
                        <td style="background: linear-gradient(135deg, #051427 0%, #0A1A2F 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #D4A646; margin: 0; font-size: 32px; font-weight: bold; font-family: Georgia, serif;">
                                RG Legal Solutions
                            </h1>
                            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">
                                Expert Legal Services
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Success Message -->
                    <tr>
                        <td style="padding: 40px 30px; text-align: center;">
                            <div style="background-color: #D4A646; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 48px;">✅</span>
                            </div>
                            <h2 style="color: #051427; font-size: 28px; margin: 0 0 15px 0;">
                                Thank You, {{first_name}}!
                            </h2>
                            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0;">
                                We have received your inquiry regarding <strong style="color: #D4A646;">{{service_type}}</strong> 
                                and our team will review it shortly.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- What Happens Next -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; border-left: 4px solid #D4A646;">
                                <h3 style="color: #051427; font-size: 20px; margin: 0 0 20px 0;">
                                    📋 What Happens Next?
                                </h3>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="40" style="vertical-align: top; padding-top: 5px;">
                                            <span style="background-color: #D4A646; color: #051427; width: 30px; height: 30px; border-radius: 50%; display: inline-block; text-align: center; line-height: 30px; font-weight: bold;">1</span>
                                        </td>
                                        <td style="padding-bottom: 15px;">
                                            <p style="margin: 0; color: #333333; line-height: 1.6;">
                                                <strong>Review:</strong> Our legal team will carefully review your request within <strong>3 business days</strong>.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="40" style="vertical-align: top; padding-top: 5px;">
                                            <span style="background-color: #D4A646; color: #051427; width: 30px; height: 30px; border-radius: 50%; display: inline-block; text-align: center; line-height: 30px; font-weight: bold;">2</span>
                                        </td>
                                        <td style="padding-bottom: 15px;">
                                            <p style="margin: 0; color: #333333; line-height: 1.6;">
                                                <strong>Contact:</strong> We'll reach out to you via phone or email to discuss your legal matter in detail.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="40" style="vertical-align: top; padding-top: 5px;">
                                            <span style="background-color: #D4A646; color: #051427; width: 30px; height: 30px; border-radius: 50%; display: inline-block; text-align: center; line-height: 30px; font-weight: bold;">3</span>
                                        </td>
                                        <td>
                                            <p style="margin: 0; color: #333333; line-height: 1.6;">
                                                <strong>Consultation:</strong> Schedule a detailed consultation to understand your needs and provide expert legal guidance.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Your Details -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <h3 style="color: #051427; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #D4A646;">
                                📝 Your Submission Details
                            </h3>
                            <table width="100%" cellpadding="8" cellspacing="0">
                                <tr style="background-color: #f9f9f9;">
                                    <td width="140" style="font-weight: bold; color: #051427;">Service Type:</td>
                                    <td style="color: #333333;">{{service_type}}</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; color: #051427;">Submitted On:</td>
                                    <td style="color: #333333;">{{submission_time}}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Contact Info -->
                    <tr>
                        <td style="background-color: #051427; padding: 30px; text-align: center;">
                            <h3 style="color: #D4A646; font-size: 18px; margin: 0 0 20px 0;">
                                Need Immediate Assistance?
                            </h3>
                            <table width="100%" cellpadding="10" cellspacing="0">
                                <tr>
                                    <td width="50%" style="text-align: center; padding: 10px;">
                                        <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 14px;">📞 Call Us</p>
                                        <a href="tel:+919309212401" style="color: #D4A646; text-decoration: none; font-size: 18px; font-weight: bold;">
                                            +91 93092 12401
                                        </a>
                                    </td>
                                    <td width="50%" style="text-align: center; padding: 10px; border-left: 1px solid rgba(212, 166, 70, 0.3);">
                                        <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 14px;">✉️ Email Us</p>
                                        <a href="mailto:rgassociatesjaipur@gmail.com" style="color: #D4A646; text-decoration: none; font-size: 14px; font-weight: bold;">
                                            rgassociatesjaipur@gmail.com
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(212, 166, 70, 0.3);">
                                <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 14px;">📍 Visit Our Office</p>
                                <p style="color: #D4A646; margin: 0; font-size: 13px; line-height: 1.6;">
                                    Vatsalya 2 Complex, NRI Circle, Sanganer<br>
                                    Pratap Nagar, Jaipur, Rajasthan 302033
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="color: #666666; font-size: 12px; margin: 0 0 10px 0; line-height: 1.5;">
                                This is an automated confirmation email. Please do not reply to this email.
                            </p>
                            <p style="color: #999999; font-size: 11px; margin: 0;">
                                © 2025 RG Legal Solutions. All rights reserved.<br>
                                Professional Legal Services | Jaipur, Rajasthan
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

---

## 🔧 How to Set This Up in EmailJS

### **Step 1: Create Admin Template**

1. Go to EmailJS Dashboard → **Email Templates**
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name:** `admin_notification`
   - **From Name:** `RG Legal Solutions Website`
   - **To Email:** `rgassociatesjaipur@gmail.com`
   - **Subject:** Copy from above
   - **Content:** Paste HTML from "Admin Template" above
4. Click **Save**
5. **Copy the Template ID** (e.g., `template_admin_123`)

### **Step 2: Create Customer Confirmation Template**

1. Click **"Create New Template"** again
2. Fill in:
   - **Template Name:** `customer_confirmation`
   - **From Name:** `RG Legal Solutions`
   - **To Email:** `{{email}}` ← **CRITICAL: Use this variable!**
   - **Subject:** Copy from above
   - **Content:** Paste HTML from "Customer Confirmation" above
3. Click **Save**
4. **Copy the Template ID** (e.g., `template_customer_456`)

---

## 📝 Update Your Code

Now you need to send **TWO emails** for each form submission:

### **Option 1: Update emailService.ts** (Recommended)

Replace the content of `web/src/lib/emailService.ts`:

```typescript
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailConfig';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

interface EmailParams {
    first_name: string;
    last_name: string;
    email: string | null;
    phone: string;
    service_type: string;
    message: string;
    form_type: 'hero' | 'contact';
}

export const sendEmailNotification = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
    try {
        const emailParams = {
            ...params,
            submission_time: new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'long'
            }),
            service_type: params.service_type
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
        };

        // Send admin notification
        const adminResponse = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,  // New!
            emailParams
        );

        // Send customer confirmation (only if email provided)
        if (params.email) {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.CUSTOMER_TEMPLATE_ID,  // New!
                emailParams
            );
        }

        if (adminResponse.status === 200) {
            console.log('✅ Emails sent successfully');
            return { success: true };
        } else {
            return { success: false, error: 'Failed to send emails' };
        }
    } catch (error) {
        console.error('❌ EmailJS Error:', error);
        return { 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        };
    }
};
```

### **Option 2: Update emailConfig.ts**

Replace the content of `web/src/lib/emailConfig.ts`:

```typescript
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
    
    // Admin notification template
    ADMIN_TEMPLATE_ID: 'YOUR_ADMIN_TEMPLATE_ID_HERE',
    
    // Customer confirmation template
    CUSTOMER_TEMPLATE_ID: 'YOUR_CUSTOMER_TEMPLATE_ID_HERE',
};

export const EMAIL_RECIPIENT = 'rgassociatesjaipur@gmail.com';
```

---

## ✅ Testing Checklist

After setup, test both templates:

### **Test 1: Submit Hero Form**
- [ ] Admin receives notification at rgassociatesjaipur@gmail.com
- [ ] Customer does NOT receive confirmation (hero form has no email)

### **Test 2: Submit Contact Form**
- [ ] Admin receives notification at rgassociatesjaipur@gmail.com
- [ ] Customer receives confirmation at their email
- [ ] Both emails are properly formatted
- [ ] All variables are replaced correctly

---

## 🎨 Email Features

### **Admin Email:**
✅ Professional notification design  
✅ All contact details highlighted  
✅ Direct "Reply to Client" button  
✅ Service type badge  
✅ Timestamp in IST  

### **Customer Email:**
✅ Welcoming confirmation message  
✅ Clear "What Happens Next" section  
✅ 3-step process explanation  
✅ Contact information for urgent matters  
✅ Office address  
✅ Professional branding  

---

**Ready to use!** 🎉 Just create both templates in EmailJS and update your config file!
