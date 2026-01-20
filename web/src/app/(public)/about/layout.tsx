import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About RG Legal Solutions | Leading Law Firm in Jaipur, Rajasthan",
    description: "Learn about RG Legal Solutions - Jaipur's trusted law firm since inception. Expert legal team, client-centric approach, 500+ successful cases. Committed to integrity, excellence, and justice.",
    keywords: [
        "about rg legal solutions",
        "law firm jaipur",
        "legal team jaipur",
        "best lawyers jaipur",
        "jaipur advocates",
        "top law firm rajasthan",
        "legal services jaipur",
        "experienced lawyers jaipur",
    ],
    alternates: {
        canonical: 'https://www.rglegalsolutions.in/about',
    },
    openGraph: {
        title: "About RG Legal Solutions | Leading Law Firm in Jaipur",
        description: "Jaipur's trusted law firm. Expert legal team, client-centric approach, 500+ successful cases. Committed to integrity and excellence.",
        url: "https://www.rglegalsolutions.in/about",
        siteName: "RG Legal Solutions",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "About RG Legal Solutions | Leading Law Firm in Jaipur",
        description: "Jaipur's trusted law firm. Expert legal team, 500+ successful cases.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
