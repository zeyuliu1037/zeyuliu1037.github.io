import type { NextConfig } from "next";

// For GitHub Pages project site: set to your repo name, e.g. "/bento_portofolio_template"
// For user/org site (username.github.io): leave unset
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
