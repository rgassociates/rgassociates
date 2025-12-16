"use client";

import { motion } from "framer-motion";
import { SubService } from "@/types/services";
import ProcessTimeline from "./ProcessTimeline";
import PricingCard from "./PricingCard";
import ServiceSchema from "../seo/ServiceSchema";
import Link from "next/link";

interface ServiceDetailTemplateProps {
    service: SubService;
    categoryTitle: string;
    categorySlug: string;
}

export default function ServiceDetailTemplate({
    service,
    categoryTitle,
    categorySlug
}: ServiceDetailTemplateProps) {
    return (
        <div className="bg-white">
            {/* SEO Structured Data */}
            <ServiceSchema
                service={service}
                categoryTitle={categoryTitle}
                categorySlug={categorySlug}
            />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-20 sm:py-24">
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
                        <Link href={`/services/${categorySlug}`} className="hover:text-[#D4A646] transition-colors">{categoryTitle}</Link>
                        <span>/</span>
                        <span className="text-white">{service.title}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">
                                {categoryTitle}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl leading-8 text-gray-300">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#051427] font-serif mb-6">
                                    Overview
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {service.content.overview}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#051427] font-serif mb-6">
                                    What's Included
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.content.keyFeatures.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.5 }}
                                        >
                                            <svg className="h-6 w-6 text-[#D4A646] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#051427] font-serif mb-8">
                                    Our Process
                                </h2>
                                <ProcessTimeline steps={service.content.process} />
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#051427] font-serif mb-6">
                                    Frequently Asked Questions
                                </h2>
                                <dl className="space-y-6">
                                    {service.content.faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-6 bg-gray-50 rounded-xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                        >
                                            <dt className="font-semibold text-[#051427] text-lg mb-3">
                                                {faq.question}
                                            </dt>
                                            <dd className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </dd>
                                        </motion.div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Pricing */}
                                {service.content.pricing && (
                                    <PricingCard pricing={service.content.pricing} />
                                )}

                                {/* Related Services */}
                                {service.relatedPracticeAreas.length > 0 && (
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <h3 className="text-xl font-bold text-[#051427] font-serif mb-4">
                                            Related Services
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.relatedPracticeAreas.slice(0, 4).map((relatedId, index) => (
                                                <li key={index}>
                                                    <div className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium text-sm">
                                                        {relatedId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA Card */}
                                <div className="bg-[#051427] p-6 rounded-xl text-white text-center">
                                    <h4 className="text-lg font-bold font-serif mb-2">
                                        Need Expert Advice?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Schedule a consultation with our legal experts today.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
