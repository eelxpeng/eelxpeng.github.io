/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },
  // experimental: {
  //   serverActions: true,
  // },
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
