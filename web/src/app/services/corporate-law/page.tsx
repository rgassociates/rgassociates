import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Corporate Law Firm in India | M&A, Compliance & Contracts",
    description:
        "Leading corporate law firm in India. Expert legal services for company registration, mergers & acquisitions, contract drafting, and regulatory compliance.",
};

export default function CorporateLawPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">
                                Business Legal Solutions
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Corporate Law Services
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Empowering businesses with strategic legal counsel, from incorporation to complex mergers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8 text-gray-700 leading-relaxed">
                            <h2 className="text-3xl font-bold text-[#051427] font-serif">
                                Strategic Legal Advisory for Modern Businesses
                            </h2>
                            <p>
                                In today's dynamic business environment, navigating the legal landscape is crucial for success. RG Associates provides comprehensive corporate law services designed to support businesses at every stage of their lifecycle. From startups to established corporations, we offer legal solutions that foster growth, ensure compliance, and mitigate risks.
                            </p>
                            <p>
                                Our team acts as a strategic partner to your business. We don't just interpret the law; we apply it to your specific commercial context, helping you make informed decisions that drive your business forward.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our Corporate Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Company Incorporation:</strong> Assisting with the registration of Private Limited Companies, LLPs, and One Person Companies (OPCs).
                                </li>
                                <li>
                                    <strong>Regulatory Compliance:</strong> Ensuring adherence to the Companies Act, SEBI regulations, and other statutory requirements.
                                </li>
                                <li>
                                    <strong>Mergers & Acquisitions (M&A):</strong> Legal due diligence, structuring deals, and drafting transaction documents for mergers, acquisitions, and joint ventures.
                                </li>
                                <li>
                                    <strong>Contract Drafting & Vetting:</strong> Creating robust commercial contracts, service agreements, NDAs, and employment contracts.
                                </li>
                                <li>
                                    <strong>Insolvency & Bankruptcy:</strong> Advisory and representation under the Insolvency and Bankruptcy Code (IBC) for creditors and corporate debtors.
                                </li>
                                <li>
                                    <strong>Dispute Resolution:</strong> Representing corporate clients in commercial litigation and arbitration proceedings.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Why Partner with Us?
                            </h3>
                            <p>
                                We understand the speed of business. Our attorneys are responsive, commercially aware, and dedicated to providing practical solutions. Whether you need ongoing general counsel or assistance with a specific high-stakes transaction, RG Associates delivers the expertise you need to succeed.
                            </p>

                            {/* FAQ Section */}
                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <dl className="space-y-6">
                                    <div>
                                        <dt className="font-semibold text-[#051427]">What legal structure is best for my startup?</dt>
                                        <dd className="mt-2 text-gray-600">The ideal structure (LLP, Pvt Ltd, etc.) depends on your funding needs, liability concerns, and scalability. We can assess your business model to recommend the best fit.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">Why is due diligence important in M&A?</dt>
                                        <dd className="mt-2 text-gray-600">Due diligence uncovers potential legal liabilities, financial risks, and compliance issues, ensuring you make an informed investment decision.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">Can you help with international business contracts?</dt>
                                        <dd className="mt-2 text-gray-600">Yes, we have extensive experience in drafting and reviewing cross-border agreements, ensuring they comply with relevant international laws and protect your interests.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-[#051427] font-serif mb-6">
                                    Related Services
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link
                                            href="/services/intellectual-property"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Intellectual Property
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/real-estate"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Real Estate Law
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/civil-litigation"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Civil Litigation
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-10 bg-[#051427] p-6 rounded-xl text-white text-center">
                                    <h4 className="text-lg font-bold font-serif mb-2">
                                        Business Legal Needs?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Let's discuss how we can support your business goals.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
                                    >
                                        Schedule a Consultation
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
