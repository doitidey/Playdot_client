/** @type {import('next').NextConfig} */

const imageDomains =
  process.env.NEXT_PUBLIC_IMAGE_URL &&
  new URL(process.env.NEXT_PUBLIC_IMAGE_URL).hostname;

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
