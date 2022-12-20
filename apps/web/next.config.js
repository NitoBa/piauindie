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
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.NEXT_PUBLIC_ADMIN_API,
  },
}

module.exports = nextConfig
