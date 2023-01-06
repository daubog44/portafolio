/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // runtime: "experimental-edge",
    urlImports: [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/utils/Draggable.min.js",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ThrowPropsPlugin.min.js",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin.js?r=12",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ModifiersPlugin-latest-beta.js",
    ],
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
