import { notFound } from 'next/navigation';
import { getServerClient } from '@/lib/supabaseServer';
import BlogForm from '@/components/admin/BlogForm';
import type { Blog } from '@/lib/types/admin';

async function getBlog(id: string): Promise<Blog | null> {
    const supabase = getServerClient();

    const { data: blog, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !blog) {
        return null;
    }

    return blog as Blog;
}

export default async function EditBlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Edit Blog</h1>
                <p className="text-gray-600 mt-1">Update blog post details</p>
            </div>

            <BlogForm blog={blog} mode="edit" />
        </div>
    );
}
