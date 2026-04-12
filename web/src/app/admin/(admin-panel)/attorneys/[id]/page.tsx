import EditAttorneyForm, { Attorney } from '@/components/admin/EditAttorneyForm';
import React from 'react';
import { requireAdmin } from '@/lib/auth/admin-auth';
import { getServerClient } from '@/lib/supabaseServer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getAttorney(id: string): Promise<Attorney | null> {
    const supabase = getServerClient();

    const { data: attorney, error } = await supabase
        .from('attorneys')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !attorney) {
        console.error('Error fetching attorney for edit:', error);
        return null;
    }

    return attorney as Attorney;
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

    const attorney = await getAttorney(id);

    if (!attorney) {
        notFound();
    }
 
    return <EditAttorneyForm attorney={attorney} />;
}
