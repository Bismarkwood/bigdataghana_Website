/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Remove X-Powered-By header (security + slightly smaller responses)
  poweredByHeader: false,

  // Gzip / Brotli compression
  compress: true,

  images: {
    // Serve modern image formats (avif → webp → original)
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 1 year on the CDN
    minimumCacheTTL: 31536000,

    // Provide sensible device widths for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  outputFileTracingRoot: __dirname,

  // Reduce client-side JS shipped to the browser
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

module.exports = nextConfig;
