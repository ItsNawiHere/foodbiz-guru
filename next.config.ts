import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/foodbiz-guru',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
