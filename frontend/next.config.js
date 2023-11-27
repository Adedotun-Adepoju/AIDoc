/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    async rewrites() {
      return [
        {
          source: "/api/chat/conversation",
          destination: "https://aidoc.up.railway.app/chat/conversation",
        },
        {
          source: "/api/chat/prompt",
          destination: "https://aidoc.up.railway.app/chat/prompt",
        },
        {
          source: "/api/chat/conversations/:slug",
          destination: "https://aidoc.up.railway.app/chat/conversations/:slug",
        },
        {
          source: "/api/auth/login",
          destination: "https://aidoc.up.railway.app/auth/login",
        },
        {
          source: "/api/auth/sign-up",
          destination: "https://aidoc.up.railway.app/auth/sign-up",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
