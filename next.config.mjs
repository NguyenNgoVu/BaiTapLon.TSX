/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mysql2', 'fs']
  },
  webpack: config => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config
  }
};

export default nextConfig;
