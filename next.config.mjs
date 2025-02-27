/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static7.depositphotos.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
