import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';

// GET: List all contact submissions
export async function GET(request: NextRequest) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabase = getServerClient();
        const { searchParams } = new URL(request.url);

        // Get query parameters
        const status = searchParams.get('status'); // 'new', 'read', 'resolved', or null for all
        const search = searchParams.get('search'); // Search by name or email

        let query = supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        // Filter by status
        if (status) {
            query = query.eq('status', status);
        }

        // Search by name or email
        if (search) {
            query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`);
        }

        const { data: contacts, error } = await query;

        if (error) {
            console.error('Error fetching contacts:', error);
            return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
        }

        return NextResponse.json({ contacts }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/contacts:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
