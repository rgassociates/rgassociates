"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";

export default function FeaturedServices() {
    const services = serviceCategories.map((category) => ({
        id: category.id,
        title: category.title,
        description: category.shortDescription,
        slug: category.slug,
        serviceCount: category.subServices.length,
        availability: category.id === "litigation" || category.id === "document-registration" ? "Jaipur Only" : "Pan-India",
        icon: getIconForCategory(category.id),
    }));

    return (
        <section className="relative bg-gray-50 py-20 sm:py-24">
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
                        Our Expertise
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                        Comprehensive Legal Services
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        From consultation to courtroom representation, we provide specialized legal solutions across 6 core service categories and 28 specialized services
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link href={`/services/${service.slug}`}>
                                <Card variant="default" padding="lg" hover glow className="h-full group">
                                    {/* Availability Badge */}
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge
                                            variant={service.availability === "Pan-India" ? "success" : "warning"}
                                            size="sm"
                                        >
                                            {service.availability === "Pan-India" ? (
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            {service.availability}
                                        </Badge>
                                        <Badge variant="outline" size="sm">
                                            {service.serviceCount} Services
                                        </Badge>
                                    </div>

                                    {/* Icon with Rotation Animation */}
                                    <motion.div
                                        className="h-14 w-14 rounded-xl bg-[#D4A646] text-[#051427] flex items-center justify-center shadow-lg mb-6"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -10, 10, -10, 0],
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-[#D4A646] font-semibold group-hover:gap-3 transition-all">
                                        <span>Explore Services</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 bg-gradient-to-r from-[#D4A646] to-[#C8A34E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-6" />
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#051427] px-8 py-4 text-base font-semibold text-[#051427] hover:bg-[#051427] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        View All Services (28 Total)
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// Helper function to get icon for each category
function getIconForCategory(categoryId: string): React.JSX.Element {
    const icons: Record<string, React.JSX.Element> = {
        "legal-consultation": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        ),
        "legal-notice": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        "litigation": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
        "legal-research": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        "title-search-report": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        "document-registration": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h2m0 0h2m-2 0v2m0-2V3" />
            </svg>
        ),
    };

    return icons[categoryId] || icons["legal-consultation"];
}
