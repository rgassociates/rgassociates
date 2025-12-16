'use server';

import { createServerSupabaseClient } from '@/lib/supabaseServer';

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

    // Basic phone validation
    if (phone.length < 10) {
        return { error: 'Please enter a valid phone number.' };
    }

    try {
        const supabase = createServerSupabaseClient();

        const { error } = await supabase.from('contact_submissions').insert({
            first_name: firstName,
            last_name: lastName,
            email: null, // Hero form doesn't collect email
            phone,
            service_type: serviceType,
            message: `Quick consultation request via homepage for ${serviceType}`,
        });

        if (error) {
            console.error('Supabase error:', error);
            return { error: 'Failed to submit request. Please try again or call us directly.' };
        }

        return { success: 'Request submitted successfully! We will contact you within 24-48 hours.' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'An unexpected error occurred. Please try calling us directly.' };
    }
}
