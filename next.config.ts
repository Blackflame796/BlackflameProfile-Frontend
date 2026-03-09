import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    // allowedDevOrigins: ['awfully-phlegmatic-lamb.cloudpub.ru', 'localhost', '127.0.0.1'],
    experimental: {
        optimizeCss: true,
    },
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                port: '8000',
            },
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'http',
                hostname: '*',
                port: '3000',
            },
        ],
    },
};

export default nextConfig;
