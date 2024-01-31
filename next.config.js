/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
