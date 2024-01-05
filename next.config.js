/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    // remotePatterns: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
