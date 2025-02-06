/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://gasschutzkorps.ch/',
    generateRobotsTxt: true,
    exclude: ['/legal', '/imprint', '/geoguesser'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/legal', '/imprint', '/geoguesser'],
            },
        ],
    },
    additionalPaths: async (config) => [
        {
            loc: '/vorstand',
            priority: 1.0,
            changefreq: 'weekly',
        },
        {
            loc: '/veteranen',
            priority: 0.9,
            changefreq: 'weekly',
        },
        {
            loc: '/events',
            priority: 0.8,
            changefreq: 'daily',
        },
        {
            loc: '/geschichte',
            priority: 0.8,
            changefreq: 'monthly',
        },
    ],
};
