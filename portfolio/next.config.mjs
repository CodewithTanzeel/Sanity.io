/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io', // Sanity image CDN hostname
          port: '',
          pathname: '**', // Path pattern to match Sanity images
        },
      ],
    },
  }

export default nextConfig;
