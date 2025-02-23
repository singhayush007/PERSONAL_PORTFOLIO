/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com'
    ]
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN, // Ensure GitHub Token is accessible
  },
};

module.exports = nextConfig;
