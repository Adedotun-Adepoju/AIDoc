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
    ];
  },
}

module.exports = nextConfig
