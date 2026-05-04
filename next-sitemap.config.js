/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://megastreamsapp.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://megastreamsapp.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://megastreamsapp.com/ar',
      hreflang: 'ar',
    },
  ],
}
