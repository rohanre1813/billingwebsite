/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://billing.jusbill.online",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
  exclude: ["/404", "/500"],
};
