import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel auto-detects Next.js and handles the deployment — no need for
  // `output: "standalone"` (that's only for self-hosting).
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
