import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imgur.com',
        port: '',
        search: ''
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        search: ''
      }
    ]
  }
};

export default nextConfig;
