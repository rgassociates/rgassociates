import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Core Next.js optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ];
  },

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
