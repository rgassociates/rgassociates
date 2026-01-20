import Link from 'next/link';
import { getServerClient } from '@/lib/supabaseServer';
import DashboardStatsComponent from '@/components/admin/DashboardStats';
import type { DashboardStats } from '@/lib/types/admin';

async function getDashboardStats(): Promise<DashboardStats> {
    const supabase = getServerClient();

    // Get blog stats
    const { data: blogs } = await supabase
        .from('blogs')
        .select('is_published');

    const totalBlogs = blogs?.length || 0;
    const publishedBlogs = blogs?.filter(b => b.is_published).length || 0;
    const draftBlogs = totalBlogs - publishedBlogs;

    // Get contact stats
    const { data: contacts } = await supabase
        .from('contact_submissions')
        .select('status');

    const totalContacts = contacts?.length || 0;
    const newContacts = contacts?.filter(c => c.status === 'new').length || 0;
    const readContacts = contacts?.filter(c => c.status === 'read').length || 0;

    return {
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        totalContacts,
        newContacts,
        readContacts,
    };
}

export default async function AdminDashboard() {
    const stats = await getDashboardStats();

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome back! 👋
                </h1>
                <p className="text-gray-600">
                    Here's what's happening with your website today.
                </p>
            </div>

            {/* Stats */}
            <DashboardStatsComponent stats={stats} />

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        href="/admin/blogs/new"
                        className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#D4A646] hover:bg-[#D4A646]/5 transition-all group"
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#D4A646] rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                            ➕
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-semibold text-gray-900">Create New Blog</p>
                            <p className="text-xs text-gray-500">Write and publish a new article</p>
                        </div>
                    </Link>

                    <Link
                        href="/admin/blogs"
                        className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                            📝
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-semibold text-gray-900">Manage Blogs</p>
                            <p className="text-xs text-gray-500">Edit or delete existing blogs</p>
                        </div>
                    </Link>

                    <Link
                        href="/admin/contacts"
                        className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group"
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                            📧
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-semibold text-gray-900">View Contacts</p>
                            <p className="text-xs text-gray-500">Review contact submissions</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                <p className="text-gray-500 text-sm">
                    Activity tracking will be available in future updates.
                </p>
            </div>
        </div>
    );
}
