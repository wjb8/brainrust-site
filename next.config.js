/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "brainrustonline.com",
          },
        ],
        destination: "https://www.brainrustonline.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
