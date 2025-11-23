import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import DisclaimerModal from "@/components/DisclaimerModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "RG Associates | Expert Legal Counsel in India",
  description:
    "RG Associates provides expert legal services across civil, criminal, and corporate law. Committed to integrity and excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
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
              "@type": "LawFirm",
              name: "RG Associates",
              url: "https://www.rgassociates.com",
              logo: "https://www.rgassociates.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "[Address Line 1]",
                addressLocality: "[City]",
                addressRegion: "[State]",
                postalCode: "[Zip Code]",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "[Phone Number]",
                contactType: "customer service",
              },
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
