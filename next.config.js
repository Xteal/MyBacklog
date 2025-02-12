/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.akamai.steamstatic.com', 'cdn2.steamgriddb.com', 'cdn.cloudflare.steamstatic.com', 'shared.cloudflare.steamstatic.com', 'shared.fastly.steamstatic.com'],
  },
}

module.exports = nextConfig
