/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/leave/:path*",
        destination: "http://localhost:8080/leave/:path*", // Replace with your backend server URL
      },
    ];
  },
};

module.exports = nextConfig;
