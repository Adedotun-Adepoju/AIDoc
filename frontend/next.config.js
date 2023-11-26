/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
}

module.exports = nextConfig
