'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

export default function NewAttorneyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Form State
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [bio, setBio] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [displayOrder, setDisplayOrder] = useState(100);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/admin/attorneys', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    role,
                    specialization,
                    bio,
                    image_url: imageUrl || null,
                    display_order: displayOrder
                }),
            });

            const data = await response.json();

            if (response.ok) {
                router.push('/admin/attorneys');
                router.refresh();
            } else {
                setError(data.error || 'Failed to create attorney');
            }
        } catch (err) {
            setError('An unexpected error occurred');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/attorneys"
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                        ⬅️
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">Add New Attorney</h1>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm border border-red-200">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Details */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646]/50 focus:border-[#D4A646]"
                                    placeholder="e.g. Rajesh Gupta"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Role / Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646]/50 focus:border-[#D4A646]"
                                    placeholder="e.g. Senior Partner"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization *</label>
                                <input
                                    type="text"
                                    required
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646]/50 focus:border-[#D4A646]"
                                    placeholder="e.g. Corporate Law"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={displayOrder}
                                    onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646]/50 focus:border-[#D4A646]"
                                    placeholder="100"
                                />
                                <p className="text-xs text-gray-500 mt-1">Lower numbers appear first. Default is 100.</p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="space-y-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>

                            {/* Preview */}
                            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 relative group">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="Preview"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-400 p-4 text-center">
                                        <span className="text-4xl mb-2">👤</span>
                                        <span className="text-sm">No image uploaded</span>
                                    </div>
                                )}
                            </div>

                            <ImageUpload
                                bucket="attorneys"
                                label="Upload Image"
                                onUploadComplete={(url) => setImageUrl(url)}
                            />
                            <p className="text-xs text-gray-500">
                                Recommended size: 600x800px. JPG, PNG formats supported.
                            </p>
                        </div>
                    </div>

                    {/* Bio - Full Width */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Biography</label>
                        <textarea
                            rows={5}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646]/50 focus:border-[#D4A646]"
                            placeholder="Brief description of experience and background..."
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
                        <Link
                            href="/admin/attorneys"
                            className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-2 bg-[#D4A646] text-white rounded-lg hover:bg-[#C8A34E] shadow-lg shadow-[#D4A646]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {loading ? 'Creating...' : 'Create Attorney'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
