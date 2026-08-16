import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * The illustrations in /public/image are our own SVGs. Serving them through
     * next/image needs this flag; the CSP below keeps the file inert either way.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
