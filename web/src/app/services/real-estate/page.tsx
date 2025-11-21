import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Real Estate Lawyers in India | Property Disputes & RERA",
    description:
        "Expert real estate lawyers in India. Legal services for property registration, RERA compliance, landlord-tenant disputes, and due diligence.",
};

export default function RealEstatePage() {
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
                                Property Law
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Real Estate Services
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Navigating the complexities of property transactions and disputes with confidence.
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
                                Secure Your Property Interests
                            </h2>
                            <p>
                                Real estate transactions involve significant financial investments and complex legal regulations. Whether you are buying a home, leasing commercial space, or developing land, having the right legal advice is crucial to avoid pitfalls. RG Associates provides comprehensive legal support for all aspects of real estate law.
                            </p>
                            <p>
                                We assist individuals, developers, and investors in navigating the legal intricacies of the property market. Our goal is to ensure your transactions are secure, compliant, and free from future legal complications.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our Real Estate Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Due Diligence:</strong> Thorough title verification and search reports to ensure the property is free from encumbrances and legal disputes.
                                </li>
                                <li>
                                    <strong>Conveyancing:</strong> Drafting and vetting Sale Deeds, Lease Deeds, Gift Deeds, and other property transfer documents.
                                </li>
                                <li>
                                    <strong>RERA Compliance:</strong> Advisory and representation for developers and homebuyers under the Real Estate (Regulation and Development) Act.
                                </li>
                                <li>
                                    <strong>Landlord-Tenant Disputes:</strong> Handling eviction suits, rent disputes, and lease enforcement.
                                </li>
                                <li>
                                    <strong>Property Registration:</strong> Assistance with the registration of documents at the Sub-Registrar's office.
                                </li>
                                <li>
                                    <strong>Property Litigation:</strong> Representing clients in suits for partition, possession, and specific performance.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Why Choose RG Associates?
                            </h3>
                            <p>
                                Our deep understanding of local property laws and regulations allows us to identify potential issues before they become problems. We provide clear, practical advice to help you make informed decisions about your real estate investments.
                            </p>

                            {/* FAQ Section */}
                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <dl className="space-y-6">
                                    <div>
                                        <dt className="font-semibold text-[#051427]">Why is title verification important?</dt>
                                        <dd className="mt-2 text-gray-600">Title verification confirms the seller's ownership and ensures there are no pending legal cases or mortgages on the property, protecting you from fraud.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">How can RERA help homebuyers?</dt>
                                        <dd className="mt-2 text-gray-600">RERA provides a mechanism for speedy dispute resolution and ensures transparency in project timelines and approvals, protecting buyers from delays.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">What are the grounds for tenant eviction?</dt>
                                        <dd className="mt-2 text-gray-600">Common grounds include non-payment of rent, subletting without permission, or using the property for illegal purposes. The specific laws vary by state.</dd>
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
                                            href="/services/civil-litigation"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Civil Litigation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/corporate-law"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Corporate Law
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/family-law"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Family Law
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-10 bg-[#051427] p-6 rounded-xl text-white text-center">
                                    <h4 className="text-lg font-bold font-serif mb-2">
                                        Buying or Selling?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Ensure your property transaction is legally sound.
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
