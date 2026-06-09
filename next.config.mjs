import withPWA from 'next-pwa';

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  }
});

export default nextConfig;
