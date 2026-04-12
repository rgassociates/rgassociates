'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function ContactsFilters() {
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
        router.push(`/admin/contacts?${params.toString()}`);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        router.push(`/admin/contacts?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
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
                    {['all', 'new', 'read', 'resolved'].map((filterType) => (
                        <button
                            key={filterType}
                            onClick={() => updateFilter(filterType)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                                currentFilter === filterType
                                    ? (filterType === 'new' ? 'bg-orange-500 text-white' : filterType === 'read' ? 'bg-blue-500 text-white' : filterType === 'resolved' ? 'bg-green-500 text-white' : 'bg-[#D4A646] text-white')
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {filterType}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ContactStatusSelect({ id, currentStatus }: { id: string, currentStatus: string }) {
    const router = useRouter();

    const handleUpdateStatus = async (status: string) => {
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to update contact status');
            }
        } catch (error) {
            console.error('Error updating contact:', error);
            alert('An error occurred');
        }
    };

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            new: 'bg-orange-100 text-orange-800',
            read: 'bg-blue-100 text-blue-800',
            resolved: 'bg-green-100 text-green-800',
        };
        return styles[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <select
            value={currentStatus}
            onChange={(e) => handleUpdateStatus(e.target.value)}
            className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(currentStatus)} border-0 cursor-pointer`}
        >
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="resolved">Resolved</option>
        </select>
    );
}

export function DeleteContactButton({ id }: { id: string }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this contact submission?')) return;
        
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete contact');
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
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
