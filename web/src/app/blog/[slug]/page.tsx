import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase, BlogPost } from '@/lib/supabase';

type Props = {
    params: Promise<{ slug: string }>;
};

async function getBlog(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (error || !data) {
        return null;
    }

    return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: 'Blog Not Found | RG Associates',
        };
    }

    const title = blog.seo_title || blog.title;
    const description = blog.seo_description || blog.short_description;
    const canonicalUrl = blog.canonical_url || `https://www.rgassociates.com/blog/${blog.slug}`;

    return {
        title: `${title} | RG Associates`,
        description,
        keywords: blog.keywords?.join(', '),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: blog.published_at,
            authors: [blog.author],
            images: [
                {
                    url: blog.cover_image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [blog.cover_image],
        },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        notFound();
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        image: blog.cover_image,
        author: {
            '@type': 'Person',
            name: blog.author,
        },
        publisher: {
            '@type': 'LegalService',
            name: 'RG Associates',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.rgassociates.com/logo.png',
            },
        },
        datePublished: blog.published_at,
        dateModified: blog.published_at,
        description: blog.short_description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.rgassociates.com/blog/${blog.slug}`,
        },
    };

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Breadcrumb */}
            <nav className="bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4">
                    <ol className="flex items-center gap-2 text-sm text-gray-600">
                        <li>
                            <Link href="/" className="hover:text-[#D4A646] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-[#D4A646] transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>
                        <li className="text-gray-900 font-medium truncate">{blog.title}</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Article Content */}
            <article className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#051427] font-serif mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600 border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span className="font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <time dateTime={blog.published_at}>
                                {new Date(blog.published_at).toLocaleDateString('en-IN', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#051427]
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#D4A646] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#051427] prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Back to Blog */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#D4A646] font-semibold hover:gap-3 transition-all"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span>Back to All Articles</span>
                    </Link>
                </div>
            </article>
        </div>
    );
}
