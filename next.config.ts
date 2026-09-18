import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/ordomognus" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
