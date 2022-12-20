/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'upload.wikimedia.org',
    ],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_ADMIN_API,
  },
}

module.exports = nextConfig
