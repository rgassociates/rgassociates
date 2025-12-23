// EmailJS Configuration
// Values are loaded from environment variables (.env.local)

export const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (found in Account > General)
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',

    // Your Email Service ID (found in Email Services)
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',

    // Your Email Template ID (found in Email Templates)
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
};
