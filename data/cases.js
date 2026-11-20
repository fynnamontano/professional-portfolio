/* =====================================================================
   CASE STUDIES
   "id" is used in the page address (case.html?id=shopify-email), so use
   lowercase letters and dashes only, and keep it unique.
   "gallery" lists image file names from images/work (can be empty []).
   "logos" shows official platform logos on the card when there is no cover image.
   Put the logo files in  images/logos  (e.g. linkedin.svg) and list the file names.
   If a file is missing, the card simply shows the platform names instead.
   "results" are big numbers shown on the page. Only add numbers you can
   back up with a report or screenshot.
   ===================================================================== */
window.CASES = [
  {
    id: "shopify-email",
    tag: "Email & lifecycle marketing",
    industry: "Multi-brand e-commerce",
    title: "Email and SMS marketing for 30+ Shopify brands",
    summary: "Campaigns, newsletters and automated flows for a portfolio of Shopify stores.",
    period: "Oct 2022 – May 2026",
    role: "Email Marketing Specialist, AN & Associates",
    platforms: ["Klaviyo", "Yotpo", "Shopify"],
    challenge: "Each store needed consistent promotional campaigns and lifecycle flows, on seasonal calendars, across many different brands and audiences.",
    approach: [
      "Built and maintained automated flows, newsletters and promotional campaigns.",
      "Segmented audiences so offers matched customer behavior.",
      "Ran A/B tests and optimized campaigns against engagement and revenue.",
      "Tracked key metrics and shared actionable insights with the team."
    ],
    results: [{ value: "30+", label: "Shopify brands managed" }],
    gallery: ["email-flash-sale.webp", "email-holiday-sale.webp", "email-freedom-sale.webp", "email-kids-sale.webp", "email-big-sale.webp", "ecommerce-banners-grid.webp"],
    cover: "email-flash-sale.webp"
  },
  {
    id: "social-growth",
    tag: "Social media growth",
    industry: "Events & community brand",
    title: "Growing reach on Instagram, Threads and Facebook",
    summary: "Content planning and weekly analytics tracking across three platforms.",
    period: "Snapshot from portfolio reports",
    role: "Social media management",
    platforms: ["Instagram", "Threads", "Facebook", "Meta Business Suite"],
    challenge: "Build visibility and a follower base beyond the existing audience.",
    approach: [
      "Planned and published a mix of posts, stories and reels.",
      "Tracked views, follower growth and non-follower reach weekly.",
      "Used the trends to decide which content types to repeat."
    ],
    results: [
      { value: "205K", label: "Reels and post views in March" },
      { value: "+862%", label: "Views vs. the previous month" },
      { value: "64%", label: "Views from non-followers" },
      { value: "+143", label: "New followers in the month" }
    ],
    gallery: ["ig-monthly-recap.webp", "ig-views-30-days.webp", "threads-followers-growth.webp", "threads-profile-views.webp", "fb-followers-growth.webp", "fb-content-views.webp"],
    cover: "ig-monthly-recap.webp"
  },
  {
    id: "b2b-linkedin",
    tag: "B2B social media strategy",
    industry: "Technology & IT services",
    title: "LinkedIn and social marketing for technology businesses",
    summary: "Brand awareness and lead generation for software engineering, systems integration, consulting and IT recruitment.",
    period: "Jan 2025 – May 2026",
    role: "Marketing & Social Media Team Lead, The Virtual IT Professional / Interprit",
    platforms: ["LinkedIn", "LinkedIn Ads", "Social channels"],
    challenge: "Reach decision makers and candidates in a technical, competitive market.",
    approach: [
      "Developed content strategies and campaigns for each service line.",
      "Managed planning, scheduling, publishing and reporting.",
      "Reviewed engagement and campaign performance to refine messaging.",
      "Supported paid advertising and audience targeting."
    ],
    results: [],
    gallery: [],
    cover: "",
    logos: ["linkedin.svg"]
  },
  {
    id: "email-testing",
    tag: "Testing & reporting",
    industry: "Legal marketing",
    title: "Email A/B testing, reporting and recommendations",
    summary: "A quarterly email calendar, a subject-line test and a report with prioritized next steps.",
    period: "Quarter-one campaign cycle",
    role: "Email marketing and reporting",
    platforms: ["Email marketing platform", "Excel / Google Sheets"],
    challenge: "Understand which subject lines and email formats worked best, and what to do next.",
    approach: [
      "Built the quarterly content calendar with themes and audiences.",
      "Tested two subject lines and compared open and click-through rates.",
      "Compared four email formats and reported best send times.",
      "Wrote seven recommendations for the next round."
    ],
    results: [
      { value: "28% vs 22%", label: "Open rate, winning vs. other subject line" },
      { value: "4", label: "Email formats compared" },
      { value: "7", label: "Recommendations delivered" }
    ],
    gallery: ["report-ab-testing.webp", "report-campaign-summary.webp", "report-recommendations.webp", "report-email-calendar.webp"],
    cover: "report-ab-testing.webp"
  },
  {
    id: "brand-strategy",
    tag: "Brand & strategy proposals",
    industry: "Skincare and financial education",
    title: "Social media audits and strategy proposals",
    summary: "Brand audits with platform improvements, content pillars and a three-month action plan.",
    period: "Selected proposals",
    role: "Strategy and creative",
    platforms: ["Canva", "Meta Business Suite"],
    challenge: "Give small brands a clear, practical plan to improve their presence and attract the right audience.",
    approach: [
      "Audited social profiles, website and current marketing.",
      "Defined target market and a style guide.",
      "Recommended improvements per platform, and ads and funnel ideas.",
      "Built content pillars with sample captions and a month-by-month action plan."
    ],
    results: [],
    gallery: ["skincare-proposal-cover.webp", "branding-proposal-deck.webp", "strategy-proposal-deck.webp", "content-pillars-mockup.webp"],
    cover: "branding-proposal-deck.webp"
  },
  {
    id: "uae-real-estate",
    tag: "Digital campaigns & paid social",
    industry: "UAE real estate",
    title: "Digital marketing for a UAE property business",
    summary: "Multi-channel campaigns, promotional content, email and SMS, and Meta Ads.",
    period: "Jun 2026 – Present",
    role: "Digital Marketing Specialist, Springfield Properties LLC",
    platforms: ["Meta Ads Manager", "Mailchimp", "MailerLite", "GetResponse", "Kit", "Canva"],
    challenge: "Generate and nurture property enquiries across digital channels.",
    approach: [
      "Plan and manage campaigns across channels.",
      "Create and schedule content, promotional graphics and email campaigns.",
      "Manage Meta Ads: targeting, retargeting, budget monitoring and optimization.",
      "Monitor KPIs and report with recommendations."
    ],
    results: [],
    gallery: [],
    cover: "",
    logos: ["meta.svg"]
  }
];
