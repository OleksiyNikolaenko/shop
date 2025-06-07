import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.mds.yandex.net",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "placeimg.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
