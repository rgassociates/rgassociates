import { EMAILJS_CONFIG } from './emailConfig';
import { logger } from './logger';

interface EmailParams {
    first_name: string;
    last_name: string;
    email: string | null;
    phone: string;
    service_type: string;
    message: string;
    form_type: 'hero' | 'contact';
}

/**
 * Send email notification using Server-Side API (hides secrets)
 * @param params - Email parameters
 * @returns Promise with success/error status
 */
export const sendEmailNotification = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
    try {
        // Add submission timestamp and handle null/empty values
        const emailParams = {
            first_name: params.first_name || 'Not provided',
            last_name: params.last_name || 'Not provided',
            email: params.email || 'Not provided',
            phone: params.phone || 'Not provided',
            message: params.message || 'No message provided',
            form_type: params.form_type,
            submission_time: new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'long'
            }),
            // Format service type for better readability
            service_type: params.service_type
                ? params.service_type
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                : 'General Inquiry',
        };

        logger.info('📧 Sending email request to server API...', emailParams);

        // Send email via our Next.js API route
        const response = await fetch('/api/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: EMAILJS_CONFIG.SERVICE_ID,
                template_id: EMAILJS_CONFIG.TEMPLATE_ID,
                user_id: EMAILJS_CONFIG.PUBLIC_KEY, // Public key is still needed as user_id
                template_params: emailParams,
            }),
        });

        if (response.ok) {
            logger.info('✅ Email sent successfully via server');
            return { success: true };
        } else {
            const errorData = await response.json();
            logger.error('❌ Server failed to send email:', errorData);
            return { success: false, error: errorData.error || 'Failed to send email' };
        }
    } catch (error) {
        logger.error('❌ Email Service Error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};
