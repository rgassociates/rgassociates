import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from './env';

// Singleton instance
let serverClient: SupabaseClient | null = null;

/**
 * Get or create Supabase server client (singleton)
 * 
 * This client uses the service role key for elevated permissions.
 * Only use in Server Actions, API Routes, or server-side code.
 * NEVER expose this client or its methods to the browser.
 * 
 * @returns {SupabaseClient} Configured Supabase client
 * 
 * @example
 * ```typescript
 * // In a Server Action
 * 'use server';
 * import { getServerClient } from '@/lib/supabaseServer';
 * 
 * export async function getData() {
 *   const supabase = getServerClient();
 *   const { data, error } = await supabase.from('table').select();
 *   return data;
 * }
 * ```
 */
export function getServerClient(): SupabaseClient {
    // Return cached instance if available
    if (serverClient) {
        return serverClient;
    }

    const supabaseUrl = env.supabase.url;
    const supabaseServiceKey = env.supabase.serviceRoleKey;

    if (!supabaseUrl) {
        throw new Error(
            'Missing NEXT_PUBLIC_SUPABASE_URL environment variable.\n' +
            'Add it to your .env.local file.\n' +
            'See .env.example for reference.'
        );
    }

    if (!supabaseServiceKey) {
        throw new Error(
            'Missing SUPABASE_SERVICE_ROLE_KEY environment variable.\n' +
            'This is required for server-side operations.\n' +
            'Add it to your .env.local file (never commit this key!):\n' +
            'SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here\n\n' +
            'Get it from: https://app.supabase.com/project/_/settings/api'
        );
    }

    // Validate that it's actually a service role key (basic check)
    if (supabaseServiceKey.startsWith('eyJ') && supabaseServiceKey.includes('anon')) {
        console.warn(
            '⚠️  WARNING: Using anon key instead of service role key.\n' +
            'Server-side operations may fail due to insufficient permissions.\n' +
            'Please set SUPABASE_SERVICE_ROLE_KEY in your .env.local file.'
        );
    }

    // Create and cache the client
    serverClient = createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });

    return serverClient;
}

/**
 * Legacy function name for backwards compatibility
 * @deprecated Use getServerClient() instead
 */
export const createServerSupabaseClient = getServerClient;

/**
 * Health check for Supabase server connection
 * @returns Promise<boolean> - true if connected, false otherwise
 */
export async function checkServerConnection(): Promise<boolean> {
    try {
        const client = getServerClient();
        const { error } = await client.from('contact_submissions').select('count').limit(1);
        return !error;
    } catch {
        return false;
    }
}
