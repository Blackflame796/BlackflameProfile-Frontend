import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    // allowedDevOrigins: ['awfully-phlegmatic-lamb.cloudpub.ru', 'localhost', '127.0.0.1'],
    experimental: {
        optimizeCss: true,
    },
    output: 'standalone'
};

export default nextConfig;
