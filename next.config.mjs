/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-251a5a7318e34ff2971fc37200e7db67.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
