"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, Badge } from "@/components/ui";

export default function WhyChooseUs() {
    return (
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A646]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#051427]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D4A646]/3 to-[#051427]/3 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Enhanced Section Header */}
                <motion.div
                    className="mx-auto max-w-3xl text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge variant="secondary" size="md" className="mb-6">
                        Why RG Legal Solutions
                    </Badge>
                    <h2 className="text-5xl font-bold tracking-tight text-[#051427] sm:text-6xl font-serif mb-6 bg-gradient-to-r from-[#051427] via-[#051427] to-[#D4A646] bg-clip-text">
                        Your Trusted Legal Partner
                    </h2>
                    <p className="text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
                        Combining years of experience with modern technology to deliver exceptional legal services across India
                    </p>
                </motion.div>

                {/* Full-Width Stats Bar */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                            icon={
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            }
                            number={15}
                            suffix="+"
                            label="Years of Legal Excellence"
                            delay={0}
                        />
                        <StatCard
                            icon={
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            number={500}
                            suffix="+"
                            label="Successful Cases"
                            delay={0.1}
                        />
                        <StatCard
                            icon={
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            number={95}
                            suffix="%"
                            label="Client Satisfaction"
                            delay={0.2}
                        />
                        <StatCard
                            icon={
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            number={28}
                            suffix=""
                            label="States Served"
                            delay={0.3}
                        />
                    </div>
                </motion.div>

                {/* Benefits Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <BenefitCard benefit={benefit} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Modern Stat Card with Icon
function StatCard({
    icon,
    number,
    suffix,
    label,
    delay
}: {
    icon: React.ReactNode;
    number: number;
    suffix: string;
    label: string;
    delay: number
}) {
    const [isInView, setIsInView] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, number, {
                duration: 2.5,
                ease: "easeOut",
            });
            return animation.stop;
        }
    }, [isInView, count, number]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
        >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A646]/5 via-transparent to-[#051427]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4A646]/10 to-[#D4A646]/5 text-[#D4A646] group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                {/* Number */}
                <div className="relative text-5xl font-bold mb-2 font-serif">
                    <span className="bg-gradient-to-r from-[#D4A646] to-[#C8A34E] bg-clip-text text-transparent">
                        <motion.span>{rounded}</motion.span>
                        {suffix}
                    </span>
                </div>

                {/* Label */}
                <div className="relative text-sm text-gray-600 font-medium leading-relaxed">
                    {label}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4A646]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </motion.div>
    );
}

// Modern Benefit Card with Glassmorphism
function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group h-full"
        >
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A646]/20 via-transparent to-[#051427]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Floating Icon Badge */}
                <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A646]/10 to-[#D4A646]/5 text-[#D4A646] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        {benefit.icon}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-[#D4A646]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative">
                    <h3 className="text-xl font-bold text-[#051427] mb-3 group-hover:text-[#D4A646] transition-colors duration-300">
                        {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4A646]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A646] to-[#051427] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
        </motion.div>
    );
}

// Benefits Data
const benefits = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Experienced Advocates",
        description: "Bar Council registered advocates with 15+ years of experience in diverse legal matters across civil, criminal, corporate, and family law.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Transparent Pricing",
        description: "No hidden costs or surprise fees. Clear, upfront pricing for all services with detailed breakdowns and flexible payment options.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Client-First Approach",
        description: "Personalized legal strategies tailored to your specific needs. We prioritize your goals and work tirelessly to achieve the best possible outcomes.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Nationwide Reach",
        description: "Serving clients across India with online consultation and documentation services, plus in-person litigation support in Jaipur jurisdiction.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Quick Response Time",
        description: "24-48 hour response guarantee for all consultation requests. We understand the urgency of legal matters and act accordingly.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Secure & Confidential",
        description: "Complete attorney-client privilege protection. Your information is encrypted and stored securely with strict confidentiality protocols.",
    },
];
