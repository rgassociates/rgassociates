import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Intellectual Property Lawyers in India | Trademark & Patent",
    description:
        "Top IP law firm in India. Expert services for trademark registration, patent filing, copyright protection, and infringement litigation.",
};

export default function IntellectualPropertyPage() {
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
                                Innovation Protection
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Intellectual Property Services
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Safeguarding your creative assets, brands, and inventions in a competitive marketplace.
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
                                Protecting Your Intellectual Assets
                            </h2>
                            <p>
                                In the knowledge economy, Intellectual Property (IP) is often a business's most valuable asset. Whether you are an artist, an inventor, or a business owner, protecting your ideas and brand identity is essential. RG Associates offers comprehensive IP services to help you secure, manage, and enforce your intellectual property rights.
                            </p>
                            <p>
                                Our team combines legal expertise with industry knowledge to provide strategic advice on IP portfolios. We help you navigate the complexities of registration and defend your rights against infringement.
                            </p>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Our IP Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>Trademarks:</strong> Search, registration, objection handling, and renewal of trademarks to protect your brand identity.
                                </li>
                                <li>
                                    <strong>Copyrights:</strong> Registration and protection of literary, artistic, musical, and software works.
                                </li>
                                <li>
                                    <strong>Patents:</strong> Advisory on patentability, drafting specifications, and filing patent applications for inventions.
                                </li>
                                <li>
                                    <strong>Designs:</strong> Registration of industrial designs to protect the aesthetic aspect of your products.
                                </li>
                                <li>
                                    <strong>IP Litigation:</strong> Representing clients in infringement suits, passing-off actions, and validity challenges in courts and tribunals.
                                </li>
                                <li>
                                    <strong>Licensing & Assignment:</strong> Drafting and negotiating agreements for the commercialization of IP assets.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#051427] font-serif mt-8">
                                Why Choose RG Associates?
                            </h3>
                            <p>
                                We take a proactive approach to IP management. We don't just file forms; we help you build a robust IP strategy that aligns with your business goals. From startups protecting their first logo to established companies managing complex portfolios, we deliver tailored solutions to keep your innovations safe.
                            </p>

                            {/* FAQ Section */}
                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <h3 className="text-2xl font-bold text-[#051427] font-serif mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <dl className="space-y-6">
                                    <div>
                                        <dt className="font-semibold text-[#051427]">How long is a trademark valid in India?</dt>
                                        <dd className="mt-2 text-gray-600">A registered trademark is valid for 10 years and can be renewed indefinitely every 10 years.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">What is the difference between copyright and trademark?</dt>
                                        <dd className="mt-2 text-gray-600">Copyright protects original creative works (books, music, art), while a trademark protects brand identifiers (logos, names, slogans) used in commerce.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-[#051427]">Can I copyright my software?</dt>
                                        <dd className="mt-2 text-gray-600">Yes, software code can be protected under copyright law as a "literary work." In some cases, unique algorithms may also be patentable.</dd>
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
                                            href="/services/corporate-law"
                                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#D4A646] font-medium"
                                        >
                                            Corporate Law
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
                                        Secure Your Brand
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-6">
                                        Don't let others profit from your hard work. Start your IP protection today.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
                                    >
                                        Get IP Advice
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
