'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function SearchBar() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        router.push(`/admin/attorneys?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A646]/50 pl-10"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
                Search
            </button>
        </form>
    );
}

export function DeleteButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this attorney?')) return;

        try {
            const response = await fetch(`/api/admin/attorneys/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete attorney');
            }
        } catch (error) {
            console.error('Error deleting attorney:', error);
            alert('An error occurred');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-900 flex items-center gap-1"
        >
            🗑️ Delete
        </button>
    );
}
