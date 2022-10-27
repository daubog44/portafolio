/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["Crimson Pro", "latin"] },
      },
    ],
  },
};

module.exports = nextConfig;
