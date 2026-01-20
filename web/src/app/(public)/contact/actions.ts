'use server';

import { createServerSupabaseClient } from '@/lib/supabaseServer';
import { logger } from '@/lib/logger';
import { z } from 'zod';
import { nameSchema, emailSchema, phoneSchema, serviceTypeSchema, messageSchema, sanitizeString } from '@/lib/validation';
import { contactFormLimiter, getClientIP, checkRateLimit } from '@/lib/rateLimit';
import { headers } from 'next/headers';
import { isBot, HONEYPOT_ERROR_MESSAGE, HONEYPOT_FIELD_NAME } from '@/lib/honeypot';

// Contact form validation schema
const contactFormSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    phone: phoneSchema.optional(),
    serviceType: serviceTypeSchema.optional(),
    message: messageSchema,
    website: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Submit contact form
 * Validates and sanitizes input before submitting to database
 */
export async function submitContactForm(
    formData: FormData
): Promise<{ success?: string; error?: string }> {
    try {
        // Check honeypot first (fastest check)
        const honeypotValue = formData.get(HONEYPOT_FIELD_NAME);
        if (isBot(honeypotValue as string)) {
            logger.warn('[Contact Form] Bot detected via honeypot');
            return { error: HONEYPOT_ERROR_MESSAGE };
        }

        // Check rate limit
        const headersList = await headers();
        const clientIP = getClientIP(headersList);
        const rateLimitResult = await checkRateLimit(clientIP, contactFormLimiter);

        if (!rateLimitResult.success) {
            logger.warn('[Contact Form] Rate limit exceeded:', { ip: clientIP });
            return { error: rateLimitResult.error };
        }

        // Extract form data
        const rawData = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            phone: formData.get('phone-number') || undefined,
            serviceType: formData.get('service-type') || undefined,
            message: formData.get('message'),
            website: honeypotValue as string | undefined, // Include for validation
        };

        // Validate with Zod
        const validatedData = contactFormSchema.parse(rawData);

        // Sanitize inputs
        const sanitizedData = {
            firstName: sanitizeString(validatedData.firstName),
            lastName: sanitizeString(validatedData.lastName),
            email: validatedData.email, // Already cleaned by schema transform
            phone: validatedData.phone || null,
            serviceType: validatedData.serviceType || null,
            message: sanitizeString(validatedData.message),
        };

        const supabase = createServerSupabaseClient();

        const { error } = await supabase.from('contact_submissions').insert({
            first_name: sanitizedData.firstName,
            last_name: sanitizedData.lastName,
            email: sanitizedData.email,
            phone: sanitizedData.phone,
            service_type: sanitizedData.serviceType,
            message: sanitizedData.message,
        });

        if (error) {
            logger.error('[Contact Form] Supabase error:', error);
            return { error: 'Failed to send message. Please try again.' };
        }

        logger.info('[Contact Form] Submission successful:', {
            email: sanitizedData.email,
            timestamp: new Date().toISOString(),
        });

        return { success: 'Message sent successfully!' };
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Return first validation error
            const firstError = error.issues[0];
            return { error: firstError.message };
        }

        logger.error('[Contact Form] Unexpected error:', error);
        return { error: 'An unexpected error occurred.' };
    }
}
