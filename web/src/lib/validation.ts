/**
 * Shared validation schemas and utilities
 * 
 * Uses Zod for runtime type validation and validator for format checking
 */

import { z } from 'zod';
import validator from 'validator';

/**
 * Name validation schema
 * - Minimum 2 characters
 * - Maximum 50 characters
 * - Only letters and spaces allowed
 */
export const nameSchema = z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces')
    .transform(val => val.trim());

/**
 * Phone number validation schema (Indian mobile numbers)
 * - Must be a valid Indian mobile number
 * - Accepts formats: 9876543210, +919876543210, 09876543210
 */
export const phoneSchema = z.string()
    .refine(val => {
        // Remove all non-digits for validation
        const cleaned = val.replace(/\D/g, '');
        // Indian mobile numbers are 10 digits
        return cleaned.length === 10 || cleaned.length === 12;
    }, {
        message: 'Please enter a valid 10-digit Indian mobile number'
    })
    .refine(val => validator.isMobilePhone(val, 'en-IN'), {
        message: 'Please enter a valid Indian mobile number'
    })
    .transform(val => val.replace(/\D/g, '')); // Remove non-digits

/**
 * Email validation schema
 * - Must be a valid email format
 * - Uses validator library for comprehensive checking
 */
export const emailSchema = z.string()
    .email('Please enter a valid email address')
    .refine(val => validator.isEmail(val), {
        message: 'Please enter a valid email address'
    })
    .transform(val => val.toLowerCase().trim());

/**
 * Service type validation schema
 * - Must be one of the predefined service types
 */
export const serviceTypeSchema = z.enum([
    'consultation',
    'documentation',
    'notice',
    'litigation',
    'research',
    'title-search',
    'document-registration'
], {
    message: 'Please select a valid service type'
});

/**
 * Message validation schema
 * - Minimum 10 characters
 * - Maximum 1000 characters
 * - Must have at least 10 non-whitespace characters
 */
export const messageSchema = z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .refine(val => val.trim().length >= 10, {
        message: 'Message must contain at least 10 non-whitespace characters'
    })
    .transform(val => val.trim());

/**
 * Sanitize a string to prevent XSS attacks
 * Simple regex-based sanitization (serverless-compatible)
 * 
 * @param input - The string to sanitize
 * @returns Sanitized string safe for display
 */
export function sanitizeString(input: string): string {
    if (!input) return '';

    return input
        .trim()
        // Remove HTML tags
        .replace(/<[^>]*>/g, '')
        // Remove script tags and content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        // Remove event handlers
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        // Remove javascript: protocol
        .replace(/javascript:/gi, '')
        // Remove data: protocol
        .replace(/data:/gi, '')
        // Normalize whitespace
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Sanitize form data object
 * Sanitizes all string values in the object
 * 
 * @param data - Object with string values to sanitize
 * @param fields - Array of field names to sanitize
 * @returns Sanitized object
 */
export function sanitizeFormData<T extends Record<string, any>>(
    data: T,
    fields: (keyof T)[]
): T {
    const sanitized = { ...data };

    for (const field of fields) {
        if (typeof sanitized[field] === 'string') {
            sanitized[field] = sanitizeString(sanitized[field] as string) as T[keyof T];
        }
    }

    return sanitized;
}
