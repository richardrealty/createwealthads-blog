const { posts } = require("../posts");
const {
  renderLayout,
  renderPost,
  articleSchema,
  faqSchema,
  SITE_URL,
} = require("../blog");

module.exports = (req, res) => {
  const slug = (req.query && req.query.slug) || "";
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(
      renderLayout({
        title: "Not Found | Create Wealth Ads",
        description: "This article doesn't exist or has moved.",
        canonical: `${SITE_URL}/${slug}`,
        bodyHtml: `<h1>Article not found</h1><p><a href="/">Back to all articles &rarr;</a></p>`,
      })
    );
    return;
  }

  const schema = [articleSchema(post), faqSchema(post)].filter(Boolean);

  const html = renderLayout({
    title: `${post.title} | Create Wealth Ads`,
    description: post.description,
    canonical: `${SITE_URL}/${post.slug}`,
    bodyHtml: renderPost(post),
    schemaJsonLd: schema.length === 1 ? schema[0] : schema,
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.end(html);
};
