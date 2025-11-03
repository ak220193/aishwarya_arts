/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

    compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  swcMinify: true,
  trailingSlash: false,
};

export default nextConfig;
