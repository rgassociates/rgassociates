/**
 * Environment-aware logging utility
 * 
 * In development: Logs to console
 * In production: Only logs errors (info/debug are suppressed)
 * 
 * TODO: Integrate with error monitoring service (Sentry) for production
 */

const isDev = process.env.NODE_ENV === 'development';

export const logger = {
    /**
     * Log informational messages (development only)
     */
    info: (...args: any[]) => {
        if (isDev) {
            console.log('[INFO]', ...args);
        }
    },

    /**
     * Log error messages (always logged)
     * TODO: Send to Sentry in production
     */
    error: (...args: any[]) => {
        console.error('[ERROR]', ...args);
        // TODO: Integrate Sentry
        // if (!isDev) {
        //   Sentry.captureException(args[0]);
        // }
    },

    /**
     * Log warning messages (development only)
     */
    warn: (...args: any[]) => {
        if (isDev) {
            console.warn('[WARN]', ...args);
        }
    },

    /**
     * Log debug messages (development only)
     */
    debug: (...args: any[]) => {
        if (isDev) {
            console.debug('[DEBUG]', ...args);
        }
    },
};
