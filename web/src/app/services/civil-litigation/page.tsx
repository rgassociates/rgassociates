import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/seo/Schema";

export const metadata: Metadata = {
    title: "Civil Litigation Lawyer in India | Property & Contract Disputes",
    description:
        "Top-rated civil litigation lawyers in India. Expert legal representation for property disputes, breach of contract, recovery suits, and injunctions. Consult RG Associates today.",
};

export default function CivilLitigationPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LegalService",
                "name": "RG Associates - Civil Litigation",
                "description": "Expert civil dispute resolution services including property disputes, contract enforcement, and recovery suits.",
                "url": "https://www.rgassociates.com/services/civil-litigation",
                "serviceType": "Civil Litigation",
                "areaServed": "India"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How long does a civil lawsuit take in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The duration varies significantly based on the case complexity and court backlog. However, we strive for expedited proceedings through strategic filings and efficient case management."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can civil disputes be settled out of court?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, many civil matters are resolved through negotiation, mediation, or arbitration, which saves time and costs compared to a full trial."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What documents are needed to file a civil suit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Key documents include contracts, correspondence, property deeds, invoices, and any evidence supporting your claim. Our team will guide you through the specific requirements."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white">
            <Schema data={schemaData} />
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
                                Legal Expertise
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Civil Litigation Services
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Resolving complex disputes with strategic precision and unwavering dedication to your rights.
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
                                Expert Civil Dispute Resolution in India
                            </h2>
                            <p>
                                Civil litigation encompasses a broad range of legal disputes between individuals, businesses, or other entities. At RG Associates, we understand that civil conflicts can be stressful, time-consuming, and financially draining. Our goal is to provide effective, results-oriented representation to resolve these matters efficiently.
                            </p>
                            <p>
                                Whether you are a plaintiff seeking justice or a defendant protecting your interests, our experienced attorneys craft tailored strategies to achieve the best possible outcome. We handle cases in District Courts, High Courts, and the Supreme Court of India.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our Areas of Expertise
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Property Disputes:</strong> Resolution of title disputes, boundary issues, landlord-tenant conflicts, and adverse possession claims.
                                </li>
                                <li>
                                    <strong>Contract Enforcement:</strong> Handling breach of contract cases, specific performance suits, and damages claims for businesses and individuals.
                                </li>
                                <li>
                                    <strong>Recovery Suits:</strong> Legal action for the recovery of debts, dues, and outstanding payments under the Code of Civil Procedure (CPC).
                                </li>
                                <li>
                                    <strong>Injunctions & Stays:</strong> Obtaining temporary or permanent injunctions to prevent harm or preserve the status quo during litigation.
                                </li>
                                <li>
                                    <strong>Consumer Protection:</strong> Representing clients in consumer forums against unfair trade practices and service deficiencies.
                                </li>
                                <li>
                                    <strong>Tort Claims:</strong> Advocacy in cases involving negligence, defamation, nuisance, and personal injury.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Why Choose RG Associates?
                            </h3>
                            <p>
                                We combine deep legal knowledge with a practical approach. Our team meticulously analyzes evidence, researches case law, and prepares compelling arguments. We also explore Alternative Dispute Resolution (ADR) mechanisms like mediation and arbitration when they offer a faster, more cost-effective path to resolution.
                            </p>

                            {/* FAQ Section */}
                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <dl className="space-y-6">
                                    <div>
                                        <dt className="font-semibold text-[#051427]">How long does a civil lawsuit take in India?</dt>
                                        <dd className="mt-2 text-gray-600">The duration varies significantly based on the case complexity and court backlog. However, we strive for expedited proceedings through strategic filings and efficient case management.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">Can civil disputes be settled out of court?</dt>
                                        <dd className="mt-2 text-gray-600">Yes, many civil matters are resolved through negotiation, mediation, or arbitration, which saves time and costs compared to a full trial.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">What documents are needed to file a civil suit?</dt>
                                        <dd className="mt-2 text-gray-600">Key documents include contracts, correspondence, property deeds, invoices, and any evidence supporting your claim. Our team will guide you through the specific requirements.</dd>
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
                                            href="/services/real-estate"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Real Estate Law
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
                                        Need Legal Advice?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Schedule a consultation with our civil litigation experts today.
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
