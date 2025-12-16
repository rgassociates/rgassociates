"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Share Your Legal Matter",
            description: "Fill out our simple consultation form or call/WhatsApp us. Provide a brief description of your legal issue and upload any relevant documents.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-blue-500 to-blue-600",
        },
        {
            number: "02",
            title: "Get Expert Consultation",
            description: "Schedule a call with our experienced advocates. We'll analyze your case, discuss legal options, and provide transparent fee estimates.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            color: "from-green-500 to-green-600",
        },
        {
            number: "03",
            title: "Receive Legal Strategy",
            description: "Get a customized action plan with clear timelines and expectations. We'll prepare all necessary documentation and legal notices.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            color: "from-purple-500 to-purple-600",
        },
        {
            number: "04",
            title: "Achieve Your Goals",
            description: "Professional representation with regular updates. We work diligently to achieve the best possible outcome for your legal matter.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-[#D4A646] to-[#C8A34E]",
        },
    ];

    return (
        <section className="relative bg-gray-50 py-20 sm:py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A646] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mx-auto max-w-2xl text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge variant="secondary" size="md" className="mb-4">
                        Our Process
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                        Simple 4-Step Process
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Getting expert legal help has never been easier. Follow our streamlined process from consultation to resolution.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-[#D4A646] -translate-y-1/2" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                {/* Step Card */}
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                    {/* Number Badge */}
                                    <div className={`absolute -top-6 left-6 h-14 w-14 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg font-bold text-xl group-hover:scale-110 transition-transform`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="mt-8 mb-4 h-16 w-16 rounded-xl bg-gray-50 text-[#051427] flex items-center justify-center group-hover:bg-[#D4A646]/10 group-hover:text-[#D4A646] transition-colors">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[#051427] mb-3 font-serif group-hover:text-[#D4A646] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {step.description}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className={`h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-6 rounded-full`} />
                                </div>

                                {/* Arrow (Desktop Only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                                        <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <p className="text-gray-600 mb-6">Ready to get started?</p>
                    <a
                        href="#hero"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A646] px-8 py-4 text-base font-semibold text-[#051427] shadow-md hover:shadow-xl hover:bg-[#E5B657] transition-all duration-300"
                    >
                        Schedule Free Consultation
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
