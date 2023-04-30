/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  unoptimized: true,
    domains: ['assets-in.bmscdn.com','res.cloudinary.com']
  },
}

module.exports = nextConfig

