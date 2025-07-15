/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_CHAIN_NAME: process.env.NEXT_PUBLIC_CHAIN_NAME,
    NEXT_CHAIN_RPC: process.env.NEXT_PUBLIC_CHAIN_RPC,
  },  
}

module.exports = nextConfig
