/** @type {import('next').NextConfig} */

const imageDomains = process.env.NEXT_PUBLIC_IMAGE_URL
  ? process.env.NEXT_PUBLIC_IMAGE_URL.split("/")[2]
  : [];

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/match/today",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/match/today",
        permanent: false,
      },
    ];
  },

  images: {
    domains: [imageDomains],
  },
};

module.exports = nextConfig;
