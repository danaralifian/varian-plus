/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.depositphotos.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
