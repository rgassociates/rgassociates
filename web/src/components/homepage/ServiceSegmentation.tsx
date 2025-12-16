"use client";

import { motion } from "framer-motion";
import { Card, Badge, Button } from "@/components/ui";
import Link from "next/link";

export default function ServiceSegmentation() {
    const panIndiaServices = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            title: "Legal Consultation",
            description: "Expert advice on civil, criminal, corporate, family, IP, and property matters",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Legal Documentation",
            description: "Drafting of agreements, contracts, deeds, and all legal documents",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Legal Notice Drafting",
            description: "Professional legal notices for civil, criminal, and corporate matters",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: "Legal Research",
            description: "Case law research, statutory analysis, and legal opinions",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Title Search & Due Diligence",
            description: "Property verification, encumbrance certificates, and title reports",
        },
    ];

    const jaipurServices = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            ),
            title: "Civil Litigation",
            description: "Property disputes, contract breaches, and civil matters in Jaipur courts",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: "Criminal Litigation",
            description: "Criminal defense and prosecution in Jaipur jurisdiction",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Corporate Litigation",
            description: "Business disputes and corporate matters in Rajasthan High Court",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Family Court Litigation",
            description: "Divorce, custody, and family matters in Jaipur family courts",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: "Property Litigation",
            description: "Land disputes and property matters in Jaipur district courts",
        },
    ];

    return (
        <section className="relative bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mx-auto max-w-2xl text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge variant="secondary" size="md" className="mb-4">
                        Our Service Coverage
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                        Comprehensive Legal Solutions
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        We serve clients across India with online legal services and provide in-person litigation support in Jaipur
                    </p>
                </motion.div>

                {/* Two-Column Service Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Pan-India Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card variant="bordered" padding="lg" hover glow>
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-12 w-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#051427] font-serif">
                                                Pan-India Services
                                            </h3>
                                            <p className="text-sm text-gray-600">Available Nationwide - 100% Online</p>
                                        </div>
                                    </div>
                                    <Badge variant="success" size="sm">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Serving Clients Across India
                                    </Badge>
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="space-y-4">
                                {panIndiaServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                    >
                                        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#D4A646]/10 text-[#D4A646] flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-[#051427] mb-1">{service.title}</h4>
                                            <p className="text-sm text-gray-600">{service.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <Link href="/services">
                                    <Button variant="primary" fullWidth>
                                        Explore Online Services
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Jaipur Services */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card variant="bordered" padding="lg" hover glow>
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-12 w-12 rounded-xl bg-[#D4A646]/20 text-[#D4A646] flex items-center justify-center">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#051427] font-serif">
                                                Jaipur Litigation
                                            </h3>
                                            <p className="text-sm text-gray-600">In-Person Court Representation</p>
                                        </div>
                                    </div>
                                    <Badge variant="warning" size="sm">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Rajasthan High Court & District Courts
                                    </Badge>
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="space-y-4">
                                {jaipurServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                    >
                                        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#051427]/10 text-[#051427] flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-[#051427] mb-1">{service.title}</h4>
                                            <p className="text-sm text-gray-600">{service.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <Link href="/services/litigation">
                                    <Button variant="secondary" fullWidth>
                                        View Litigation Services
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                        <span className="font-semibold text-[#051427]">Note:</span> While our consultation, documentation, and research services are available to clients across India through online channels, our litigation and court representation services are currently limited to Jaipur jurisdiction (Rajasthan High Court and District Courts).
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
