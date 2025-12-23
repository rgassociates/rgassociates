import { Metadata } from 'next';
import Link from 'next/link';
import { supabase, BlogPost } from '@/lib/supabase';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
    title: 'Legal Insights & News | RG Legal Solutions',
    description: 'Stay updated with the latest legal trends, case studies, and expert insights from RG Legal Solutions. Your trusted source for legal knowledge in India.',
    openGraph: {
        title: 'Legal Insights & News | RG Legal Solutions',
        description: 'Stay updated with the latest legal trends, case studies, and expert insights from RG Legal Solutions.',
        type: 'website',
    },
};

async function getBlogs(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }

    return data || [];
}

export default async function BlogPage() {
    const blogs = await getBlogs();

    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Legal Insights & News',
        description: 'Latest legal articles and insights from RG Legal Solutions',
        url: 'https://www.rglegalsolutions.in/blog',
        publisher: {
            '@type': 'LegalService',
            name: 'RG Legal Solutions',
        },
    };

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
                <div className="absolute inset-0 opacity-5">
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
                            <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">
                                Legal Insights
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            Latest Legal News & Insights
                        </h1>
                        <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                            Expert analysis, case studies, and updates on Indian law to keep you informed and ahead.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {blogs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-600">No blog posts available at the moment. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                            {blogs.map((blog, index) => (
                                <article
                                    key={blog.id}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={blog.cover_image}
                                            alt={blog.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/80 via-[#051427]/40 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <time dateTime={blog.published_at}>
                                                {new Date(blog.published_at).toLocaleDateString('en-IN', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </time>
                                            <span>•</span>
                                            <span>{blog.author}</span>
                                        </div>

                                        <h2 className="text-xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors line-clamp-2">
                                            <Link href={`/blog/${blog.slug}`}>
                                                <span className="absolute inset-0" />
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            {blog.short_description}
                                        </p>

                                        <div className="flex items-center gap-2 text-[#D4A646] font-semibold group-hover:gap-3 transition-all mt-auto">
                                            <span>Read More</span>
                                            <svg
                                                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
