const { posts } = require("../posts");
const { renderLayout, renderPostList, SITE_URL } = require("../blog");

module.exports = (req, res) => {
  const html = renderLayout({
    title: "Meta Ads & Sales Funnel Insights for Canadian Businesses | Create Wealth Ads",
    description:
      "Practical, no-fluff answers on Meta ads, sales funnels, and lead generation for Canadian businesses, professionals, and entrepreneurs. Updated daily.",
    canonical: `${SITE_URL}/`,
    bodyHtml: renderPostList(posts),
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.end(html);
};
