'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import type { AdminUser } from '@/lib/types/admin';

interface AdminNavProps {
    user: AdminUser;
    children: React.ReactNode;
}

export default function AdminNav({ user, children }: AdminNavProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: '📊' },
        { name: 'Manage Blogs', href: '/admin/blogs', icon: '📝' },
        { name: 'Manage Attorneys', href: '/admin/attorneys', icon: '👨‍⚖️' },
        { name: 'View Contacts', href: '/admin/contacts', icon: '📧' },
    ];

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            await fetch('/api/admin/auth/logout', { method: 'POST' });
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            setLoggingOut(false);
        }
    };

    const NavContent = () => (
        <div className="flex-1 flex flex-col h-full bg-white border-r border-gray-200">
            <div className="flex-shrink-0 flex items-center h-16 px-4 border-b border-gray-200 bg-white">
                <Link href="/admin" className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    <span><span className="text-[#D4A646]">RG Legal</span> Admin</span>
                </Link>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navigation.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-[#D4A646] text-white shadow-md transform scale-105'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#D4A646]'
                                }`}
                        >
                            <span className={`mr-3 text-lg ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#D4A646]'}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center mb-4 px-2">
                    <div className="h-10 w-10 rounded-full bg-[#D4A646] flex items-center justify-center text-white font-bold shadow-sm">
                        {user.full_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{user.full_name}</p>
                        <p className="text-xs text-gray-500 capitalize">{user.role.replace('_', ' ')}</p>
                    </div>
                </div>

                <Link
                    href="/"
                    className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg mb-1"
                >
                    <span className="mr-3">🏠</span>
                    Back to Website
                </Link>
                <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="w-full flex items-center px-2 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50 transition-colors"
                >
                    <span className="mr-3">{loggingOut ? '⏳' : '🚪'}</span>
                    {loggingOut ? 'Logging out...' : 'Logout'}
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile Sidebar (Drawer) */}
            <div
                className={`fixed inset-0 z-50 flex md:hidden transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                ></div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white h-full shadow-2xl">
                    <NavContent />
                </div>
            </div>

            {/* Desktop Sidebar (Permanent) */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col shadow-lg z-10">
                <NavContent />
            </div>

            {/* Main Content Area */}
            <div className="md:pl-64 flex flex-col min-h-screen">
                {/* Mobile Header */}
                <div className="sticky top-0 z-10 md:hidden flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 shadow-sm">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-lg font-bold text-gray-900"><span className="text-[#D4A646]">RG Legal</span> Admin</span>
                    <div className="w-6"></div> {/* Spacer for centering */}
                </div>

                {/* Page Content */}
                <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
