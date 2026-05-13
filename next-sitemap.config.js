/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jusbill.online",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    additionalSitemaps: ["https://jusbill.online/sitemap.xml"],
  },
  exclude: ["/404", "/500"],
};
