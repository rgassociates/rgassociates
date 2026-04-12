import Link from 'next/link';
import { requireAdmin } from '@/lib/auth/admin-auth';
import { getServerClient } from '@/lib/supabaseServer';
import { ContactsFilters, ContactStatusSelect, DeleteContactButton } from './ClientComponents';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ContactsPage({
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
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

    if (status !== 'all') {
        query = query.eq('status', status);
    }

    if (search) {
        query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`);
    }

    const { data: contacts, error } = await query;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
                <p className="text-gray-600 mt-1">Manage contact form submissions</p>
            </div>

            {/* Filters */}
            <ContactsFilters />

            {/* Contacts Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {error ? (
                    <div className="p-8 text-center text-red-500">
                        Error loading contacts: {error.message}
                    </div>
                ) : !contacts || contacts.length === 0 ? (
                    <div className="p-8 text-center text-gray-600">
                        No contact submissions found
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Service
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
                                {contacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {contact.first_name} {contact.last_name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">{contact.email || 'N/A'}</div>
                                            <div className="text-sm text-gray-500">{contact.phone || 'N/A'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {contact.service_type || 'General'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <ContactStatusSelect id={contact.id} currentStatus={contact.status} />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/contacts/${contact.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View
                                                </Link>
                                                <DeleteContactButton id={contact.id} />
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
