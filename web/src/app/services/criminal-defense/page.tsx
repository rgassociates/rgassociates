import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Criminal Defense Lawyers | RG Associates",
    description:
        "Aggressive criminal defense representation. We handle bail matters, trials, appeals, and white-collar crimes with a commitment to protecting your liberty.",
};

export default function CriminalDefensePage() {
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
                                Legal Defense
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Criminal Defense
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Protecting your rights and liberty with aggressive, strategic, and experienced legal representation.
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
                                Unwavering Defense Against Criminal Charges
                            </h2>
                            <p>
                                Facing criminal charges is one of the most daunting experiences a person can go through. The consequences—loss of reputation, fines, and potential incarceration—are severe. At RG Associates, we provide a robust defense for individuals accused of crimes, ensuring that their constitutional rights are upheld at every stage of the legal process.
                            </p>
                            <p>
                                Our criminal defense team is known for its proactive approach. We don't just wait for the trial; we investigate the prosecution's case, challenge evidence, and negotiate strategically to secure favorable outcomes, whether that means a dismissal, acquittal, or reduced charges.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our Defense Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Bail Matters:</strong> Securing Anticipatory Bail and Regular Bail in Sessions Courts and High Courts to prevent unnecessary detention.
                                </li>
                                <li>
                                    <strong>White-Collar Crimes:</strong> Defense against allegations of fraud, embezzlement, money laundering, and corporate malfeasance.
                                </li>
                                <li>
                                    <strong>Cyber Crimes:</strong> Representation in cases involving IT Act violations, data theft, and online fraud.
                                </li>
                                <li>
                                    <strong>Trials & Appeals:</strong> rigorous defense during trials and filing appeals in higher courts against wrongful convictions.
                                </li>
                                <li>
                                    <strong>NDPS Act Cases:</strong> Specialized defense for cases involving narcotics and psychotropic substances.
                                </li>
                                <li>
                                    <strong>Cheque Bounce Cases:</strong> Defense and prosecution under Section 138 of the Negotiable Instruments Act.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                A Strategic Approach to Justice
                            </h3>
                            <p>
                                We believe that every client deserves a fair trial. Our attorneys meticulously examine police reports, witness statements, and forensic evidence to identify inconsistencies. We are committed to standing by your side, offering not just legal counsel, but the support and guidance you need during a challenging time.
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
                                            href="/services/corporate-law"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Corporate Law
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-10 bg-[#051427] p-6 rounded-xl text-white text-center">
                                    <h4 className="text-lg font-bold font-serif mb-2">
                                        Urgent Legal Help?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        If you or a loved one has been arrested or charged, do not delay.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
                                    >
                                        Contact Us Immediately
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
