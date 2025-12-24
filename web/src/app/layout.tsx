import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import DisclaimerModal from "@/components/DisclaimerModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "RG Legal Solutions | Expert legal counsel in Jaipur",
  description:
    "RG Legal Solutions provides expert legal services across civil, criminal, and corporate law. Committed to integrity and excellence.",
  icons: {
    icon: '/RGlogowithoutbg.ico',
    shortcut: '/RGlogowithoutbg.ico',
    apple: '/RGlogowithoutbg.ico',
  },
  openGraph: {
    title: "RG Legal Solutions | Expert legal counsel in Jaipur",
    description: "RG Legal Solutions provides expert legal services across civil, criminal, and corporate law. Committed to integrity and excellence.",
    url: "https://www.rglegalsolutions.in",
    siteName: "RG Legal Solutions",
    images: [
      {
        url: '/RGlogowithoutbg.webp',
        width: 1200,
        height: 630,
        alt: 'RG Legal Solutions Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RG Legal Solutions | Expert legal counsel in Jaipur",
    description: "RG Legal Solutions provides expert legal services across civil, criminal, and corporate law. Committed to integrity and excellence.",
    images: ['/RGlogowithoutbg.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        <DisclaimerModal />
        <WhatsAppButton />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "@id": "https://www.rglegalsolutions.in/#organization",
              name: "RG Legal Solutions",
              alternateName: "RG Legal Solutions - Law Firm Jaipur",
              url: "https://www.rglegalsolutions.in",
              logo: "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
              image: "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
              description: "Leading law firm in Jaipur offering expert legal services across civil, criminal, and corporate law. Professional legal consultation, litigation, documentation, and research services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302033",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.807037",
                longitude: "75.836110",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919309212401",
                contactType: "customer service",
                email: "rgassociatesjaipur@gmail.com",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "10:00",
                closes: "20:00",
              },
              priceRange: "$$",
              areaServed: [
                {
                  "@type": "City",
                  name: "Jaipur",
                },
                {
                  "@type": "State",
                  name: "Rajasthan",
                },
                {
                  "@type": "Country",
                  name: "India",
                },
              ],
              knowsAbout: [
                "Civil Law",
                "Criminal Law",
                "Corporate Law",
                "Property Law",
                "Family Law",
                "Legal Consultation",
                "Litigation",
                "Legal Documentation",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
