import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Family Law Attorneys | RG Associates",
    description:
        "Compassionate family law services. We handle divorce, child custody, alimony, and inheritance matters with sensitivity and legal expertise.",
};

export default function FamilyLawPage() {
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
                                Personal Legal Support
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Family Law
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Navigating sensitive family matters with compassion, privacy, and expert legal guidance.
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
                                Compassionate Counsel for Family Matters
                            </h2>
                            <p>
                                Family law disputes are often emotionally charged and legally complex. At RG Associates, we recognize that these issues affect your personal life and future deeply. Our approach is rooted in empathy and a commitment to resolving conflicts in the most constructive manner possible, while firmly protecting your rights and interests.
                            </p>
                            <p>
                                Whether you are going through a divorce, seeking custody of your children, or dealing with inheritance issues, our experienced family law attorneys provide the steady hand and clear legal advice you need to move forward.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our Family Law Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Divorce & Separation:</strong> Handling mutual consent divorce, contested divorce, and judicial separation proceedings.
                                </li>
                                <li>
                                    <strong>Child Custody & Support:</strong> Advocating for the best interests of the child in custody battles and ensuring fair child support arrangements.
                                </li>
                                <li>
                                    <strong>Alimony & Maintenance:</strong> Securing fair spousal support and maintenance for financial security.
                                </li>
                                <li>
                                    <strong>Domestic Violence:</strong> Providing legal protection and representation for victims of domestic abuse under the Domestic Violence Act.
                                </li>
                                <li>
                                    <strong>Inheritance & Succession:</strong> Assisting with wills, probate, and succession certificates to ensure smooth transfer of assets.
                                </li>
                                <li>
                                    <strong>Restitution of Conjugal Rights:</strong> Legal remedies for the restoration of marital relationships.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Why Choose RG Associates?
                            </h3>
                            <p>
                                We prioritize mediation and amicable settlements whenever possible to reduce emotional stress and legal costs. However, when litigation is necessary, we are fierce advocates for our clients in family courts. We handle every case with the utmost confidentiality and respect.
                            </p>
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
                                            href="/services/real-estate"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Real Estate Law
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-10 bg-[#051427] p-6 rounded-xl text-white text-center">
                                    <h4 className="text-lg font-bold font-serif mb-2">
                                        Confidential Consultation
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Discuss your family matter privately with our experts.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
                                    >
                                        Book an Appointment
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
