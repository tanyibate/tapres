/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cf.bstatic.com", "upload.wikimedia.org", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
