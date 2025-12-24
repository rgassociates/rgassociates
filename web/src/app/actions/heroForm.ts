'use server';

import { createServerSupabaseClient } from '@/lib/supabaseServer';
import { logger } from '@/lib/logger';
import { z } from 'zod';
import { nameSchema, phoneSchema, serviceTypeSchema, sanitizeString } from '@/lib/validation';
import { formSubmissionLimiter, getClientIP, checkRateLimit } from '@/lib/rateLimit';
import { headers } from 'next/headers';
import { isBot, HONEYPOT_ERROR_MESSAGE } from '@/lib/honeypot';

// Hero form validation schema
const heroFormSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
    phone: phoneSchema,
    serviceType: serviceTypeSchema,
    website: z.string().optional(), // Honeypot field
});

type HeroFormData = z.infer<typeof heroFormSchema>;

/**
 * Submit hero section form
 * Validates and sanitizes input before submitting to database
 */
export async function submitHeroForm(
    formData: HeroFormData
): Promise<{ success?: string; error?: string }> {
    try {
        // Check honeypot first (fastest check)
        if (isBot(formData.website)) {
            logger.warn('[Hero Form] Bot detected via honeypot');
            return { error: HONEYPOT_ERROR_MESSAGE };
        }

        // Check rate limit
        const headersList = await headers();
        const clientIP = getClientIP(headersList);
        const rateLimitResult = await checkRateLimit(clientIP, formSubmissionLimiter);

        if (!rateLimitResult.success) {
            logger.warn('[Hero Form] Rate limit exceeded:', { ip: clientIP });
            return { error: rateLimitResult.error };
        }

        // Validate input with Zod
        const validatedData = heroFormSchema.parse(formData);

        // Sanitize inputs (names are already trimmed by schema transform)
        const sanitizedData = {
            firstName: sanitizeString(validatedData.firstName),
            lastName: sanitizeString(validatedData.lastName),
            phone: validatedData.phone, // Already cleaned by schema transform
            serviceType: validatedData.serviceType,
        };

        const supabase = createServerSupabaseClient();

        const { error } = await supabase.from('contact_submissions').insert({
            first_name: sanitizedData.firstName,
            last_name: sanitizedData.lastName,
            email: null, // Hero form doesn't collect email
            phone: sanitizedData.phone,
            service_type: sanitizedData.serviceType,
            message: `Quick consultation request via homepage for ${sanitizedData.serviceType}`,
        });

        if (error) {
            logger.error('[Hero Form] Supabase error:', error);
            return { error: 'Failed to submit request. Please try again or call us directly.' };
        }

        logger.info('[Hero Form] Submission successful:', {
            serviceType: sanitizedData.serviceType,
            timestamp: new Date().toISOString(),
        });

        return { success: 'Request submitted successfully! We will contact you within 24-48 hours.' };
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Return first validation error
            const firstError = error.issues[0];
            return { error: firstError.message };
        }

        logger.error('[Hero Form] Unexpected error:', error);
        return { error: 'An unexpected error occurred. Please try calling us directly.' };
    }
}
