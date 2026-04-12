import EditAttorneyForm, { Attorney } from '@/components/admin/EditAttorneyForm';
import React from 'react';
import { requireAdmin } from '@/lib/auth/admin-auth';
import { getServerClient } from '@/lib/supabaseServer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getAttorney(id: string): Promise<{ attorney: Attorney | null, error: any }> {
    const supabase = getServerClient();

    const { data: attorney, error } = await supabase
        .from('attorneys')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !attorney) {
        console.error('Error fetching attorney for edit:', error);
        return { attorney: null, error };
    }

    return { attorney: attorney as Attorney, error: null };
}

export default async function EditAttorneyPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Ensure user is an admin before rendering
    await requireAdmin();
    
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const { attorney, error } = await getAttorney(id);

    if (!attorney) {
        return (
            <div className="p-8 text-center text-red-500">
                <h1>Error Loading Attorney</h1>
                <p>ID: {id}</p>
                <p>Error details: {JSON.stringify(error)}</p>
            </div>
        );
    }
 
    return <EditAttorneyForm attorney={attorney} />;
}
