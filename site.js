/* =====================================================================
   SITE SETTINGS  -  edit the text between the quotes. Do not remove
   the commas, quotes or brackets.
   ===================================================================== */
window.SITE = {
  name: "Fynna Montaño",
  fullName: "Fynna Keith E. Montaño",
  title: "Digital Marketing Specialist",
  location: "Dubai, United Arab Emirates",

  // ---- CONTACT (every button on the website uses these) ----
  email: "fynnamontano@gmail.com",
  whatsapp: "971504238869",            // digits only, with country code, no + or spaces
  phoneDisplay: "+971 50 423 8869",
  linkedin: "https://www.linkedin.com/in/fynnamontano/",
  whatsappMessage: "Hi Fynna, I found your website and would like to discuss a marketing project.",

  // ---- CV file (replace the file in /cv to update) ----
  cvFile: "cv/Fynna-Montano-CV.pdf",

  // ---- Images (replace the file with the same name, or change the path) ----
  // casual = the photo on the About page
  images: {
    casual: "images/profile/casual.webp"
  },

  // ---- Navigation (label + file name) ----
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Services", href: "services.html" },
    { label: "Experience", href: "experience.html" },
    { label: "Portfolio", href: "portfolio.html" },
    { label: "Social Media", href: "social.html" },
    { label: "Guides", href: "guides.html" },
    { label: "Case Studies", href: "case-studies.html" },
    { label: "Testimonials", href: "testimonials.html" },
    { label: "Contact", href: "contact.html" }
  ],

  // ---- Home page ----
  hero: {
    eyebrow: "Digital Marketing Specialist · Dubai, UAE",
    headline: "I make the moving parts of digital marketing work together.",
    lead: "From social media and email campaigns to websites and e-commerce operations, I bring the creative, coordination and follow-through that keep digital work moving.",
    pills: ["Social Media", "Meta Ads", "Email & SMS", "Automation", "Lead Generation", "Analytics"]
  },

  // Numbers shown on the home page. "count" animates; "suffix" is added after it.
  stats: [
    { count: 10, suffix: "+", label: "Years in digital marketing" },
    { count: 30, suffix: "+", label: "Shopify brands managed" },
    { count: 5, suffix: "", label: "Industries served" },
    { count: 3, suffix: "", label: "Languages spoken" }
  ],

  about: {
    heading: "A hands-on marketer with broad campaign experience.",
    paragraphs: [
      "I am a Digital Marketing Specialist with experience in social media strategy, paid advertising, email and SMS marketing, marketing automation, content planning and campaign reporting.",
      "My background spans e-commerce brands, technology and IT staffing businesses, real estate marketing and agency clients. I have worked across different markets and business types, handling both the creative and the operational sides of digital marketing.",
      "I enjoy connecting the details of audience, message, channel, creative and performance data, so marketing activity supports clear business goals."
    ],
    values: [
      { title: "Strategy first", text: "Every campaign starts with the audience, the goal and the channel that fits." },
      { title: "Creative and operational", text: "I design the assets and also run the platforms, schedules and reports behind them." },
      { title: "Measured and improved", text: "I track KPIs, test variations and turn the numbers into practical next steps." }
    ]
  },

  // Industries (About page)
  industries: ["E-commerce & Shopify", "Technology & IT staffing", "Real estate (UAE)", "Skincare & wellness", "Agencies & professional services"],

  // Tools (shown on Home and About)
  tools: [
    "Meta Business Suite", "Meta Ads Manager", "Canva", "CapCut", "ChatGPT", "Claude", "Google Gemini",
    "Klaviyo", "Mailchimp", "MailerLite", "GetResponse", "Zoho", "SendPulse", "Kit",
    "Yotpo SMS", "WATI", "HubSpot", "Zoho CRM", "Zapier", "Shopify", "Amazon", "Cin7", "Faire",
    "WordPress", "Netlify", "Unbounce", "Excel", "Google Sheets"
  ],

  education: {
    degree: "BS Business Administration, Major in Financial Management",
    school: "Notre Dame of Dadiangas University",
    years: "2015 – 2019",
    highlights: ["100% Scholar", "Business Plan Competition Champion", "Civil Service Commission Professional Passer", "NC III Bookkeeping Passer"],
    languages: "English, Tagalog and Cebuano"
  },

  contactIntro: "Open to digital marketing opportunities in the UAE and international markets. Tell me about your brand, goals and timeline and I will get back to you.",
  footerTagline: "Digital Marketing · Social Media · Email · Websites · E-commerce"
};
