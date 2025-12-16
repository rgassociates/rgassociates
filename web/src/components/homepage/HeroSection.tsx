"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Badge } from "@/components/ui";
import { submitHeroForm } from "@/app/actions/heroForm";

export default function HeroSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        service: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await submitHeroForm({
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                serviceType: formData.service,
            });

            if (result.error) {
                alert(result.error);
                setIsSubmitting(false);
                return;
            }

            // Show success message
            setIsSuccess(true);

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                service: "",
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting the form. Please try calling us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] pt-24 pb-16 sm:pt-28 sm:pb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Decorative Gradient Blobs */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#D4A646]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Trust Badges */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Badge variant="primary" size="sm">15+ Years Experience</Badge>
                            <Badge variant="primary" size="sm">500+ Cases</Badge>
                            <Badge variant="primary" size="sm">Bar Council Registered</Badge>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Expert Legal Services <span className="text-[#D4A646]">Pan-India</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <span className="text-white font-semibold">Online Legal Services</span> for clients across India
                            <br />
                            <span className="text-white font-semibold">Court Representation</span> in Jaipur jurisdiction
                        </motion.p>

                        {/* Key Services - All 5 Categories (Clickable) */}
                        <motion.div
                            className="grid grid-cols-2 gap-2 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <a href="/services/legal-consultation" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors group">
                                <svg className="w-5 h-5 text-[#D4A646] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Legal Consultation</span>
                            </a>

                            <a href="/services/legal-notice" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors group">
                                <svg className="w-5 h-5 text-[#D4A646] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Legal Notice</span>
                            </a>

                            <a href="/services/litigation" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors group">
                                <svg className="w-5 h-5 text-[#D4A646] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Litigation (Jaipur)</span>
                            </a>

                            <a href="/services/legal-research" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors group">
                                <svg className="w-5 h-5 text-[#D4A646] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Legal Research</span>
                            </a>

                            <a href="/services/title-search-report" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors group col-span-2">
                                <svg className="w-5 h-5 text-[#D4A646] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Title Search & Due Diligence</span>
                            </a>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button variant="primary" size="lg" pulse icon={
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            }>
                                Free Consultation
                            </Button>
                            <a href="tel:+919309212401" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#051427] transition-all duration-300 shadow-md hover:shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </a>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            className="flex flex-wrap gap-4 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <a href="https://wa.me/919309212401" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#D4A646] transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400">Response within 24-48 hours</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Compact Lead Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                            <div className="mb-5">
                                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-1">Get Free Consultation</h3>
                                <p className="text-gray-600 text-sm">Fill the form below. We'll respond within 24 hours.</p>
                            </div>

                            {/* Success Message */}
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                                >
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-green-800 mb-1">Request Submitted Successfully!</h4>
                                        <p className="text-sm text-green-700">Thank you! We'll contact you within 24-48 hours.</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent transition-all text-[#051427] placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="First Name *"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent transition-all text-[#051427] placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="Last Name *"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent transition-all text-[#051427] placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <select
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A646] focus:border-transparent transition-all text-[#051427] disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="">Select Service Type *</option>
                                        <option value="consultation">Legal Consultation (Pan-India)</option>
                                        <option value="documentation">Legal Documentation (Pan-India)</option>
                                        <option value="notice">Legal Notice (Pan-India)</option>
                                        <option value="litigation">Litigation (Jaipur Only)</option>
                                        <option value="research">Legal Research (Pan-India)</option>
                                        <option value="title-search">Title Search (Pan-India)</option>
                                    </select>
                                </div>

                                <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit Request"}
                                    {!isSubmitting && (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    )}
                                </Button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting, you agree to our <a href="/privacy-policy" className="text-[#D4A646] hover:underline">Privacy Policy</a>
                                </p>
                            </form>

                            {/* Trust Indicators */}
                            <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Confidential</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>No Obligation</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
