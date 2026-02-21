/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack root - fixes workspace detection issue
  turbopack: {
    root: __dirname,
  },
  
  // Image optimization - optimized for mobile
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable modern formats - AVIF first for mobile
    formats: ['image/avif', 'image/webp'],
    // Reduced sizes for mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Minimum cache time
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Enable compression
  compress: true,
  
  // Production optimizations
  poweredByHeader: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // Experimental features for better performance
  experimental: {
    // Optimize package imports for smaller bundle
    optimizePackageImports: ['framer-motion'],
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

