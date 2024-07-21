/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
        // Ensure any custom webpack configuration does not override default CSS handling
        return config;
    },
};

export default nextConfig;

  