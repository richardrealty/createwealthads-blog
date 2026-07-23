const { posts } = require("../posts");
const { SITE_URL } = require("../blog");

module.exports = (req, res) => {
  const urls = [
    `<url><loc>${SITE_URL}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
    ...posts.map(
      (p) =>
        `<url><loc>${SITE_URL}/${p.slug}</loc><lastmod>${p.dateModified || p.datePublished}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    ),
  ].join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600");
  res.end(xml);
};
