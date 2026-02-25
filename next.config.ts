import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/Dev.akmal",
  assetPrefix: "/Dev.akmal/"
};


export default nextConfig;
