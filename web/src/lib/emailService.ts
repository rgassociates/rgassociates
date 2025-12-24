import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailConfig';
import { logger } from './logger';

// Initialize EmailJS with your public key
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

/**
 * Send email notification using EmailJS
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

        logger.info('📧 Sending email with params:', emailParams);

        // Send email via EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            emailParams
        );

        if (response.status === 200) {
            logger.info('✅ Email sent successfully:', response);
            return { success: true };
        } else {
            logger.error('❌ Email send failed:', response);
            return { success: false, error: 'Failed to send email' };
        }
    } catch (error) {
        logger.error('❌ EmailJS Error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};
