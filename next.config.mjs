/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
  return [{
    source: '/',
    destination: '/pet',
    permanent: true
  }]
}};

export default nextConfig;
