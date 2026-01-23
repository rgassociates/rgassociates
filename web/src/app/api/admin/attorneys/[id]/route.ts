import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';

// Validation schema for updating an attorney
const updateAttorneySchema = z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name too long').optional(),
    role: z.string().min(1, 'Role is required').max(100, 'Role too long').optional(),
    specialization: z.string().min(1, 'Specialization is required').max(200, 'Specialization too long').optional(),
    image_url: z.string().url('Invalid image URL').optional().nullable(),
    bio: z.string().max(1000, 'Bio too long').optional().nullable(),
    display_order: z.number().int().min(0, 'Order must be positive').optional(),
});

// GET: Get a single attorney
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabase = getServerClient();

        const { data: attorney, error } = await supabase
            .from('attorneys')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching attorney:', error);
            return NextResponse.json({ error: 'Attorney not found' }, { status: 404 });
        }

        return NextResponse.json({ attorney }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/attorneys/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// PUT: Update an attorney
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        // Validate input
        const validation = updateAttorneySchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const supabase = getServerClient();

        const { data: attorney, error } = await supabase
            .from('attorneys')
            .update({
                ...validation.data,
                updated_at: new Date().toISOString(),
            })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Error updating attorney:', error);
            return NextResponse.json({ error: 'Failed to update attorney' }, { status: 500 });
        }

        return NextResponse.json({ attorney }, { status: 200 });
    } catch (error) {
        console.error('Error in PUT /api/admin/attorneys/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// DELETE: Delete an attorney
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabase = getServerClient();

        const { error } = await supabase
            .from('attorneys')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting attorney:', error);
            return NextResponse.json({ error: 'Failed to delete attorney' }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error in DELETE /api/admin/attorneys/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
