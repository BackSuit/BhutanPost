const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
  images: {
    unoptimized:
      process.env.NEXT_IMAGE_UNOPTIMIZED === "true" ||
      process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // Removed 4K/rare sizes to prevent "Transformation Spikes"
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    // All quality values used across Image components
    qualities: [30, 40, 50, 60, 70, 75, 80],
    // Set to 1 year (31,536,000 seconds) to save your quota
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    // Changed to "inline" so images open in the browser instead of downloading
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {},
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "framer-motion",
      "react-icons",
      "date-fns",
      "react-share",
    ],
  },
}

module.exports = withPWA(nextConfig)
