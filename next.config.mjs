/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'example.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-portfolio/' : '',
  output: 'export',
}

export default nextConfig