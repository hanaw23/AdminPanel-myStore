/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const redirectConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/login",
  //     },
  //   ];
  // },

  basePath: "/login",
};

module.exports = { nextConfig, redirectConfig };
