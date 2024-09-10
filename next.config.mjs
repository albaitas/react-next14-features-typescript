/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'merlinx.lt', 
        pathname: '/assets/**', 
      },
    ],
  },
};

export default nextConfig;