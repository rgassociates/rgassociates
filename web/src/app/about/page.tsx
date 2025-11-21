"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Who We Are</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            A Legacy of Integrity, A Future of Justice
                        </h1>
                        <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                            Founded on the principles of integrity and diligence, RG Associates has evolved from a boutique practice into a multidisciplinary powerhouse. We believe that justice should be accessible, transparent, and swift.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 mb-4">
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Our Philosophy</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                            Justice, Integrity, and Results
                        </h2>
                        <p className="text-lg leading-8 text-gray-600">
                            To empower our clients with clear, actionable legal guidance and to advocate fearlessly for their rights in every forum.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {[
                            {
                                name: 'Client-Centric Approach',
                                description: 'We prioritize open communication and personalized strategies, ensuring you are informed and involved at every step of your legal journey.',
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'Ethical Standards',
                                description: 'We strictly adhere to the highest standards of professional conduct as prescribed by the Bar Council of India.',
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'Excellence in Advocacy',
                                description: 'Our attorneys are seasoned litigators and negotiators, dedicated to protecting your rights and interests with proven results.',
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                )
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-xl bg-[#D4A646]/10 text-[#D4A646] flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#051427] font-serif mb-4">{feature.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32 border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-lg leading-8 text-gray-600">
                            Dedicated professionals committed to your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#D4A646]/20 to-[#D4A646]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="h-10 w-10 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#051427] font-serif">Attorney Name</h3>
                                        <p className="text-sm font-semibold text-[#D4A646]">Senior Partner</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Specializing in corporate law with over 15 years of experience.
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/attorneys"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#051427] px-8 py-4 text-base font-semibold text-[#051427] hover:bg-[#051427] hover:text-white transition-all duration-300"
                        >
                            View All Attorneys
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
