'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function BlogsFilters() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const currentFilter = searchParams.get('status') || 'all';

    const updateFilter = (newFilter: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newFilter !== 'all') {
            params.set('status', newFilter);
        } else {
            params.delete('status');
        }
        router.push(`/admin/blogs?${params.toString()}`);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        router.push(`/admin/blogs?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Status Filter */}
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => updateFilter('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentFilter === 'all'
                                ? 'bg-[#D4A646] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => updateFilter('published')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentFilter === 'published'
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Published
                    </button>
                    <button
                        onClick={() => updateFilter('draft')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentFilter === 'draft'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Drafts
                    </button>
                </div>
            </div>
        </div>
    );
}

export function TogglePublishButton({ id, isPublished }: { id: string, isPublished: boolean }) {
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState(false);

    const handleTogglePublish = async () => {
        setIsUpdating(true);
        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_published: !isPublished }),
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to update blog status');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('An error occurred');
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <button
            onClick={handleTogglePublish}
            disabled={isUpdating}
            className="text-blue-600 hover:text-blue-900 disabled:opacity-50"
            title={isPublished ? 'Unpublish' : 'Publish'}
        >
            {isPublished ? '👁️' : '📝'}
        </button>
    );
}

export function DeleteBlogButton({ id }: { id: string }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this blog?')) return;
        
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete blog');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('An error occurred');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-red-600 hover:text-red-900 disabled:opacity-50"
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    );
}
