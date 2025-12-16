# Hero Form Database Integration - Implementation Plan

## 📋 **Current State Analysis**

### **Contact Form (Working):**
- ✅ Uses Supabase database
- ✅ Server action: `submitContactForm()`
- ✅ Table: `contact_submissions`
- ✅ Fields: first_name, last_name, email, phone, message
- ✅ Form validation
- ✅ Success/error handling

### **Hero Form (Not Connected):**
- ❌ No database connection
- ❌ Only console.log
- ❌ Simulated submission
- ✅ Has: name (full), phone, service
- ❌ Missing: first_name, last_name separation

---

## 🎯 **Implementation Plan**

### **Phase 1: Update Contact Form** ✅
**Add Service Type dropdown to Contact page**

**Changes needed:**
1. Add `service_type` field to contact form UI
2. Update `actions.ts` to accept service_type
3. Update Supabase table schema (if needed)

**Files to modify:**
- `src/app/contact/page.tsx` - Add service dropdown
- `src/app/contact/actions.ts` - Add service_type parameter

---

### **Phase 2: Create Hero Form Server Action** ✅
**Create new server action for hero form**

**New file:** `src/app/actions/heroForm.ts`

**Function:** `submitHeroForm()`

**Fields:**
- first_name (required)
- last_name (required)
- phone (required)
- service_type (required)

**Database table:** `contact_submissions` (same as contact form)

---

### **Phase 3: Update Hero Form Component** ✅
**Modify Hero section to use database**

**Changes:**
1. Split "Full Name" into "First Name" + "Last Name"
2. Import server action
3. Replace simulated submission with real database call
4. Keep existing success/error UI

**File:** `src/components/homepage/HeroSection.tsx`

---

## 📊 **Database Schema**

### **Table: `contact_submissions`**

**Current columns:**
- id (uuid, primary key)
- first_name (text)
- last_name (text)
- email (text)
- phone (text)
- message (text)
- created_at (timestamp)

**New column to add:**
- service_type (text) - for both forms

**Migration needed:** Add `service_type` column

---

## 🔧 **Detailed Implementation Steps**

### **Step 1: Add Service Type to Contact Form**

**File:** `src/app/contact/page.tsx`

**Add after phone field (line 129):**
```typescript
<div className="sm:col-span-2">
  <label htmlFor="service-type" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
    Service Type
  </label>
  <select
    name="service-type"
    id="service-type"
    className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
  >
    <option value="">Select a service (optional)</option>
    <option value="consultation">Legal Consultation (Pan-India)</option>
    <option value="documentation">Legal Documentation (Pan-India)</option>
    <option value="notice">Legal Notice (Pan-India)</option>
    <option value="litigation">Litigation (Jaipur Only)</option>
    <option value="research">Legal Research (Pan-India)</option>
    <option value="title-search">Title Search (Pan-India)</option>
  </select>
</div>
```

---

### **Step 2: Update Contact Form Action**

**File:** `src/app/contact/actions.ts`

**Update function:**
```typescript
export async function submitContactForm(formData: FormData) {
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone-number') as string;
    const serviceType = formData.get('service-type') as string; // NEW
    const message = formData.get('message') as string;

    // Validation remains same

    try {
        const { error } = await supabase.from('contact_submissions').insert({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            service_type: serviceType || null, // NEW
            message,
        });

        // Rest remains same
    }
}
```

---

### **Step 3: Create Hero Form Server Action**

**New file:** `src/app/actions/heroForm.ts`

```typescript
'use server';

import { supabase } from '@/lib/supabase';

export async function submitHeroForm(formData: {
    firstName: string;
    lastName: string;
    phone: string;
    serviceType: string;
}) {
    const { firstName, lastName, phone, serviceType } = formData;

    // Validation
    if (!firstName || !lastName || !phone || !serviceType) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        const { error } = await supabase.from('contact_submissions').insert({
            first_name: firstName,
            last_name: lastName,
            email: null, // Hero form doesn't collect email
            phone,
            service_type: serviceType,
            message: `Hero form submission - Service: ${serviceType}`,
        });

        if (error) {
            console.error('Supabase error:', error);
            return { error: 'Failed to submit request. Please try again.' };
        }

        return { success: 'Request submitted successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'An unexpected error occurred.' };
    }
}
```

---

### **Step 4: Update Hero Form Component**

**File:** `src/components/homepage/HeroSection.tsx`

**Changes:**

1. **Import server action:**
```typescript
import { submitHeroForm } from '@/app/actions/heroForm';
```

2. **Update state:**
```typescript
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
});
```

3. **Update handleSubmit:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const result = await submitHeroForm({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            serviceType: formData.service,
        });

        if (result.error) {
            alert(result.error);
            return;
        }

        // Show success
        setIsSuccess(true);
        
        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            service: "",
        });

        // Hide success after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error. Please try calling us directly.");
    } finally {
        setIsSubmitting(false);
    }
};
```

4. **Update form fields:**
```typescript
// Replace single "Full Name" field with two fields:
<div>
  <input
    type="text"
    required
    disabled={isSubmitting}
    placeholder="First Name *"
    value={formData.firstName}
    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
  />
</div>

<div>
  <input
    type="text"
    required
    disabled={isSubmitting}
    placeholder="Last Name *"
    value={formData.lastName}
    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
  />
</div>
```

---

## 📁 **Files to Create/Modify**

### **To Create:**
1. ✅ `src/app/actions/heroForm.ts` - New server action

### **To Modify:**
1. ✅ `src/app/contact/page.tsx` - Add service dropdown
2. ✅ `src/app/contact/actions.ts` - Add service_type field
3. ✅ `src/components/homepage/HeroSection.tsx` - Split name, connect to DB

### **Database:**
1. ✅ Add `service_type` column to `contact_submissions` table (nullable)

---

## ✅ **Testing Checklist**

### **Contact Form:**
- [ ] Service dropdown appears
- [ ] Service dropdown is optional
- [ ] Form submits with service type
- [ ] Form submits without service type
- [ ] Data saves to database correctly

### **Hero Form:**
- [ ] First name + Last name fields appear
- [ ] All fields are required
- [ ] Form submits to database
- [ ] Success message shows
- [ ] Form resets after submission
- [ ] Data appears in Supabase table

---

## 🎯 **Benefits**

1. ✅ **Single Database Table** - Both forms use same table
2. ✅ **Consistent Data** - Same structure for all leads
3. ✅ **Easy Management** - One place to view all submissions
4. ✅ **Service Tracking** - Know which service users are interested in
5. ✅ **Better UX** - Real submission feedback

---

## 🚀 **Ready to Implement?**

**Execution order:**
1. Create hero form server action
2. Update contact form (add service dropdown)
3. Update hero form component
4. Test both forms
5. Verify database entries

**Estimated time:** 30-45 minutes

---

**Shall I proceed with the implementation?** 

**Options:**
- **A)** Implement all changes now
- **B)** Implement step-by-step (I'll do one at a time)
- **C)** Review plan first, make adjustments

Let me know! 🚀
