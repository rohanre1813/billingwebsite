import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  images: {
    remotePatterns: [],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
