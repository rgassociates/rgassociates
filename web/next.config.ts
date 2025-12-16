import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Redirects for old service URLs to new structure
  async redirects() {
    return [
      // Old individual service pages → New consultation category
      {
        source: '/services/civil-litigation',
        destination: '/services/legal-consultation/civil-litigation',
        permanent: true,
      },
      {
        source: '/services/criminal-defense',
        destination: '/services/legal-consultation/criminal-defense',
        permanent: true,
      },
      {
        source: '/services/corporate-law',
        destination: '/services/legal-consultation/corporate-law',
        permanent: true,
      },
      {
        source: '/services/family-law',
        destination: '/services/legal-consultation/family-law',
        permanent: true,
      },
      {
        source: '/services/intellectual-property',
        destination: '/services/legal-consultation/intellectual-property',
        permanent: true,
      },
      {
        source: '/services/real-estate',
        destination: '/services/legal-consultation/real-estate',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
