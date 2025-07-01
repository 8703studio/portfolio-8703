/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    console.log('Webpack chargé avec succès');
    return config;
  },
};

export default nextConfig;
