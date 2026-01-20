"use client";

import { motion } from "framer-motion";
import { SubServiceCard } from "@/components/services";
import Link from "next/link";
import type { ServiceCategory } from "@/types/services";
import type { SubService } from "@/types/services";

interface CategoryPageClientProps {
    category: ServiceCategory;
    services: SubService[];
    categorySlug: string;
}

export default function CategoryPageClient({ category, services, categorySlug }: CategoryPageClientProps) {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] pt-32 pb-20 sm:py-24">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-[#D4A646] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-[#D4A646] transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">{category.title}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-3xl"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-6">
                            {category.title}
                        </h1>
                        <p className="text-xl leading-8 text-gray-300">
                            {category.description}
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                            <svg className="h-5 w-5 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            <span>{services.length} Services Available</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <SubServiceCard
                                key={service.id}
                                service={service}
                                categorySlug={categorySlug}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#051427] sm:text-4xl font-serif mb-4">
                            Need Expert Guidance?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our experienced attorneys are ready to help you with your legal matters
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A646] px-8 py-3 text-base font-semibold text-[#051427] shadow-sm hover:bg-[#C8A34E] transition-colors"
                            >
                                Schedule Consultation
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#051427] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
