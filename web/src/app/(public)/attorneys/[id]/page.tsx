import { getServerClient } from '@/lib/supabaseServer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Revalidate every hour
export const revalidate = 3600;

export default async function AttorneyBio({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = getServerClient();

    const { data: attorney, error } = await supabase
        .from('attorneys')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !attorney) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#D4A646]">Home</Link>
                        <span>/</span>
                        <Link href="/attorneys" className="hover:text-[#D4A646]">Attorneys</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{attorney.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Image & Contact */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="sticky top-8">
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl mb-8">
                                {attorney.image_url ? (
                                    <Image
                                        src={attorney.image_url}
                                        alt={attorney.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-6xl">
                                        {attorney.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <div className="bg-[#051427] text-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-lg font-serif font-bold mb-4 text-[#D4A646]">Contact Information</h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#D4A646]">📍</span>
                                        <span>New Delhi, India</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[#D4A646]">✉️</span>
                                        <a href="mailto:contact@rglegalsolutions.in" className="hover:text-[#D4A646] transition-colors">
                                            contact@rglegalsolutions.in
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-[#D4A646]">📞</span>
                                        <a href="tel:+919810150246" className="hover:text-[#D4A646] transition-colors">
                                            +91 98101 50246
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio & Details */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="mb-8">
                            <span className="inline-block py-1 px-3 rounded-full bg-[#D4A646]/10 text-[#D4A646] text-sm font-semibold tracking-wide uppercase mb-4">
                                {attorney.role}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#051427] mb-4">
                                {attorney.name}
                            </h1>
                            <h2 className="text-xl text-gray-500 font-medium">
                                {attorney.specialization}
                            </h2>
                        </div>

                        <div className="prose prose-lg text-gray-600 max-w-none">
                            <h3 className="text-[#051427] font-serif">About</h3>
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {attorney.bio || "No biography available."}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#D4A646] hover:bg-[#C8A34E] rounded-lg transition-all shadow-lg hover:shadow-xl"
                            >
                                Schedule a Consultation with {attorney.name.split(' ')[0]}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
