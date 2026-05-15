/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tile.openstreetmap.org",
      },
      {
        protocol: "https",
        hostname: "*.tile.openstreetmap.org",
      },
    ],
  },
};

export default nextConfig;
