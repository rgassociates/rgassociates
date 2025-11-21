"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="bg-white">
            {/* Hero Section - Modern Design */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Get In Touch</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                            Get in touch with our team for a consultation. We are here to assist you with your legal needs.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100"
                        >
                            <h3 className="text-3xl font-bold tracking-tight text-[#051427] font-serif mb-4">Send us a message</h3>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we will get back to you as soon as possible.
                            </p>
                            <form action="#" method="POST">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#051427] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-lg border-0 px-4 py-3 text-[#051427] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D4A646] sm:text-sm sm:leading-6 bg-white transition-all"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <div className="flex gap-x-4 sm:col-span-2">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="disclaimer-checkbox"
                                                name="disclaimer"
                                                type="checkbox"
                                                checked={agreed}
                                                onChange={(e) => setAgreed(e.target.checked)}
                                                className="h-4 w-4 rounded border-gray-300 text-[#D4A646] focus:ring-[#D4A646]"
                                            />
                                        </div>
                                        <label htmlFor="disclaimer-checkbox" className="text-sm leading-6 text-gray-600">
                                            I understand that this website is for informational purposes only and submitting this form does not create an attorney-client relationship.
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={!agreed}
                                        className={`group w-full inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 ${agreed
                                                ? 'bg-[#D4A646] text-[#051427] hover:bg-[#E5B657] hover:shadow-2xl hover:scale-105'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Send Message
                                        {agreed && (
                                            <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:pl-8"
                        >
                            <h3 className="text-3xl font-bold tracking-tight text-[#051427] font-serif mb-4">Our Office</h3>
                            <p className="text-gray-600 mb-10">
                                Visit us at our headquarters or reach out via phone or email.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ),
                                        title: 'Address',
                                        content: '[Address Line 1]\n[City, State, Zip]'
                                    },
                                    {
                                        icon: (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        ),
                                        title: 'Phone',
                                        content: '+91-1234567890',
                                        link: 'tel:+91-1234567890'
                                    },
                                    {
                                        icon: (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        ),
                                        title: 'Email',
                                        content: 'contact@rgassociates.com',
                                        link: 'mailto:contact@rgassociates.com'
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="flex gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all"
                                    >
                                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#D4A646]/10 text-[#D4A646] flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{item.title}</div>
                                            {item.link ? (
                                                <a href={item.link} className="text-base font-medium text-[#051427] hover:text-[#D4A646] transition-colors">
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <div className="text-base font-medium text-[#051427] whitespace-pre-line">
                                                    {item.content}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-80 w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-inner overflow-hidden">
                                <div className="text-center">
                                    <svg className="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <p className="font-medium">Map Integration Placeholder</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
