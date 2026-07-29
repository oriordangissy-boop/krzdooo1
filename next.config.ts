import type { NextConfig } from "next";

const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Custom domains serve from the root. Keep an explicit override only for
  // intentional repository-path previews.
  basePath: pagesBasePath || undefined,
  assetPrefix: pagesBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
