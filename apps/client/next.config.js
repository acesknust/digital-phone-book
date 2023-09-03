/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["uicore"],
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
