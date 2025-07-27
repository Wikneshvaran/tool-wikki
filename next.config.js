/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Prevent image optimization issues
  },
}

module.exports = nextConfig
