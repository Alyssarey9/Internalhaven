/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This option allows you to use JSX syntax in .js files
  // which is what we need for our JavaScript-only approach
  pageExtensions: ['jsx', 'js'],
};

module.exports = nextConfig; 