/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.siddharthdangarh.com",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "out",
  changefreq: "monthly",
  priority: 1.0,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
