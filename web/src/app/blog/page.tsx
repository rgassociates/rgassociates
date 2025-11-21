import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Legal Insights & Blog | RG Associates",
    description:
        "Stay updated with the latest legal trends, analysis, and news from RG Associates. Expert insights on corporate law, real estate, and more.",
};

const posts = [
    {
        id: 1,
        title: "Understanding the New Corporate Tax Laws in India",
        excerpt: "A comprehensive guide to the recent amendments in the corporate tax structure and what it means for your business.",
        date: "Oct 15, 2023",
        category: "Corporate Law",
        author: "Rajesh Gupta",
        slug: "corporate-tax-laws-india",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Navigating Property Disputes: A Legal Perspective",
        excerpt: "Common issues in property inheritance and transfer, and how to resolve them effectively through legal channels.",
        date: "Sep 28, 2023",
        category: "Real Estate",
        author: "Priya Sharma",
        slug: "property-disputes-legal-perspective",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Cybercrime and Data Protection: What You Need to Know",
        excerpt: "With the rise of digital transactions, understanding the legal framework around data privacy is crucial.",
        date: "Sep 10, 2023",
        category: "Technology Law",
        author: "Amit Verma",
        slug: "cybercrime-data-protection",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "6 min read"
    },
];

export default function Blog() {
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
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Legal Insights</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Latest Updates & Analysis
                        </h1>
                        <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                            Stay informed with our expert analysis on the latest legal developments and trends.
                        </p>
                    </div>
                </div>

                {/* Bottom Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/80 via-[#051427]/20 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center rounded-lg bg-[#D4A646] px-3 py-1.5 text-xs font-semibold text-[#051427] shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col flex-grow">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <time dateTime={post.date}>{post.date}</time>
                                        </div>
                                        <span className="text-gray-300">•</span>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title & Excerpt */}
                                    <h3 className="text-2xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>

                                    {/* Author & CTA */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D4A646]/20 to-[#D4A646]/10 flex items-center justify-center">
                                                <svg className="h-5 w-5 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#D4A646] font-semibold text-sm group-hover:gap-3 transition-all">
                                            <span>Read</span>
                                            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
