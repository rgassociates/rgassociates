/**
 * Environment variable validation and type-safe access
 * 
 * This file validates all required environment variables at application startup
 * and provides type-safe access to them throughout the application.
 */

/**
 * Type-safe environment configuration
 */
export const env = {
    // Supabase
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },

    // EmailJS (current - to be migrated)
    emailjs: {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    },

    // Resend (pending migration)
    resend: {
        apiKey: process.env.RESEND_API_KEY,
    },

    // Upstash Redis (pending)
    upstash: {
        redisUrl: process.env.UPSTASH_REDIS_REST_URL,
        redisToken: process.env.UPSTASH_REDIS_REST_TOKEN,
    },

    // hCaptcha (pending)
    hcaptcha: {
        siteKey: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
        secretKey: process.env.HCAPTCHA_SECRET_KEY,
    },

    // Sentry (pending)
    sentry: {
        dsn: process.env.SENTRY_DSN,
        publicDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    },

    // GTM
    gtm: {
        id: process.env.NEXT_PUBLIC_GTM_ID,
    },

    // Node environment
    nodeEnv: process.env.NODE_ENV,
} as const;

/**
 * Validate required environment variables
 * Throws an error if any required variables are missing
 * 
 * Call this at application startup (in layout.tsx or middleware)
 */
export function validateRequiredEnv() {
    const required = {
        'NEXT_PUBLIC_SUPABASE_URL': env.supabase.url,
        'NEXT_PUBLIC_SUPABASE_ANON_KEY': env.supabase.anonKey,
        'SUPABASE_SERVICE_ROLE_KEY': env.supabase.serviceRoleKey,
        'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY': env.emailjs.publicKey,
        'NEXT_PUBLIC_EMAILJS_SERVICE_ID': env.emailjs.serviceId,
        'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID': env.emailjs.templateId,
    };

    const missing = Object.entries(required)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

    if (missing.length > 0) {
        throw new Error(
            `❌ Missing required environment variables:\n\n` +
            missing.map(key => `  - ${key}`).join('\n') +
            `\n\nPlease check your .env.local file and ensure all required variables are set.\n` +
            `See .env.example for reference.`
        );
    }
}

/**
 * Validate optional environment variables and log warnings
 * Call this after validateRequiredEnv()
 */
export function validateOptionalEnv() {
    const warnings: string[] = [];

    // Check for rate limiting (recommended for production)
    if (!env.upstash.redisUrl || !env.upstash.redisToken) {
        warnings.push('⚠️  Rate limiting not configured (Upstash Redis). Forms are vulnerable to spam.');
    }

    // Check for CAPTCHA (recommended for production)
    if (!env.hcaptcha.siteKey || !env.hcaptcha.secretKey) {
        warnings.push('⚠️  CAPTCHA not configured (hCaptcha). Forms are vulnerable to bots.');
    }

    // Check for error monitoring (recommended for production)
    if (!env.sentry.dsn && env.nodeEnv === 'production') {
        warnings.push('⚠️  Error monitoring not configured (Sentry). Production errors will not be tracked.');
    }

    // Check for server-side email (recommended)
    if (!env.resend.apiKey) {
        warnings.push('⚠️  Server-side email not configured (Resend). Using client-side EmailJS (not recommended).');
    }

    // Log warnings in development
    if (warnings.length > 0 && env.nodeEnv === 'development') {
        console.warn('\n' + '='.repeat(80));
        console.warn('Environment Configuration Warnings:');
        console.warn('='.repeat(80));
        warnings.forEach(warning => console.warn(warning));
        console.warn('='.repeat(80) + '\n');
    }
}

/**
 * Check if a feature is enabled based on environment variables
 */
export const features = {
    hasRateLimiting: () => !!(env.upstash.redisUrl && env.upstash.redisToken),
    hasCaptcha: () => !!(env.hcaptcha.siteKey && env.hcaptcha.secretKey),
    hasSentry: () => !!env.sentry.dsn,
    hasResend: () => !!env.resend.apiKey,
    hasGTM: () => !!env.gtm.id,
} as const;

// Validate environment variables at module load (server-side only)
if (typeof window === 'undefined') {
    try {
        validateRequiredEnv();
        validateOptionalEnv();
    } catch (error) {
        console.error(error);
        // In development, we want to see the error
        // In production, this will prevent the app from starting
        if (env.nodeEnv === 'production') {
            process.exit(1);
        }
    }
}
