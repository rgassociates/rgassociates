import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getServerClient } from '@/lib/supabaseServer';
import type { AdminUser } from '@/lib/types/admin';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Create a Supabase client for admin authentication
 * Uses Supabase SSR for proper cookie handling
 */
export async function createAdminClient() {
    const cookieStore = await cookies();

    return createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookieStore.set(name, value, options)
                    );
                } catch {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            },
        },
    });
}

/**
 * Sign in admin user with email and password
 */
export async function signInAdmin(email: string, password: string) {
    const supabase = await createAdminClient();

    // Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (authError || !authData.user) {
        return { success: false, error: authError?.message || 'Authentication failed' };
    }

    // Check if user is an active admin using service role (bypasses RLS)
    const serverClient = getServerClient();
    const { data: adminUser, error: adminError } = await serverClient
        .from('admin_users')
        .select('*')
        .eq('auth_user_id', authData.user.id)
        .eq('is_active', true)
        .single();

    if (adminError || !adminUser) {
        // Sign out if not an admin
        await supabase.auth.signOut();
        return { success: false, error: 'Unauthorized: Not an admin user' };
    }

    return {
        success: true,
        user: adminUser as AdminUser,
        session: authData.session,
    };
}

/**
 * Sign out admin user
 */
export async function signOutAdmin() {
    const supabase = await createAdminClient();
    const { error } = await supabase.auth.signOut();

    return { success: !error, error: error?.message };
}

/**
 * Get current admin user from session
 */
export async function getCurrentAdmin(): Promise<AdminUser | null> {
    const supabase = await createAdminClient();

    // Get current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
        return null;
    }

    // Get admin user details using service role (bypasses RLS)
    const serverClient = getServerClient();
    const { data: adminUser, error: adminError } = await serverClient
        .from('admin_users')
        .select('*')
        .eq('auth_user_id', session.user.id)
        .eq('is_active', true)
        .single();

    if (adminError || !adminUser) {
        return null;
    }

    return adminUser as AdminUser;
}

/**
 * Check if user is authenticated as admin
 */
export async function isAdminAuthenticated(): Promise<boolean> {
    const admin = await getCurrentAdmin();
    return admin !== null;
}

/**
 * Verify admin session and return user or redirect to login
 */
export async function requireAdmin(): Promise<AdminUser> {
    const admin = await getCurrentAdmin();

    if (!admin) {
        throw new Error('Unauthorized');
    }

    return admin;
}
