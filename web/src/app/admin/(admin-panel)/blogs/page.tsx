import Link from 'next/link';
import { requireAdmin } from '@/lib/auth/admin-auth';
import { getServerClient } from '@/lib/supabaseServer';
import { BlogsFilters, TogglePublishButton, DeleteBlogButton } from './ClientComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string; status?: string }>;
}) {
    // Ensure user is admin
    await requireAdmin();

    const resolvedParams = await searchParams;
    const search = resolvedParams.search || '';
    const status = resolvedParams.status || 'all';

    const supabase = getServerClient();

    let query = supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

    if (status !== 'all') {
        const isPublished = status === 'published';
        query = query.eq('is_published', isPublished);
    }

    if (search) {
        query = query.or(`title.ilike.%${search}%,slug.ilike.%${search}%,author.ilike.%${search}%`);
    }

    const { data: blogs, error } = await query;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
                    <p className="text-gray-600 mt-1">Manage your blog posts</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="inline-flex items-center px-4 py-2 bg-[#D4A646] text-white rounded-lg hover:bg-[#C8A34E] transition-colors shadow-md"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Blog
                </Link>
            </div>

            {/* Filters */}
            <BlogsFilters />

            {/* Blogs Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {error ? (
                    <div className="p-8 text-center text-red-500">
                        Error loading blogs: {error.message}
                    </div>
                ) : !blogs || blogs.length === 0 ? (
                    <div className="p-8 text-center text-gray-600">
                        No blogs found
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Author
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                            <div className="text-sm text-gray-500">/{blog.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{blog.author}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.is_published
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-orange-100 text-orange-800'
                                                    }`}
                                            >
                                                {blog.is_published ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {blog.published_at 
                                                ? new Date(blog.published_at).toLocaleDateString() 
                                                : new Date(blog.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <TogglePublishButton id={blog.id} isPublished={blog.is_published} />
                                                <Link
                                                    href={`/admin/blogs/${blog.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                                <DeleteBlogButton id={blog.id} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
