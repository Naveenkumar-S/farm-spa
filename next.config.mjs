/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com'
      },
    ]
  },
  async redirects() {
    return [
      // login redirect
      {
        source: '/test-redirect',
        destination: '/',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
