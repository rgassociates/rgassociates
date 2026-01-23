import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getServerClient } from '@/lib/supabaseServer';

export const metadata: Metadata = {
    title: "Our Attorneys | RG Legal Solutions",
    description:
        "Meet the expert legal team at RG Legal Solutions. Our experienced attorneys specialize in civil litigation, criminal defense, corporate law, and more.",
};

// Revalidate data every hour (3600 seconds) or use 0 for always fresh
export const revalidate = 0;

export default async function Attorneys() {
    const supabase = getServerClient();

    const { data: attorneys, error } = await supabase
        .from('attorneys')
        .select('*')
        .order('display_order', { ascending: true })
        .order('name', { ascending: true });

    if (error) {
        console.error('Error fetching attorneys:', error);
    }

    const teamMembers = attorneys || [];

    return (
        <div className="bg-white">
            {/* Hero Section - Modern Design */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Our Team</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Meet Our Attorneys & Team
                        </h1>
                        <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                            A team of dedicated legal professionals committed to excellence and your success.
                        </p>
                    </div>
                </div>

                {/* Bottom Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((person) => (
                            <div
                                key={person.id}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                            >
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 relative">
                                    {person.image_url ? (
                                        <img
                                            src={person.image_url}
                                            alt={person.name}
                                            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center bg-[#D4A646]/10 text-[#D4A646] font-bold text-4xl">
                                            {person.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/90 via-[#051427]/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <p className="text-sm font-medium text-[#D4A646] uppercase tracking-wider mb-1">{person.role}</p>
                                        <h3 className="text-xl font-bold font-serif">{person.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm font-semibold text-[#051427] mb-3">{person.specialization}</p>
                                    <p className="text-sm leading-6 text-gray-600 line-clamp-3 mb-4">{person.bio}</p>
                                    <div className="pt-4 border-t border-gray-100">
                                        {/* 
                                         * Note: If you want a detail page for each attorney, create a route at 
                                         * /attorneys/[id] and link to it here. For now, we can link to the 
                                         * same page (anchor) or a "contact" page, or remove the link if no detail page.
                                         * Keeping the link as requested, assuming you might add detail page later.
                                         */}
                                        <Link href={`/attorneys/${person.id}`} className="text-sm font-semibold text-[#051427] hover:text-[#D4A646] transition-colors flex items-center gap-2 group">
                                            View Profile
                                            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
