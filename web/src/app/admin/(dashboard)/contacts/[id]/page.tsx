import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServerClient } from '@/lib/supabaseServer';
import type { ContactSubmission } from '@/lib/types/admin';

async function getContact(id: string): Promise<ContactSubmission | null> {
    const supabase = getServerClient();

    const { data: contact, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !contact) {
        return null;
    }

    return contact as ContactSubmission;
}

export default async function ContactDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const contact = await getContact(id);

    if (!contact) {
        notFound();
    }

    const getStatusBadge = (status: string) => {
        const styles = {
            new: 'bg-orange-100 text-orange-800',
            read: 'bg-blue-100 text-blue-800',
            resolved: 'bg-green-100 text-green-800',
        };
        return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Contact Details</h1>
                    <p className="text-gray-600 mt-1">View contact submission details</p>
                </div>
                <Link
                    href="/admin/contacts"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Contacts
                </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadge(contact.status)}`}>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                        <p className="text-base text-gray-900 font-medium">
                            {contact.first_name} {contact.last_name}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                        <p className="text-base text-gray-900">
                            {contact.email ? (
                                <a href={`mailto:${contact.email}`} className="text-[#D4A646] hover:underline">
                                    {contact.email}
                                </a>
                            ) : (
                                'Not provided'
                            )}
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                        <p className="text-base text-gray-900">
                            {contact.phone ? (
                                <a href={`tel:${contact.phone}`} className="text-[#D4A646] hover:underline">
                                    {contact.phone}
                                </a>
                            ) : (
                                'Not provided'
                            )}
                        </p>
                    </div>

                    {/* Service Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Service Type</label>
                        <p className="text-base text-gray-900 capitalize">
                            {contact.service_type || 'General Inquiry'}
                        </p>
                    </div>

                    {/* Submission Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Submitted On</label>
                        <p className="text-base text-gray-900">
                            {new Date(contact.created_at).toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Message */}
                <div className="border-t border-gray-200 pt-6">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Message</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-base text-gray-900 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                        ID: <span className="font-mono text-gray-700">{contact.id}</span>
                    </div>
                    <div className="flex gap-3">
                        {contact.email && (
                            <a
                                href={`mailto:${contact.email}`}
                                className="inline-flex items-center px-4 py-2 bg-[#D4A646] text-white rounded-lg hover:bg-[#C8A34E] transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Email
                            </a>
                        )}
                        {contact.phone && (
                            <a
                                href={`tel:${contact.phone}`}
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
