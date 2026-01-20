'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Blog } from '@/lib/types/admin';

export default function BlogsPage() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
    const [search, setSearch] = useState('');
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogs();
    }, [filter, search]);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (filter !== 'all') params.append('status', filter);
            if (search) params.append('search', search);

            const response = await fetch(`/api/admin/blogs?${params}`);
            const data = await response.json();

            if (response.ok) {
                setBlogs(data.blogs || []);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        setDeleteId(id);
        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBlogs(blogs.filter(b => b.id !== id));
            } else {
                alert('Failed to delete blog');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('An error occurred');
        } finally {
            setDeleteId(null);
        }
    };

    const handleTogglePublish = async (blog: Blog) => {
        try {
            const response = await fetch(`/admin/blogs/${blog.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_published: !blog.is_published }),
            });

            if (response.ok) {
                fetchBlogs();
            } else {
                alert('Failed to update blog status');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('An error occurred');
        }
    };

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
            <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all'
                                    ? 'bg-[#D4A646] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('published')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'published'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Published
                        </button>
                        <button
                            onClick={() => setFilter('draft')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'draft'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Drafts
                        </button>
                    </div>
                </div>
            </div>

            {/* Blogs Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4A646]"></div>
                        <p className="mt-2 text-gray-600">Loading blogs...</p>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="p-8 text-center">
                        <p className="text-gray-600">No blogs found</p>
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
                                        Published
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
                                            {new Date(blog.published_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleTogglePublish(blog)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                    title={blog.is_published ? 'Unpublish' : 'Publish'}
                                                >
                                                    {blog.is_published ? '👁️' : '📝'}
                                                </button>
                                                <Link
                                                    href={`/admin/blogs/${blog.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    disabled={deleteId === blog.id}
                                                    className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                                >
                                                    {deleteId === blog.id ? 'Deleting...' : 'Delete'}
                                                </button>
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
