import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';

// Validation schema for creating an attorney
const createAttorneySchema = z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
    role: z.string().min(1, 'Role is required').max(100, 'Role too long'),
    specialization: z.string().min(1, 'Specialization is required').max(200, 'Specialization too long'),
    image_url: z.string().url('Invalid image URL').optional().nullable(),
    bio: z.string().max(1000, 'Bio too long').optional().nullable(),
    display_order: z.number().int().min(0, 'Order must be positive').default(100),
});

// GET: List all attorneys
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
        const search = searchParams.get('search'); // Search by name

        let query = supabase
            .from('attorneys')
            .select('*')
            .order('display_order', { ascending: true })
            .order('name', { ascending: true });

        // Search by name
        if (search) {
            query = query.ilike('name', `%${search}%`);
        }

        const { data: attorneys, error } = await query;

        if (error) {
            console.error('Error fetching attorneys:', error);
            return NextResponse.json({ error: 'Failed to fetch attorneys' }, { status: 500 });
        }

        return NextResponse.json({ attorneys }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/attorneys:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// POST: Create a new attorney
export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        // Validate input
        const validation = createAttorneySchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const supabase = getServerClient();

        // Create attorney
        const { data: attorney, error } = await supabase
            .from('attorneys')
            .insert([validation.data])
            .select()
            .single();

        if (error) {
            console.error('Error creating attorney:', error);
            return NextResponse.json({ error: 'Failed to create attorney' }, { status: 500 });
        }

        return NextResponse.json({ attorney }, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/admin/attorneys:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
