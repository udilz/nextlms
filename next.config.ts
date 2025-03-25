import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a78d41564c2f4184b20570210c81d64f.r2.dev",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
