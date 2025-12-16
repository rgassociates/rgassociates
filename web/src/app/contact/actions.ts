'use server';

import { createServerSupabaseClient } from '@/lib/supabaseServer';

export async function submitContactForm(formData: FormData) {
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone-number') as string;
    const serviceType = formData.get('service-type') as string;
    const message = formData.get('message') as string;

    if (!firstName || !lastName || !email || !message) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        const supabase = createServerSupabaseClient();

        const { error } = await supabase.from('contact_submissions').insert({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            service_type: serviceType || null,
            message,
        });

        if (error) {
            console.error('Supabase error:', error);
            return { error: 'Failed to send message. Please try again.' };
        }

        return { success: 'Message sent successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'An unexpected error occurred.' };
    }
}
