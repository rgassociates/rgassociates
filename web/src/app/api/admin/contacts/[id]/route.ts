import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';

// Validation schema for updating contact status
const updateContactSchema = z.object({
    status: z.enum(['new', 'read', 'resolved']),
});

// GET: Get a single contact by ID
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const supabase = getServerClient();

        const { data: contact, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !contact) {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        }

        return NextResponse.json({ contact }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/contacts/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// PATCH: Update contact status
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();

        // Validate input
        const validation = updateContactSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const supabase = getServerClient();

        // Update contact status
        const { data: contact, error } = await supabase
            .from('contact_submissions')
            .update({ status: validation.data.status })
            .eq('id', id)
            .select()
            .single();

        if (error || !contact) {
            console.error('Error updating contact:', error);
            return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
        }

        return NextResponse.json({ contact }, { status: 200 });
    } catch (error) {
        console.error('Error in PATCH /api/admin/contacts/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// DELETE: Delete a contact by ID
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const supabase = getServerClient();

        const { error } = await supabase
            .from('contact_submissions')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting contact:', error);
            return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error in DELETE /api/admin/contacts/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
