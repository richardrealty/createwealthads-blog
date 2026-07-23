// lib/blog.js
// Zero-dependency rendering helpers for the Create Wealth Ads content hub.
// Dark theme (#0A0A0A bg / #FFFFFF text / #00D98B accent) matching createwealthads.com.

const SITE_NAME = "Create Wealth Ads";
const SITE_URL = "https://blog.createwealthads.com";
const MAIN_SITE_URL = "https://createwealthads.com";
const CTA_URL = "https://createwealthads.com/cwa_apply";
const LOGO_URL = "https://createwealthads.com/favicon.ico"; // TODO: replace with real logo URL once available

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function baseStyles() {
  return `
    :root {
      --bg: #0A0A0A;
      --card: #1A1A1A;
      --border: #2A2A2A;
      --text: #FFFFFF;
      --muted: #AAAAAA;
      --accent: #00D98B;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: Arial, "Segoe UI", sans-serif;
      line-height: 1.7;
    }
    a { color: var(--accent); }
    .wrap { max-width: 760px; margin: 0 auto; padding: 32px 20px 80px; }
    header.site { border-bottom: 2px solid var(--accent); padding: 20px; }
    header.site .inner { max-width: 760px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
    header.site .brand { font-weight: 900; font-size: 18px; letter-spacing: 0.5px; text-decoration: none; color: var(--text); }
    header.site .brand span { color: var(--accent); }
    h1 { font-size: 30px; color: #fff; margin: 24px 0 8px; }
    h2 { font-size: 21px; color: var(--accent); margin: 32px 0 10px; }
    p { color: #DDDDDD; font-size: 16px; }
    .meta { color: var(--muted); font-size: 13px; margin-bottom: 24px; }
    .card { background: var(--card); border: 1px solid var(--border); border-left: 4px solid var(--accent); border-radius: 4px; padding: 18px 20px; margin: 20px 0; }
    .postlist-item { display: block; padding: 18px 0; border-bottom: 1px solid var(--border); text-decoration: none; }
    .postlist-item h3 { color: #fff; font-size: 19px; margin: 0 0 6px; }
    .postlist-item p { margin: 0; color: var(--muted); font-size: 14px; }
    .cta {
      display: inline-block;
      background: var(--accent);
      color: #000 !important;
      font-weight: 900;
      font-size: 14px;
      padding: 14px 26px;
      border-radius: 4px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 24px 0;
    }
    .faq dt { color: #fff; font-weight: bold; margin-top: 16px; }
    .faq dd { color: var(--muted); margin: 6px 0 0; }
    footer.site { border-top: 1px solid var(--border); margin-top: 60px; padding: 24px 20px; text-align: center; color: var(--muted); font-size: 12px; }
  `;
}

function renderHeader() {
  return `
  <header class="site">
    <div class="inner">
      <a class="brand" href="${SITE_URL}/">Create<span>Wealth</span>Ads</a>
      <a class="brand" href="${MAIN_SITE_URL}" style="font-size:13px;">createwealthads.com &rarr;</a>
    </div>
  </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site">
    &copy; ${year} Create Wealth Network Inc. &middot; <a href="${MAIN_SITE_URL}">createwealthads.com</a>
  </footer>`;
}

function renderLayout({ title, description, canonical, bodyHtml, schemaJsonLd }) {
  const schemaBlock = schemaJsonLd
    ? `<script type="application/ld+json">${JSON.stringify(schemaJsonLd)}</script>`
    : "";
  return `<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<style>${baseStyles()}</style>
${schemaBlock}
</head>
<body>
${renderHeader()}
<div class="wrap">
${bodyHtml}
</div>
${renderFooter()}
</body>
</html>`;
}

function renderPostList(posts) {
  const sorted = [...posts].sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
  const items = sorted
    .map(
      (p) => `
    <a class="postlist-item" href="/${p.slug}">
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
    </a>`
    )
    .join("");
  return `
    <h1>Meta Ads &amp; Sales Funnel Insights</h1>
    <p class="meta">Practical, no-fluff answers for Canadian businesses running Meta ads and sales funnels &mdash; updated daily.</p>
    ${items}
    <a class="cta" href="${CTA_URL}">Book a Free Strategy Call &rarr;</a>
  `;
}

function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: `${SITE_URL}/${post.slug}`,
  };
}

function faqSchema(post) {
  if (!post.faq || !post.faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function renderPost(post) {
  const faqHtml = post.faq && post.faq.length
    ? `<h2>FAQ</h2><dl class="faq">${post.faq
        .map((f) => `<dt>${escapeHtml(f.q)}</dt><dd>${escapeHtml(f.a)}</dd>`)
        .join("")}</dl>`
    : "";
  return `
    <h1>${escapeHtml(post.title)}</h1>
    <p class="meta">Published ${post.datePublished} &middot; Create Wealth Ads</p>
    ${post.bodyHtml}
    ${faqHtml}
    <div class="card">
      <strong>Want this done for you?</strong> Create Wealth Ads builds and runs Meta ad campaigns and sales funnels for Canadian businesses, professionals, and entrepreneurs.
    </div>
    <a class="cta" href="${CTA_URL}">Book a Free Strategy Call &rarr;</a>
  `;
}

module.exports = {
  SITE_NAME,
  SITE_URL,
  MAIN_SITE_URL,
  CTA_URL,
  escapeHtml,
  renderLayout,
  renderPostList,
  renderPost,
  articleSchema,
  faqSchema,
};
