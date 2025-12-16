"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SubService } from "@/types/services";

interface SubServiceCardProps {
    service: SubService;
    categorySlug: string;
    index: number;
}

export default function SubServiceCard({ service, categorySlug, index }: SubServiceCardProps) {
    return (
        <motion.article
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
        >
            {/* Title */}
            <h3 className="text-xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors">
                <Link href={`/services/${categorySlug}/${service.slug}`}>
                    <span className="absolute inset-0" />
                    {service.title}
                </Link>
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.shortDescription}
            </p>

            {/* Pricing */}
            {service.content.pricing && (
                <div className="flex items-center gap-2 text-sm mb-4">
                    <svg className="h-4 w-4 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">
                        {service.content.pricing.startingPrice || service.content.pricing.priceRange}
                    </span>
                </div>
            )}

            {/* Key Features Preview (first 3) */}
            <ul className="space-y-2 mb-4">
                {service.content.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#D4A646] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-2 text-[#D4A646] font-semibold text-sm group-hover:gap-3 transition-all pt-2 border-t border-gray-100">
                <span>View Details</span>
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </motion.article>
    );
}
