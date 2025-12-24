# 📧 Updated EmailJS Template with Dynamic Variables

## Copy this EXACT template to EmailJS:

**IMPORTANT:** Make sure you're pasting this in the **HTML** content area, NOT the Text area!

---

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

---

## 🔍 **Key Changes - Static → Dynamic:**

### **Before (Static):**
```html
<td>Abhishek Singh</td>
<td><a href="mailto:"><!-- empty --></a></td>
<td><a href="tel:8109231913">8109231913</a></td>
<td>Consultation</td>
<td>hero Form</td>
<td>Quick consultation request...</td>
<td>Tuesday, 23 December 2025 at 12:39:00 pm IST</td>
```

### **After (Dynamic):**
```html
<td>{{first_name}} {{last_name}}</td>
<td><a href="mailto:{{email}}">{{email}}</a></td>
<td><a href="tel:{{phone}}">{{phone}}</a></td>
<td>{{service_type}}</td>
<td>{{form_type}} Form</td>
<td>{{message}}</td>
<td>{{submission_time}}</td>
```

---

## 📋 **All Dynamic Variables Used:**

1. `{{first_name}}` - First name
2. `{{last_name}}` - Last name
3. `{{email}}` - Email address
4. `{{phone}}` - Phone number
5. `{{service_type}}` - Service type
6. `{{message}}` - User's message
7. `{{form_type}}` - Form type (hero/contact)
8. `{{submission_time}}` - Timestamp

---

## ✅ **How to Update Your Template:**

1. **Go to EmailJS Dashboard**
2. **Email Templates** → Click your template
3. **Make sure you're in HTML mode** (not Text)
4. **Delete all existing content**
5. **Copy the template above**
6. **Paste it in the HTML content area**
7. **Click "Save"**
8. **Test it** using the "Test it" button

---

## 🧪 **Test the Template:**

After updating, click **"Test it"** in EmailJS:

Fill in test values:
- `first_name`: John
- `last_name`: Doe
- `email`: john@example.com
- `phone`: 9876543210
- `service_type`: Legal Consultation
- `message`: Test message
- `form_type`: contact
- `submission_time`: Monday, 23 Dec 2024

Send test email and verify all values show up correctly!

---

## ⚠️ **Important:**

Make sure the variable names in the template **exactly match** what your code sends:
- Use `{{email}}` NOT `{{Email}}` (case-sensitive!)
- Use underscores: `{{first_name}}` NOT `{{firstName}}`
- Use double curly braces: `{{variable}}` NOT `{variable}`

---

**Copy the template above and replace your current EmailJS template!** 🚀
