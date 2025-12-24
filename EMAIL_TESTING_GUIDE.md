# 🧪 Email Testing Guide

## ✅ What I Fixed:

1. **Added default values** for null/empty fields
2. **Better data extraction** from contact form
3. **Added logging** to debug what's being sent

---

## 🔍 Expected Behavior:

### **Hero Form** (Homepage):
- ✅ Name: Shows full name
- ❌ Email: Shows "Not provided" (hero form doesn't collect email)
- ✅ Phone: Shows phone number
- ✅ Service Type: Shows selected service
- ✅ Message: Shows auto-generated message
- ✅ Form Type: Shows "hero"

### **Contact Form** (Contact Page):
- ✅ Name: Shows full name
- ✅ Email: Shows email address
- ✅ Phone: Shows phone number (if provided)
- ✅ Service Type: Shows selected service
- ✅ Message: Shows user's message
- ✅ Form Type: Shows "contact"

---

## 🧪 How to Test:

### **Test 1: Hero Form**

1. Go to http://localhost:3000
2. Fill out hero form:
   - First Name: John
   - Last Name: Doe
   - Phone: 9876543210
   - Service: Legal Consultation
3. Submit
4. **Check browser console** for: `📧 Sending email with params:`
5. **Check email** at rgassociatesjaipur@gmail.com

**Expected Email:**
```
Name: John Doe
Email: Not provided  ← This is correct (hero form has no email)
Phone: 9876543210
Service Type: Legal Consultation
Message: Quick consultation request via homepage for legal-consultation
Form Type: hero
```

---

### **Test 2: Contact Form**

1. Go to http://localhost:3000/contact
2. Fill out ALL fields:
   - First Name: Jane
   - Last Name: Smith
   - Email: jane@example.com
   - Phone: 8765432109
   - Service Type: Legal Notice
   - Message: I need help with a property dispute
3. Submit
4. **Check browser console** for:
   - `📝 Contact Form Data:` (shows what was extracted)
   - `📧 Sending email with params:` (shows what's being sent)
5. **Check email** at rgassociatesjaipur@gmail.com

**Expected Email:**
```
Name: Jane Smith
Email: jane@example.com  ← Should show now!
Phone: 8765432109
Service Type: Legal Notice
Message: I need help with a property dispute
Form Type: contact
```

---

## 🔍 Debugging Steps:

### **If email still shows "Not provided":**

1. **Open Browser Console** (F12)
2. Submit the form
3. Look for these logs:

```javascript
📝 Contact Form Data: {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com",  ← Check if this shows
  phone: "8765432109",
  serviceType: "legal-notice",
  message: "I need help..."
}

📧 Sending email with params: {
  first_name: "Jane",
  last_name: "Smith",
  email: "jane@example.com",  ← Check if this shows
  phone: "8765432109",
  service_type: "Legal Notice",
  message: "I need help...",
  form_type: "contact"
}
```

4. **If values are empty in the logs:**
   - The form fields might have wrong `name` attributes
   - Share the console output with me

5. **If values are correct in logs but email shows "Not provided":**
   - EmailJS template variable names might be wrong
   - Check template uses: `{{email}}` not `{{Email}}`

---

## ✅ What Should Work Now:

- ✅ Hero form sends email with name, phone, service (no email - that's correct)
- ✅ Contact form sends email with ALL fields including email and message
- ✅ Empty fields show "Not provided" instead of blank
- ✅ Console logs help debug what's being sent

---

## 📧 Email Template Variables:

Make sure your EmailJS template uses these exact variable names:

```
{{first_name}}
{{last_name}}
{{email}}
{{phone}}
{{service_type}}
{{message}}
{{form_type}}
{{submission_time}}
```

**Case-sensitive!** Use lowercase with underscores.

---

**Test both forms now and check the console logs!** 🚀
