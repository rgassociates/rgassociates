import { NextRequest, NextResponse } from 'next/server';
import { signInAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';
import { loginRateLimit, failedLoginRateLimit, getClientIP, checkRateLimit } from '@/lib/rateLimit';

// Validation schema
const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validation = loginSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const { email, password } = validation.data;

        // Rate limiting - Check IP-based rate limit first
        const clientIP = getClientIP(request.headers);
        const ipRateLimit = await checkRateLimit(clientIP, loginRateLimit);

        if (!ipRateLimit.success) {
            return NextResponse.json(
                {
                    error: ipRateLimit.error,
                    retryAfter: ipRateLimit.reset ? Math.ceil((ipRateLimit.reset - Date.now()) / 1000) : undefined
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': ipRateLimit.reset ? String(Math.ceil((ipRateLimit.reset - Date.now()) / 1000)) : '900',
                        'X-RateLimit-Limit': String(ipRateLimit.limit),
                        'X-RateLimit-Remaining': String(ipRateLimit.remaining),
                        'X-RateLimit-Reset': String(ipRateLimit.reset),
                    }
                }
            );
        }

        // Check email-based failed login rate limit
        const emailRateLimit = await checkRateLimit(email, failedLoginRateLimit);

        if (!emailRateLimit.success) {
            return NextResponse.json(
                {
                    error: 'Too many failed login attempts for this account. Please try again later.',
                    retryAfter: emailRateLimit.reset ? Math.ceil((emailRateLimit.reset - Date.now()) / 1000) : undefined
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': emailRateLimit.reset ? String(Math.ceil((emailRateLimit.reset - Date.now()) / 1000)) : '3600',
                    }
                }
            );
        }

        // Attempt sign in
        const result = await signInAdmin(email, password);

        if (!result.success) {
            // Track failed login attempt (don't await to not slow down response)
            failedLoginRateLimit.limit(email).catch(err =>
                console.error('Failed to track failed login:', err)
            );

            return NextResponse.json(
                { error: result.error || 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Supabase SSR automatically handles cookie setting
        // Just return success response
        return NextResponse.json(
            {
                success: true,
                user: {
                    id: result.user!.id,
                    email: result.user!.email,
                    full_name: result.user!.full_name,
                    role: result.user!.role,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
