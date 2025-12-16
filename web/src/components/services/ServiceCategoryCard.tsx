"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceCategory } from "@/types/services";
import React from "react";

interface ServiceCategoryCardProps {
    category: ServiceCategory;
    index: number;
}

const iconMap: Record<string, React.JSX.Element> = {
    consultation: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
    ),
    notice: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    litigation: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
    ),
    research: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    "title-search": (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    )
};

export default function ServiceCategoryCard({ category, index }: ServiceCategoryCardProps) {
    return (
        <motion.article
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            {/* Icon Badge */}
            <div className="p-8 pb-6">
                <div className="h-14 w-14 rounded-xl bg-[#D4A646] text-[#051427] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6">
                    {iconMap[category.icon] || iconMap.consultation}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors">
                    <Link href={`/services/${category.slug}`}>
                        <span className="absolute inset-0" />
                        {category.title}
                    </Link>
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                    {category.shortDescription}
                </p>

                {/* Sub-service count */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span>{category.subServices.length} Services Available</span>
                </div>

                {/* CTA Link */}
                <div className="flex items-center gap-2 text-[#D4A646] font-semibold group-hover:gap-3 transition-all">
                    <span>Explore Services</span>
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-[#D4A646] to-[#C8A34E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.article>
    );
}
