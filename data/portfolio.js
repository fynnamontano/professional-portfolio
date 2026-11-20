/* =====================================================================
   PORTFOLIO ITEMS
   To ADD work:   1) upload the image into the  images/work  folder
                  2) copy one block below, paste it, change the details
   To REMOVE work: delete its block.
   "category" must be one of the ids in CATEGORIES below.
   "image" is the file name inside images/work (include .webp/.jpg/.png).
   ===================================================================== */
window.CATEGORIES = [
  { id: "social",     label: "Social Media" },
  { id: "banners",    label: "Banners & Ads" },
  { id: "email",      label: "Email Campaigns" },
  { id: "newsletter", label: "Newsletters" },
  { id: "automation", label: "Automation Flows" },
  { id: "landing",    label: "Landing Pages" },
  { id: "strategy",   label: "Strategy & Brand" },
  { id: "print",      label: "Media Kits & Print" },
  { id: "reports",    label: "Reports & Analytics" }
];

window.PORTFOLIO = [
  { category: "social", title: "Brand care tips post", text: "Educational social graphic for a small knitwear business.", image: "knitwear-care-post.webp" },
  { category: "social", title: "Social media graphics set", text: "A range of promotional, educational and seasonal posts for a wellness brand, including bilingual creatives.", image: "social-graphics-grid.webp", fit: "contain" },
  { category: "social", title: "Content pillars mockup", text: "Content pillars with example captions and post layouts, from a social media proposal.", image: "content-pillars-mockup.webp" },

  { category: "banners", title: "Memorial Day promotion", text: "Seasonal e-commerce banner with offer code and call to action.", image: "memorial-day-banner.webp" },
  { category: "banners", title: "Seasonal e-commerce banners", text: "Cyber Monday, Black Friday and Thanksgiving banners across many product lines.", image: "ecommerce-banners-grid.webp", fit: "contain" },

  { category: "email", title: "Flash sale email", text: "Promotional email with hero banner, best sellers and offer code.", image: "email-flash-sale.webp", fit: "top" },
  { category: "email", title: "Kids collection sale email", text: "Campaign layout with category shortcuts and discount code.", image: "email-kids-sale.webp", fit: "top" },
  { category: "email", title: "Holiday sale email", text: "Seasonal promotion with product grid and clear call to action.", image: "email-holiday-sale.webp", fit: "top" },
  { category: "email", title: "Freedom Day sale email", text: "Themed promotional email with best-seller product blocks.", image: "email-freedom-sale.webp", fit: "top" },
  { category: "email", title: "Best sellers email", text: "Product-led email highlighting top sellers.", image: "email-seasonal-best-sellers.webp", fit: "top" },
  { category: "email", title: "Big sale email", text: "High-impact sale banner with product recommendations.", image: "email-big-sale.webp", fit: "top" },

  { category: "newsletter", title: "Skincare myths newsletter", text: "Educational newsletter with a booking call to action.", image: "newsletter-myths.webp", fit: "top" },
  { category: "newsletter", title: "Holiday collections newsletter", text: "Seasonal product feature for a skincare brand.", image: "newsletter-holiday-collections.webp", fit: "top" },
  { category: "newsletter", title: "Peel season newsletter", text: "Seasonal skincare tips with service promotion.", image: "newsletter-peel-season.webp", fit: "top" },
  { category: "newsletter", title: "Holiday gift sets newsletter", text: "Limited-time offer with travel skincare tips.", image: "newsletter-gift-sets.webp", fit: "top" },
  { category: "newsletter", title: "Skin tips newsletter", text: "Treatment promotion with simple, shareable skin tips.", image: "newsletter-skin-tips.webp", fit: "top" },

  { category: "automation", title: "Welcome series journey map", text: "Automation flow with triggers, wait steps and conditional branches.", image: "welcome-series-map.webp", fit: "contain" },
  { category: "automation", title: "Masterclass sign-up flow", text: "Two-email sequence with open-based resend logic.", image: "masterclass-flow-map.webp", fit: "contain" },

  { category: "landing", title: "Free SEO audit landing page", text: "Lead-capture page with clear offer, short form and consent options.", image: "landing-seo-audit.webp", fit: "top" },
  { category: "landing", title: "Consultation landing page", text: "Lead-generation page for a professional services campaign.", image: "landing-growth.webp", fit: "top" },

  { category: "strategy", title: "Social media proposal", text: "Proposal cover for a social media audit and management plan.", image: "skincare-proposal-cover.webp" },
  { category: "strategy", title: "Branding and optimization proposal", text: "Audit, target market, platform improvements, action plan and content pillars.", image: "branding-proposal-deck.webp", fit: "contain" },
  { category: "strategy", title: "Strategy proposal", text: "Media developments, style guide, ads and marketing funnel, and a timeline.", image: "strategy-proposal-deck.webp", fit: "contain" },
  { category: "strategy", title: "Lead magnet cover", text: "Online marketing checklist designed as a downloadable lead magnet.", image: "attorney-checklist-cover.webp" },

  { category: "print", title: "Media kit", text: "Brand story, impact numbers and lifestyle imagery in one media kit.", image: "media-kit.webp" },
  { category: "print", title: "Impact goal graphic", text: "Infographic explaining a giving goal and what each level delivers.", image: "impact-goal-graphic.webp" },
  { category: "print", title: "Line sheet", text: "Wholesale line sheet showing the product range and deal price.", image: "line-sheet.webp", fit: "contain" },
  { category: "print", title: "Lifestyle banner", text: "Brand banner with press logos.", image: "fashion-mission-banner.webp" },
  { category: "print", title: "Product feature banner", text: "Promotional banner with community imagery.", image: "rainboots-banner.webp" },
  { category: "print", title: "Community postcard", text: "Postcard with QR code and clear call to action.", image: "brand-community-banner.webp" },

  { category: "reports", title: "Instagram monthly recap", text: "Month-over-month views, non-follower reach and follower growth.", image: "ig-monthly-recap.webp" },
  { category: "reports", title: "Instagram views, last 30 days", text: "Views split by followers and non-followers and by content type.", image: "ig-views-30-days.webp" },
  { category: "reports", title: "Threads follower growth", text: "Weekly follower trend.", image: "threads-followers-growth.webp" },
  { category: "reports", title: "Threads profile views", text: "Weekly profile views trend.", image: "threads-profile-views.webp" },
  { category: "reports", title: "Facebook follower growth", text: "Weekly follower trend.", image: "fb-followers-growth.webp" },
  { category: "reports", title: "Facebook content views", text: "Weekly content views trend.", image: "fb-content-views.webp" },
  { category: "reports", title: "Email campaign summary", text: "Opens, contact performance, unsubscribe rate, link clicks and best send times.", image: "report-campaign-summary.webp", fit: "contain" },
  { category: "reports", title: "A/B test report", text: "Subject line test with open and click-through rates and next steps.", image: "report-ab-testing.webp", fit: "contain" },
  { category: "reports", title: "Recommendations from campaigns", text: "Seven prioritized recommendations based on previous campaign results.", image: "report-recommendations.webp", fit: "contain" },
  { category: "reports", title: "Email marketing calendar", text: "Weekly themes and target audiences for the quarter.", image: "report-email-calendar.webp", fit: "contain" }
];
