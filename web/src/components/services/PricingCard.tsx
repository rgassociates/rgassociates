"use client";

import { motion } from "framer-motion";
import { PricingInfo } from "@/types/services";

interface PricingCardProps {
    pricing: PricingInfo;
}

export default function PricingCard({ pricing }: PricingCardProps) {
    return (
        <motion.div
            className="bg-gradient-to-br from-[#051427] to-[#0A1A2F] rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <svg className="h-8 w-8 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold font-serif">Transparent Pricing</h3>
            </div>

            {/* Price Display */}
            <div className="mb-6">
                {pricing.startingPrice && (
                    <div>
                        <div className="text-sm text-gray-400 mb-2">Starting from</div>
                        <div className="text-4xl font-bold text-[#D4A646] font-serif">
                            {pricing.startingPrice}
                        </div>
                    </div>
                )}
                {pricing.priceRange && !pricing.startingPrice && (
                    <div>
                        <div className="text-sm text-gray-400 mb-2">Price Range</div>
                        <div className="text-3xl font-bold text-[#D4A646] font-serif">
                            {pricing.priceRange}
                        </div>
                    </div>
                )}
            </div>

            {/* Note */}
            <div className="pt-6 border-t border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed">
                    {pricing.note}
                </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
                <a
                    href="/contact"
                    className="block w-full text-center bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-[#E5B657] transition-colors"
                >
                    Get a Quote
                </a>
            </div>
        </motion.div>
    );
}
