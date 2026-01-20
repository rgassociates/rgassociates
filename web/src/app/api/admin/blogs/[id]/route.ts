import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';

// Validation schema for updating a blog
const updateBlogSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200, 'Title too long').optional(),
    slug: z.string().min(1, 'Slug is required').max(200, 'Slug too long').optional(),
    cover_image: z.string().url('Invalid image URL').optional(),
    short_description: z.string().min(1, 'Short description is required').max(500, 'Description too long').optional(),
    content: z.string().min(1, 'Content is required').optional(),
    author: z.string().min(1, 'Author is required').max(100, 'Author name too long').optional(),
    is_published: z.boolean().optional(),
    seo_title: z.string().max(200, 'SEO title too long').optional().nullable(),
    seo_description: z.string().max(500, 'SEO description too long').optional().nullable(),
    keywords: z.array(z.string()).optional().nullable(),
    canonical_url: z.string().url('Invalid canonical URL').optional().nullable(),
});

// GET: Get a single blog by ID
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

        const { data: blog, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/blogs/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// PATCH: Update a blog by ID
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
        const validation = updateBlogSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const supabase = getServerClient();

        // If slug is being updated, check for duplicates
        if (validation.data.slug) {
            const { data: existingBlog } = await supabase
                .from('blogs')
                .select('id')
                .eq('slug', validation.data.slug)
                .neq('id', id)
                .single();

            if (existingBlog) {
                return NextResponse.json(
                    { error: 'A blog with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        // Update blog
        const { data: blog, error } = await supabase
            .from('blogs')
            .update(validation.data)
            .eq('id', id)
            .select()
            .single();

        if (error || !blog) {
            console.error('Error updating blog:', error);
            return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
        }

        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.error('Error in PATCH /api/admin/blogs/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// DELETE: Delete a blog by ID
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
            .from('blogs')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting blog:', error);
            return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error in DELETE /api/admin/blogs/[id]:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
