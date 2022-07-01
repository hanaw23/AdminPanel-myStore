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

  // basePath: "/login",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = { nextConfig, redirectConfig };
