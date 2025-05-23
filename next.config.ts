import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.gramedia.com', 'cdn.gramedia.com'],
  },
};

export default nextConfig;
