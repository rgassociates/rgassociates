import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Create rate limiter instances for different use cases

/**
 * Rate limiter for form submissions
 * Allows 3 submissions per 10 minutes per IP
 */
export const formSubmissionLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "10 m"),
    analytics: true,
    prefix: "@rg-legal/form-submission",
});

/**
 * Rate limiter for contact form (more restrictive)
 * Allows 2 submissions per 15 minutes per IP
 */
export const contactFormLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "15 m"),
    analytics: true,
    prefix: "@rg-legal/contact-form",
});

/**
 * Rate limiter for general API endpoints
 * Allows 10 requests per minute per IP
 */
export const apiLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "1 m"),
    analytics: true,
    prefix: "@rg-legal/api",
});

/**
 * Rate limiter for admin login attempts
 * Allows 5 login attempts per 15 minutes per IP
 */
export const loginRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    analytics: true,
    prefix: "@rg-legal/admin-login",
});

/**
 * Stricter rate limiter for failed login attempts
 * Allows only 3 failed attempts per hour per email
 */
export const failedLoginRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    analytics: true,
    prefix: "@rg-legal/failed-login",
});

/**
 * Helper function to get client IP from headers
 * Works with various hosting providers (Vercel, Cloudflare, etc.)
 */
export function getClientIP(headers: Headers): string {
    // Try various headers in order of preference
    const forwardedFor = headers.get("x-forwarded-for");
    if (forwardedFor) {
        // x-forwarded-for can contain multiple IPs, take the first one
        return forwardedFor.split(",")[0].trim();
    }

    const realIP = headers.get("x-real-ip");
    if (realIP) {
        return realIP;
    }

    const cfConnectingIP = headers.get("cf-connecting-ip");
    if (cfConnectingIP) {
        return cfConnectingIP;
    }

    // Fallback to a default identifier if no IP is found
    return "unknown";
}

// In-memory fallback for when Redis is unavailable
const memoryStore = new Map<string, { count: number; resetTime: number }>();
const FALLBACK_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const FALLBACK_LIMIT = 5; // 5 requests per window

/**
 * Check rate limit and return appropriate response
 * @param identifier - Unique identifier (usually IP address)
 * @param limiter - Rate limiter instance to use
 * @returns Object with success status and optional error message
 */
export async function checkRateLimit(
    identifier: string,
    limiter: Ratelimit
): Promise<{
    success: boolean;
    error?: string;
    limit?: number;
    remaining?: number;
    reset?: number;
}> {
    try {
        const { success, limit, remaining, reset } = await limiter.limit(identifier);

        if (!success) {
            const resetDate = new Date(reset);
            const minutesUntilReset = Math.ceil((reset - Date.now()) / 60000);

            return {
                success: false,
                error: `Rate limit exceeded. Please try again in ${minutesUntilReset} minute${minutesUntilReset > 1 ? 's' : ''}.`,
                limit,
                remaining,
                reset,
            };
        }

        return {
            success: true,
            limit,
            remaining,
            reset,
        };
    } catch (error) {
        // While Redis is down, we use a simple in-memory fallback
        console.warn("Redis rate limiting failed, switching to in-memory fallback:", error);

        const now = Date.now();
        const record = memoryStore.get(identifier);

        // Clean up expired entry or create new one
        if (!record || now > record.resetTime) {
            memoryStore.set(identifier, {
                count: 1,
                resetTime: now + FALLBACK_WINDOW_MS
            });
            return {
                success: true,
                limit: FALLBACK_LIMIT,
                remaining: FALLBACK_LIMIT - 1,
                reset: now + FALLBACK_WINDOW_MS
            };
        }

        // Check limit
        if (record.count >= FALLBACK_LIMIT) {
            const minutesUntilReset = Math.ceil((record.resetTime - now) / 60000);
            return {
                success: false,
                error: `Rate limit exceeded. Please try again in ${minutesUntilReset} minute${minutesUntilReset > 1 ? 's' : ''}.`,
                limit: FALLBACK_LIMIT,
                remaining: 0,
                reset: record.resetTime
            };
        }

        // Increment count
        record.count += 1;
        return {
            success: true,
            limit: FALLBACK_LIMIT,
            remaining: FALLBACK_LIMIT - record.count,
            reset: record.resetTime
        };
    }
}
