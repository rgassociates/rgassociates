import Link from "next/link";

// Mock data lookup - will replace with Supabase fetch
const getAttorney = (id: string) => {
    const attorneys = [
        {
            id: '1',
            name: 'Ravi Gupta',
            role: 'Managing Partner',
            bio: 'Ravi Gupta is a senior advocate with over 20 years of experience in corporate and civil litigation. He has successfully represented numerous high-profile clients in complex legal disputes.',
            credentials: ['LL.B, University of Delhi', 'Member, Bar Council of India', 'Specialist in Corporate Law'],
            practiceAreas: ['Corporate Law', 'Civil Litigation', 'Arbitration'],
        },
        {
            id: '2',
            name: 'Anjali Sharma',
            role: 'Senior Associate',
            bio: 'Anjali Sharma specializes in family law and mediation. She brings a compassionate yet firm approach to sensitive matters like divorce and custody.',
            credentials: ['LL.M, National Law School', 'Certified Mediator'],
            practiceAreas: ['Family Law', 'Mediation', 'Wills & Trusts'],
        },
        {
            id: '3',
            name: 'Vikram Singh',
            role: 'Associate',
            bio: 'Vikram Singh is an expert in criminal defense and constitutional law. He is known for his meticulous research and aggressive defense strategies.',
            credentials: ['LL.B, Symbiosis Law School', 'Criminal Defense Specialist'],
            practiceAreas: ['Criminal Defense', 'Constitutional Law'],
        },
    ];
    return attorneys.find((a) => a.id === id);
};

export default async function AttorneyProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const attorney = getAttorney(id);

    if (!attorney) {
        return <div className="py-24 text-center">Attorney not found</div>;
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    {/* Sidebar / Photo */}
                    <div className="lg:col-span-1">
                        <div className="aspect-[3/4] w-full rounded-2xl bg-gray-100 object-cover flex items-center justify-center text-gray-400">
                            {/* Image Placeholder */}
                            <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold leading-8 text-gray-900">Contact</h3>
                            <p className="text-base leading-7 text-gray-600">
                                <a href="mailto:contact@rgassociates.com" className="hover:text-primary-600">contact@rgassociates.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">{attorney.name}</h1>
                        <p className="mt-2 text-xl font-semibold leading-8 text-primary-600">{attorney.role}</p>

                        <div className="mt-10 max-w-2xl">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Biography</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {attorney.bio}
                            </p>
                        </div>

                        <div className="mt-10 max-w-2xl">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Credentials & Education</h2>
                            <ul role="list" className="mt-6 space-y-3 text-gray-600">
                                {attorney.credentials.map((cred, index) => (
                                    <li key={index} className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                        </svg>
                                        <span>{cred}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10 max-w-2xl">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Practice Areas</h2>
                            <div className="mt-6 flex flex-wrap gap-4">
                                {attorney.practiceAreas.map((area, index) => (
                                    <Link key={index} href="/services" className="rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-secondary-200">
                                        {area}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
