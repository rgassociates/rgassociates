"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do online legal consultations work?",
            answer: "Our online consultations are conducted via video call, phone, or email based on your preference. Simply fill out our consultation form, and we'll schedule a convenient time. During the consultation, our experienced advocates will discuss your legal matter, provide initial guidance, and outline the next steps. All consultations are confidential and protected by attorney-client privilege.",
        },
        {
            question: "What services are available Pan-India vs Jaipur only?",
            answer: "Our consultation, documentation, legal notice drafting, legal research, and title search services are available to clients across India through online channels. However, litigation and court representation services are currently limited to Jaipur jurisdiction (Rajasthan High Court and District Courts). We're transparent about our service coverage to ensure you receive the best possible representation.",
        },
        {
            question: "What are your consultation fees?",
            answer: "Consultation fees vary based on the complexity of your legal matter and the service required. We offer transparent pricing with no hidden costs. Initial consultations start from ₹2,000 for basic matters. We provide detailed fee estimates before you commit to any service. Payment plans and flexible options are available for ongoing cases.",
        },
        {
            question: "How quickly can I get a consultation?",
            answer: "We guarantee a response within 24-48 hours of receiving your consultation request. For urgent matters, we offer same-day consultations subject to advocate availability. Simply indicate the urgency when filling out the consultation form, and we'll prioritize your request accordingly.",
        },
        {
            question: "Can you handle cases outside Jaipur?",
            answer: "Yes, for consultation, documentation, and research services, we serve clients across India. However, for litigation and court appearances, we currently operate only in Jaipur jurisdiction. If you need court representation in other cities, we can refer you to trusted legal professionals in those areas through our network.",
        },
        {
            question: "What documents should I prepare for consultation?",
            answer: "Bring any relevant documents related to your legal matter, such as contracts, agreements, notices, court orders, or correspondence. If you don't have all documents ready, don't worry—we can guide you on what's needed during the initial consultation. You can upload documents securely through our portal or email them to us.",
        },
        {
            question: "Is my information confidential?",
            answer: "Absolutely. All information shared with us is protected by attorney-client privilege and strict confidentiality protocols. We use encrypted communication channels, secure document storage, and follow industry best practices for data protection. Your privacy and security are our top priorities.",
        },
        {
            question: "How do I make payments?",
            answer: "We accept multiple payment methods including bank transfer, UPI, credit/debit cards, and online payment gateways. Payment details will be provided in your fee agreement. For ongoing cases, we offer flexible payment plans. All transactions are secure and receipts are provided for your records.",
        },
        {
            question: "Do you provide legal services in languages other than English?",
            answer: "Yes, we provide legal services in Hindi and English. Our advocates are fluent in both languages and can conduct consultations, draft documents, and communicate in your preferred language to ensure clear understanding of all legal matters.",
        },
        {
            question: "What is your success rate in litigation cases?",
            answer: "We have successfully handled over 500 cases with a high success rate. While outcomes depend on case specifics and evidence, our experienced advocates work diligently to achieve the best possible results. We provide realistic assessments and keep you informed throughout the legal process.",
        },
    ];

    // Split FAQs into two columns (5 each)
    const leftColumnFaqs = faqs.slice(0, 5);
    const rightColumnFaqs = faqs.slice(5, 10);

    return (
        <section className="relative bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge variant="secondary" size="md" className="mb-4">
                        FAQ
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Find answers to common questions about our legal services, process, and pricing
                    </p>
                </motion.div>

                {/* Two Column FAQ Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq, index) => {
                            const actualIndex = index + 5; // Offset for right column
                            return (
                                <FAQItem
                                    key={actualIndex}
                                    faq={faq}
                                    index={actualIndex}
                                    isOpen={openIndex === actualIndex}
                                    onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-12 text-center p-8 bg-gray-50 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold text-[#051427] mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Our team is here to help. Get in touch for personalized assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919309212401"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A646] px-6 py-3 text-base font-semibold text-[#051427] shadow-md hover:shadow-lg hover:bg-[#E5B657] transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Us Now
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#051427] ring-2 ring-[#051427] hover:bg-[#051427] hover:text-white transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Message
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Individual FAQ Item Component
function FAQItem({
    faq,
    index,
    isOpen,
    onClick,
}: {
    faq: { question: string; answer: string };
    index: number;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
        >
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#D4A646] transition-colors">
                <button
                    onClick={onClick}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-start gap-4 flex-1">
                        <div
                            className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-[#D4A646] text-[#051427]" : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <span className="font-semibold text-[#051427] pr-8">{faq.question}</span>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 pt-2 bg-gray-50">
                                <div className="pl-12">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
