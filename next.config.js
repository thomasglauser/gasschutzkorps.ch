/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['de'],
        defaultLocale: 'de',
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
};

module.exports = nextConfig;
