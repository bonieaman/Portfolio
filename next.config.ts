import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  turbopack: {
    root: process.cwd()
  },
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
