import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL('https://wiki.dcet.uab.pt/**')],
    },
};

export default nextConfig;
