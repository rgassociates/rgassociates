import Link from "next/link";

// Mock data lookup
const getPost = (slug: string) => {
    return {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>Understanding the legal framework is crucial.</li>
        <li>Compliance avoids costly penalties.</li>
        <li>Consulting with an expert is recommended.</li>
      </ul>
    `,
        date: 'Mar 16, 2023',
        author: {
            name: 'Ravi Gupta',
            role: 'Managing Partner',
            href: '/attorneys/1',
        },
        relatedService: {
            title: 'Tax Law',
            slug: 'tax-law'
        }
    };
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <div className="text-center">
                        <p className="text-base font-semibold leading-7 text-primary-600">Legal Insight</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">{post.title}</h1>
                        <div className="mt-6 flex items-center justify-center gap-x-4 text-sm">
                            <span className="text-gray-500">{post.date}</span>
                            <span className="text-gray-300">&bull;</span>
                            <Link href={post.author.href} className="font-semibold text-gray-900 hover:text-primary-600">
                                {post.author.name}
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 max-w-2xl mx-auto prose prose-lg prose-indigo text-gray-600">
                        {/* In a real app, use a markdown parser or sanitize HTML */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Author Box (E-E-A-T) */}
                    <div className="mt-16 max-w-2xl mx-auto border-t border-gray-200 pt-8">
                        <div className="flex items-center gap-x-6">
                            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                {/* Author Image Placeholder */}
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{post.author.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-primary-600">{post.author.role}</p>
                                <p className="text-sm text-gray-600">Expert in Corporate and Tax Law.</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Service CTA */}
                    <div className="mt-12 max-w-2xl mx-auto bg-primary-50 rounded-xl p-6 text-center">
                        <p className="text-gray-900 font-semibold">
                            Need assistance with {post.relatedService.title}?
                        </p>
                        <Link href={`/services/${post.relatedService.slug}`} className="mt-4 inline-block rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
                            View Practice Area
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
