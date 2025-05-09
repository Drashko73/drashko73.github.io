/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  trailingSlash: true, // Adds trailing slash to URLs, good for static hosting
  images: {
    unoptimized: true, // For static export
    domains: ['github.com'], // Add domains you'll use for images
  },
  // For supporting GitHub Pages paths
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

export default nextConfig