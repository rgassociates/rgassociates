import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/auth/admin-auth';
import AdminNav from '@/components/admin/AdminNav';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check authentication
    const admin = await getCurrentAdmin();

    if (!admin) {
        redirect('/admin/login');
    }

    return (
        <AdminNav user={admin}>
            {children}
        </AdminNav>
    );
}
