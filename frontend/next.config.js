/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    compiler: {
      styledComponents: true,
    },
    async rewrites() {
      return [
        {
          source: "/api/auth/login",
          destination: "https://aidoc.up.railway.app/auth/login",
        },
        {
          source: "/api/auth/sign-up",
          destination: "https://aidoc.up.railway.app/auth/sign-up",
        },
        {
          source: "/api/chat/conversations/:slug",
          destination: "https://aidoc.up.railway.app/chat/conversations/:slug",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  