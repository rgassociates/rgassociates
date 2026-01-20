import { NextRequest, NextResponse } from 'next/server';
import { getServerClient } from '@/lib/supabaseServer';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import { z } from 'zod';

// Validation schema for creating a blog
const createBlogSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
    slug: z.string().min(1, 'Slug is required').max(200, 'Slug too long'),
    cover_image: z.string().url('Invalid image URL'),
    short_description: z.string().min(1, 'Short description is required').max(500, 'Description too long'),
    content: z.string().min(1, 'Content is required'),
    author: z.string().min(1, 'Author is required').max(100, 'Author name too long'),
    is_published: z.boolean().default(false),
    seo_title: z.string().max(200, 'SEO title too long').optional().nullable(),
    seo_description: z.string().max(500, 'SEO description too long').optional().nullable(),
    keywords: z.array(z.string()).optional().nullable(),
    canonical_url: z.string().url('Invalid canonical URL').optional().nullable(),
});

// GET: List all blogs
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
        const status = searchParams.get('status'); // 'published', 'draft', or null for all
        const search = searchParams.get('search'); // Search by title

        let query = supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        // Filter by status
        if (status === 'published') {
            query = query.eq('is_published', true);
        } else if (status === 'draft') {
            query = query.eq('is_published', false);
        }

        // Search by title
        if (search) {
            query = query.ilike('title', `%${search}%`);
        }

        const { data: blogs, error } = await query;

        if (error) {
            console.error('Error fetching blogs:', error);
            return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
        }

        return NextResponse.json({ blogs }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admin/blogs:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// POST: Create a new blog
export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const admin = await getCurrentAdmin();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        // Validate input
        const validation = createBlogSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const supabase = getServerClient();

        // Check if slug already exists
        const { data: existingBlog } = await supabase
            .from('blogs')
            .select('id')
            .eq('slug', validation.data.slug)
            .single();

        if (existingBlog) {
            return NextResponse.json(
                { error: 'A blog with this slug already exists' },
                { status: 400 }
            );
        }

        // Create blog
        const { data: blog, error } = await supabase
            .from('blogs')
            .insert([validation.data])
            .select()
            .single();

        if (error) {
            console.error('Error creating blog:', error);
            return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
        }

        return NextResponse.json({ blog }, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/admin/blogs:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
