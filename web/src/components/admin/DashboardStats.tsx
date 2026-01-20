import type { DashboardStats } from '@/lib/types/admin';

interface DashboardStatsProps {
    stats: DashboardStats;
}

export default function DashboardStatsComponent({ stats }: DashboardStatsProps) {
    const statCards = [
        {
            title: 'Total Blogs',
            value: stats.totalBlogs,
            subtitle: `${stats.publishedBlogs} published, ${stats.draftBlogs} drafts`,
            icon: '📝',
            color: 'bg-blue-500',
        },
        {
            title: 'Published Blogs',
            value: stats.publishedBlogs,
            subtitle: 'Live on website',
            icon: '✅',
            color: 'bg-green-500',
        },
        {
            title: 'Total Contacts',
            value: stats.totalContacts,
            subtitle: `${stats.newContacts} new submissions`,
            icon: '📧',
            color: 'bg-purple-500',
        },
        {
            title: 'New Contacts',
            value: stats.newContacts,
            subtitle: 'Require attention',
            icon: '🔔',
            color: 'bg-orange-500',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                            <p className="text-3xl font-bold text-gray-900 mb-2">{card.value}</p>
                            <p className="text-xs text-gray-500">{card.subtitle}</p>
                        </div>
                        <div className={`${card.color} rounded-full p-4 text-3xl`}>
                            {card.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
