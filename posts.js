// lib/posts.js
// Blog post data store. The daily scheduled task appends new post objects
// to the top of this array. Each post: { slug, title, description,
// datePublished (YYYY-MM-DD), bodyHtml, faq: [{q,a}] }.
//
// Keep entries append-only (newest added to the array) — renderPostList
// sorts by datePublished so order in the array doesn't matter for display.

const posts = [
  {
    slug: "meta-ads-cost-canada-small-business",
    title: "How Much Do Meta Ads Cost for Small Businesses in Canada?",
    description:
      "A straight answer on Meta ad budgets for Canadian small businesses: typical daily spend, cost per lead by industry, and how to know if your budget is too low to get data.",
    datePublished: "2026-07-23",
    faq: [
      {
        q: "What's a reasonable starting budget for Meta ads in Canada?",
        a: "Most small businesses see usable data starting around $20-30/day ($600-900/month) per campaign. Below that, Meta's algorithm often doesn't get enough conversions per week to optimize properly.",
      },
      {
        q: "What's a good cost per lead (CPL) in Canada?",
        a: "It varies widely by industry: local services often see $8-25 CPL, real estate and mortgage $15-45 CPL, and higher-ticket B2B offers $30-100+ CPL. The number that matters more than CPL alone is cost per booked call and cost per sale.",
      },
      {
        q: "Why do my Meta ad costs feel high compared to competitors?",
        a: "The most common causes are: audience too narrow (limits the algorithm's ability to find efficient buyers), weak creative (low click-through rate raises costs), or no offer clarity on the landing page (traffic arrives but doesn't convert, so cost per lead looks high even though cost per click is normal).",
      },
    ],
    bodyHtml: `
<p><strong>Short answer:</strong> most Canadian small businesses should budget $600-$1,500/month ($20-50/day) per active campaign to get Meta's algorithm enough data to optimize, with cost per lead typically landing between $8 and $45 depending on industry and offer.</p>

<h2>Why budget size changes everything</h2>
<p>Meta's ad algorithm needs roughly 50 conversion events per week per ad set to exit the "learning phase" and start optimizing efficiently. If your daily budget is too small to generate that volume, you'll pay more per lead simply because the algorithm never gets enough signal to find your best audience.</p>

<h2>Typical cost per lead by industry (Canada)</h2>
<p>These are directional ranges we see across Canadian accounts, not guarantees — your actual numbers depend on offer strength, creative, and landing page conversion rate:</p>
<ul>
<li><strong>Local home services:</strong> $8-25 per lead</li>
<li><strong>Real estate agents:</strong> $15-40 per lead</li>
<li><strong>Mortgage brokers:</strong> $20-45 per lead</li>
<li><strong>B2B / professional services:</strong> $30-100+ per lead</li>
</ul>

<h2>The number that actually matters</h2>
<p>Cost per lead is a vanity metric if you stop there. The number that tells you whether Meta ads are working is <em>cost per booked call</em> and, ultimately, <em>cost per closed sale</em>. A $10 lead that never books a call is more expensive than a $35 lead that shows up and buys.</p>

<h2>When your budget is too low</h2>
<p>If you're spending under $15/day, you likely won't get enough volume for Meta to optimize — you're essentially running a manual test forever. In that case, either increase budget on one focused campaign or narrow your objective (e.g., lead form only, not lead form + link clicks + video views split across multiple campaigns).</p>
`,
  },
  {
    slug: "sales-funnel-vs-website",
    title: "Sales Funnel vs. Website: What's the Difference and Which Do You Need?",
    description:
      "A website informs. A sales funnel converts. Here's the practical difference for Canadian business owners deciding where to send paid traffic.",
    datePublished: "2026-07-24",
    faq: [
      {
        q: "Can I just send Meta ad traffic to my regular website?",
        a: "You can, but conversion rates are usually much lower because websites have multiple exits (menu links, blog, about page) that distract from a single call to action. A dedicated funnel page removes those distractions.",
      },
      {
        q: "Do I need to replace my website with a funnel?",
        a: "No. Most businesses keep both: the website handles brand credibility and organic/SEO traffic, while dedicated funnel pages handle paid traffic for a specific offer or campaign.",
      },
      {
        q: "What makes a funnel convert better than a landing page on my website?",
        a: "A true funnel is a sequence (ad → landing page → thank-you page → follow-up), not just a single page. The follow-up sequence (email/SMS) and speed-to-lead automation are often what separate a funnel that converts from one that doesn't.",
      },
    ],
    bodyHtml: `
<p><strong>Short answer:</strong> a website is built to inform and be browsed; a sales funnel is built to convert one visitor into one lead or sale through a single, distraction-free path. If you're running paid ads, you need a funnel — not just a website page.</p>

<h2>What a website is optimized for</h2>
<p>A standard business website has a navigation menu, multiple pages, and several possible next steps for a visitor (read the blog, check services, view the about page, browse the gallery). That's good for organic search and brand trust, but it's bad for paid traffic — every extra option is a chance for a visitor to leave before taking the action you paid for.</p>

<h2>What a sales funnel is optimized for</h2>
<p>A funnel strips away every distraction and guides the visitor through one path:</p>
<ul>
<li><strong>Ad</strong> — a specific promise or offer</li>
<li><strong>Landing page</strong> — no navigation menu, one headline, one form/CTA that matches the ad's promise exactly</li>
<li><strong>Thank-you page</strong> — confirms the action and sets expectations (e.g., "we'll call you within 15 minutes")</li>
<li><strong>Follow-up sequence</strong> — automated email/SMS that nurtures the lead until they book or buy</li>
</ul>

<h2>The follow-up sequence is what most businesses skip</h2>
<p>The single biggest gap we see: a business builds a decent landing page but has no automated follow-up. A lead fills out a form and then waits hours or days for a callback. Speed-to-lead matters — the odds of qualifying a lead drop sharply after the first 5 minutes of no response. A funnel without automated follow-up is only half a funnel.</p>

<h2>So which do you need?</h2>
<p>Keep your website for brand credibility and organic search traffic. Build a dedicated funnel for every paid campaign or specific offer. Sending Meta ad traffic to a general website homepage is one of the most common reasons cost per lead looks high — the fix usually isn't the ad, it's what happens after the click.</p>
`,
  },
];

module.exports = { posts };
