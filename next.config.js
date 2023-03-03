/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.akamai.steamstatic.com', 'cdn2.steamgriddb.com'],
  },
}

module.exports = nextConfig
