import Link from 'next/link';
import Image from 'next/image';
import { requireAdmin } from '@/lib/auth/admin-auth';
import { getServerClient } from '@/lib/supabaseServer';
import { SearchBar, DeleteButton } from './ClientComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AttorneysPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string }>;
}) {
    // Ensure user is admin
    await requireAdmin();

    const resolvedParams = await searchParams;
    const search = resolvedParams.search || '';

    const supabase = getServerClient();

    let query = supabase
        .from('attorneys')
        .select('*')
        .order('display_order', { ascending: true })
        .order('name', { ascending: true });

    if (search) {
        query = query.ilike('name', `%${search}%`);
    }

    const { data: attorneys, error } = await query;

    if (error) {
        return (
            <div className="p-8 text-center text-red-500">
                Failed to load attorneys: {error.message}
            </div>
        );
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

            {/* Search Bar Component */}
            <SearchBar />

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
                            {!attorneys || attorneys.length === 0 ? (
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
                                                            sizes="40px"
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
                                                <DeleteButton id={person.id} />
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
