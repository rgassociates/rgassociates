'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import type { Blog } from '@/lib/types/admin';
import ImageUpload from '@/components/admin/ImageUpload';

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface BlogFormProps {
    blog?: Blog;
    mode: 'create' | 'edit';
}

export default function BlogForm({ blog, mode }: BlogFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Form state
    const [formData, setFormData] = useState({
        title: blog?.title || '',
        slug: blog?.slug || '',
        cover_image: blog?.cover_image || '',
        short_description: blog?.short_description || '',
        content: blog?.content || '',
        author: blog?.author || '',
        is_published: blog?.is_published ?? false,
        seo_title: blog?.seo_title || '',
        seo_description: blog?.seo_description || '',
        keywords: blog?.keywords?.join(', ') || '',
        canonical_url: blog?.canonical_url || '',
    });

    // Auto-generate slug from title
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleTitleChange = (title: string) => {
        setFormData(prev => ({
            ...prev,
            title,
            slug: mode === 'create' ? generateSlug(title) : prev.slug,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Prepare data
            const submitData = {
                ...formData,
                keywords: formData.keywords
                    ? formData.keywords.split(',').map(k => k.trim()).filter(k => k)
                    : null,
                seo_title: formData.seo_title || null,
                seo_description: formData.seo_description || null,
                canonical_url: formData.canonical_url || null,
            };

            const url = mode === 'create'
                ? '/api/admin/blogs'
                : `/api/admin/blogs/${blog?.id}`;

            const method = mode === 'create' ? 'POST' : 'PATCH';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Failed to save blog');
                setLoading(false);
                return;
            }

            // Redirect to blogs list
            router.push('/admin/blogs');
            router.refresh();
        } catch (err) {
            console.error('Submit error:', err);
            setError('An unexpected error occurred');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="Enter blog title"
                    />
                </div>

                {/* Slug */}
                <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                        Slug * <span className="text-xs text-gray-500">(URL-friendly version)</span>
                    </label>
                    <input
                        type="text"
                        id="slug"
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="blog-post-slug"
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                        Author *
                    </label>
                    <input
                        type="text"
                        id="author"
                        required
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="Author name"
                    />
                </div>

                {/* Cover Image */}
                <div>
                    {/* Cover Image Upload & URL */}
                    <div className="space-y-4">
                        <ImageUpload
                            bucket="blogs"
                            onUploadComplete={(url: string) => setFormData(prev => ({ ...prev, cover_image: url }))}
                            label="Upload Cover Image"
                        />

                        <div>
                            <label htmlFor="cover_image" className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Image URL *
                            </label>
                            <input
                                type="url"
                                id="cover_image"
                                required
                                readOnly
                                value={formData.cover_image}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600 focus:ring-0"
                                placeholder="Image URL will appear here after upload"
                            />
                        </div>
                    </div>
                </div>

                {/* Short Description */}
                <div>
                    <label htmlFor="short_description" className="block text-sm font-medium text-gray-700 mb-2">
                        Short Description *
                    </label>
                    <textarea
                        id="short_description"
                        required
                        rows={3}
                        value={formData.short_description}
                        onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="Brief description for preview"
                    />
                </div>

                {/* Content */}
                <div data-color-mode="light">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                        Content *
                    </label>
                    <div className="prose-editor">
                        <MDEditor
                            value={formData.content}
                            onChange={(value: string | undefined) => setFormData({ ...formData, content: value || '' })}
                            height={400}
                            preview="edit"
                        />
                    </div>
                </div>

                {/* Published Status */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="is_published"
                        checked={formData.is_published}
                        onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                        className="h-4 w-4 text-[#D4A646] focus:ring-[#D4A646] border-gray-300 rounded"
                    />
                    <label htmlFor="is_published" className="ml-2 block text-sm text-gray-900">
                        Publish immediately
                    </label>
                </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings (Optional)</h3>

                {/* SEO Title */}
                <div>
                    <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 mb-2">
                        SEO Title
                    </label>
                    <input
                        type="text"
                        id="seo_title"
                        value={formData.seo_title}
                        onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="Custom title for search engines"
                    />
                </div>

                {/* SEO Description */}
                <div>
                    <label htmlFor="seo_description" className="block text-sm font-medium text-gray-700 mb-2">
                        SEO Description
                    </label>
                    <textarea
                        id="seo_description"
                        rows={3}
                        value={formData.seo_description}
                        onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="Custom description for search engines"
                    />
                </div>

                {/* Keywords */}
                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">
                        Keywords <span className="text-xs text-gray-500">(comma-separated)</span>
                    </label>
                    <input
                        type="text"
                        id="keywords"
                        value={formData.keywords}
                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="legal, law, attorney"
                    />
                </div>

                {/* Canonical URL */}
                <div>
                    <label htmlFor="canonical_url" className="block text-sm font-medium text-gray-700 mb-2">
                        Canonical URL
                    </label>
                    <input
                        type="url"
                        id="canonical_url"
                        value={formData.canonical_url}
                        onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent"
                        placeholder="https://example.com/original-post"
                    />
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end space-x-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    disabled={loading}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#D4A646] text-white rounded-lg hover:bg-[#C8A34E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Saving...' : mode === 'create' ? 'Create Blog' : 'Update Blog'}
                </button>
            </div>
        </form>
    );
}
