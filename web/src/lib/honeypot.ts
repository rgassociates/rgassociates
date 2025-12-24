/**
 * Honeypot Utility for Bot Detection
 * 
 * A honeypot is an invisible form field that real users won't see or fill,
 * but bots will automatically fill. If the field has a value, it's a bot.
 */

/**
 * Standard honeypot field name
 * Using "website" as it's a common field bots look for
 */
export const HONEYPOT_FIELD_NAME = 'website';

/**
 * Validate honeypot field
 * Returns true if submission appears to be from a bot
 * 
 * @param honeypotValue - Value from the honeypot field
 * @returns true if bot detected, false if legitimate user
 */
export function isBot(honeypotValue: string | null | undefined): boolean {
    // If honeypot field has any value, it's a bot
    return honeypotValue !== null && honeypotValue !== undefined && honeypotValue.trim() !== '';
}

/**
 * Get honeypot field props for forms
 * Returns all necessary attributes for the honeypot input field
 */
export function getHoneypotProps() {
    return {
        type: 'text' as const,
        name: HONEYPOT_FIELD_NAME,
        tabIndex: -1,
        autoComplete: 'off' as const,
        'aria-hidden': 'true' as const,
        style: {
            position: 'absolute' as const,
            left: '-9999px',
            opacity: 0,
            pointerEvents: 'none' as const,
            height: '0',
            width: '0',
        },
    };
}

/**
 * Honeypot error message
 * Generic message to not reveal the honeypot mechanism
 */
export const HONEYPOT_ERROR_MESSAGE = 'Invalid submission. Please try again.';
