/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.drugs.com', 'cdn.gamma.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy to backend
      },
    ];
  },
};

module.expor