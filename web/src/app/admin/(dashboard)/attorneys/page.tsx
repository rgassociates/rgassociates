'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Attorney {
    id: string;
    name: string;
    role: string;
    specialization: string;
    image_url?: string;
}

export default function AttorneysPage() {
    const [attorneys, setAttorneys] = useState<Attorney[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchAttorneys();
    }, []);

    const fetchAttorneys = async (searchQuery = '') => {
        try {
            const url = new URL('/api/admin/attorneys', window.location.href);
            if (searchQuery) url.searchParams.set('search', searchQuery);

            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                setAttorneys(data.attorneys);
            }
        } catch (error) {
            console.error('Error fetching attorneys:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        fetchAttorneys(search);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this attorney?')) return;

        try {
            const response = await fetch(`/api/admin/attorneys/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setAttorneys(attorneys.filter(a => a.id !== id));
            } else {
                alert('Failed to delete attorney');
            }
        } catch (error) {
            console.error('Error deleting attorney:', error);
            alert('An error occurred');
        }
    };

    if (loading && attorneys.length === 0) {
        return <div className="p-8 text-center text-gray-500">Loading attorneys...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Manage Attorneys</h1>
                <Link
                    href="/admin/attorneys/new"
                    className="bg-[#D4A646] text-white px-4 py-2 rounded-lg hover:bg-[#C8A34E] transition-colors flex items-center gap-2"
                >
                    <span>➕ Add New Attorney</span>
                </Link>
            </div>

            {/* Search Bar */}
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

            {/* List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attorney</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attorneys.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                        No attorneys found. Click "Add New Attorney" to create one.
                                    </td>
                                </tr>
                            ) : (
                                attorneys.map((person) => (
                                    <tr key={person.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 overflow-hidden relative">
                                                    {person.image_url ? (
                                                        <Image
                                                            src={person.image_url}
                                                            alt={person.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="h-full w-full flex items-center justify-center bg-[#D4A646]/10 text-[#D4A646] font-bold">
                                                            {person.name.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{person.role}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{person.specialization}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end gap-3">
                                                <Link
                                                    href={`/admin/attorneys/${person.id}`}
                                                    className="text-[#D4A646] hover:text-[#C8A34E] flex items-center gap-1"
                                                >
                                                    ✏️ Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(person.id)}
                                                    className="text-red-600 hover:text-red-900 flex items-center gap-1"
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
