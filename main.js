/* =====================================================================
   Site engine. You normally never need to edit this file.
   All text and lists come from the files in the /data folder.
   ===================================================================== */
(function () {
  var S = window.SITE, $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var page = document.body.getAttribute("data-page") || "";

  var ICONS = {
    strategy: '<path d="M3 17l6-6 4 4 8-9"/><path d="M15 6h6v6"/>',
    social: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    ads: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    automation: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.5 6H12a3 3 0 013 3v0M8.5 18H12a3 3 0 003-3v0"/>',
    analytics: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    design: '<path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.5 7.1 18.2 8 12.7 4 8.8 9.5 8z"/>',
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8"/>',
    wa: '<path d="M20 12a8 8 0 01-11.8 7L4 20l1.1-4A8 8 0 1120 12z"/><path d="M9 9c.5 2.5 2.5 4.5 5 5l1.2-1.2-1.7-1-.8.6a3 3 0 01-1.6-1.6l.6-.8-1-1.7z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
  };
  var icon = function (n) { return '<span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[n] || ICONS.strategy) + '</svg></span>'; };
  var waLink = function (msg) { return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(msg || S.whatsappMessage); };
  var mailLink = function (subj, body) { return "mailto:" + S.email + "?subject=" + encodeURIComponent(subj || "Digital marketing enquiry") + (body ? "&body=" + encodeURIComponent(body) : ""); };
  var img = function (f) { return "images/work/" + f; };
  var catLabel = function (id) { var c = (window.CATEGORIES || []).filter(function (x) { return x.id === id; })[0]; return c ? c.label : id; };
  var initials = function (n) { return n.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); };
  var set = function (sel, html) { var e = $(sel); if (e) e.innerHTML = html; };

  /* ---------- Header / footer / floating button ---------- */
  function chrome() {
    var links = S.nav.map(function (n) {
      var on = n.href.replace(".html", "") === (page === "home" ? "index" : page) || (page === "case" && n.href === "case-studies.html");
      return '<a href="' + n.href + '"' + (on ? ' class="active" aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
    }).join("");
    var h = document.createElement("header");
    h.className = "site";
    h.innerHTML = '<div class="wrap nav"><a class="brand" href="index.html" aria-label="Home">' + esc(S.name) + "<small>" + esc(S.title) + '</small></a>' +
      '<nav class="main" id="nav" aria-label="Main">' + links + "</nav>" +
      '<a class="btn nav-cta" href="contact.html">Work with me</a>' +
      '<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button></div>';
    document.body.insertBefore(h, document.body.firstChild);
    var sk = document.createElement("a"); sk.className = "skip"; sk.href = "#main"; sk.textContent = "Skip to content"; document.body.insertBefore(sk, document.body.firstChild);
    var b = $(".burger"), n = $("#nav");
    b.addEventListener("click", function () { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); });

    var f = document.createElement("footer");
    f.className = "site";
    f.innerHTML = '<div class="wrap"><div class="foot"><div><div class="brand">' + esc(S.name) + '</div><p class="tagline">' + esc(S.footerTagline) + '</p></div>' +
      '<div><h4>Explore</h4>' + S.nav.map(function (n) { return '<a href="' + n.href + '">' + esc(n.label) + "</a>"; }).join("") + "</div>" +
      '<div><h4>Get in touch</h4><a href="' + mailLink() + '">' + esc(S.email) + '</a><a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp ' + esc(S.phoneDisplay) + '</a><a href="' + esc(S.linkedin) + '" target="_blank" rel="noopener">LinkedIn profile</a><a href="' + esc(S.cvFile) + '" download>Download CV</a><span style="font-size:14px;color:#bcd0c2;padding:4px 0;display:block">' + esc(S.location) + "</span></div></div>" +
      '<div class="copy"><span>© ' + new Date().getFullYear() + " " + esc(S.fullName) + ". All rights reserved.</span><span>Digital Marketing · Dubai, UAE</span></div></div>";
    document.body.appendChild(f);

    var w = document.createElement("a");
    w.className = "fab"; w.href = waLink(); w.target = "_blank"; w.rel = "noopener"; w.setAttribute("aria-label", "Chat on WhatsApp");
    w.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS.wa + "</svg><span>WhatsApp me</span>";
    document.body.appendChild(w);
  }

  /* ---------- Shared pieces ---------- */
  function ctaBand(title, text) {
    return '<section><div class="wrap"><div class="cta rv"><div><h2>' + esc(title || "Let's talk about your next marketing project.") + "</h2><p>" + esc(text || S.contactIntro) + '</p></div><div class="actions"><a class="btn wa" href="' + waLink() + '" target="_blank" rel="noopener">Message on WhatsApp</a><a class="btn light" href="' + mailLink() + '">Email me</a></div></div></div></section>';
  }
  function serviceCard(s, full) {
    return '<div class="card hover rv">' + icon(s.icon) + "<h3>" + esc(s.title) + "</h3><p>" + esc(s.summary) + "</p>" +
      (full ? "<ul>" + s.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
  }
  function tile(p, i) {
    return '<button class="tile rv" data-i="' + i + '" aria-label="View ' + esc(p.title) + '"><div class="thumb ' + (p.fit || "") + '"><img loading="lazy" src="' + img(p.image) + '" alt="' + esc(p.title) + '"></div><div class="meta"><span class="cat">' + esc(catLabel(p.category)) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></div></button>";
  }
  function caseCard(c, i) {
    var cov = "";
    if (c.cover) {
      cov = '<img loading="lazy" src="' + img(c.cover) + '" alt="">';
    } else {
      var logos = (c.logos || []).map(function (l) { return '<img src="images/logos/' + esc(l) + '" alt="" onerror="this.remove()">'; }).join("");
      var names = (c.platforms || []).slice(0, 3).map(function (p) { return '<span class="pf">' + esc(p) + "</span>"; }).join("");
      cov = '<div class="platforms">' + logos + names + "</div>";
    }
    return '<a class="case-card rv" href="case.html?id=' + encodeURIComponent(c.id) + '"><div class="case-cover v' + ((i % 3) + 1) + (c.cover ? "" : " nocover") + '">' + cov + (c.cover ? "<span>" + esc(c.industry) + "</span>" : "") + '</div><div class="case-body"><span class="status">' + esc(c.tag) + "</span><h3>" + esc(c.title) + "</h3><p>" + esc(c.summary) + '</p><span class="link">Read case study →</span></div></a>';
  }
  function quoteCard(t) {
    var av = t.photo ? '<img src="' + esc(t.photo) + '" alt="' + esc(t.name) + '">' : esc(initials(t.name));
    return '<figure class="quote rv" style="margin:0"><p>' + esc(t.quote) + '</p><figcaption class="who"><span class="avatar">' + av + "</span><div><b>" + esc(t.name) + "</b><span>" + esc(t.role) + "</span></div></figcaption></figure>";
  }
  function timeline() {
    return '<div class="timeline">' + window.EXPERIENCE.map(function (j) {
      return '<div class="job rv"><h3>' + esc(j.role) + '</h3><div class="co">' + esc(j.company) + (j.place ? " · " + esc(j.place) : "") + '</div><div class="when">' + esc(j.period) + "</div><ul>" + j.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>";
  }
  function tags(list) { return '<div class="tags">' + list.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>"; }

  /* ---------- Lightbox + portfolio grid ---------- */
  var shown = [];
  function lightbox() {
    var lb = document.createElement("div");
    lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<button class="x" aria-label="Close">×</button><button class="p" aria-label="Previous">‹</button><button class="n" aria-label="Next">›</button><div class="lb-inner"><img alt=""><div class="lb-cap"></div></div>';
    document.body.appendChild(lb);
    var cur = 0;
    function show(i) {
      cur = (i + shown.length) % shown.length; var p = shown[cur];
      $("img", lb).src = img(p.image); $("img", lb).alt = p.title;
      $(".lb-cap", lb).innerHTML = "<b>" + esc(p.title) + "</b>" + esc(p.text);
    }
    window.openLB = function (i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    $(".x", lb).onclick = close; $(".p", lb).onclick = function () { show(cur - 1); }; $(".n", lb).onclick = function () { show(cur + 1); };
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    var sx = null;
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1);
    });
  }
  function bindTiles(root) {
    root.querySelectorAll(".tile").forEach(function (t) { t.addEventListener("click", function () { window.openLB(+t.getAttribute("data-i")); }); });
  }
  function renderGrid(target, items, withFilters) {
    shown = items;
    $(target).innerHTML = items.length ? items.map(tile).join("") : '<div class="empty">Nothing here yet.</div>';
    bindTiles($(target)); reveal();
  }

  /* ---------- Page renderers ---------- */
  var R = {};

  R.home = function () {
    var H = S.hero;
    var focus = [["Campaign strategy", "Plan"], ["Social media & content", "Create"], ["Meta Ads & paid social", "Grow"], ["Email, SMS & automation", "Nurture"], ["Reports & optimization", "Improve"]];
    set("#hero", '<div class="wrap hero-grid"><div class="hero-text"><div class="kicker">' + esc(H.eyebrow) + "</div><h1>" + esc(H.headline) + '</h1><p class="lead">' + esc(H.lead) + '</p><div class="actions"><a class="btn" href="portfolio.html">View my work</a><a class="btn wa" href="' + waLink() + '" target="_blank" rel="noopener">Chat on WhatsApp</a><a class="btn outline" href="' + esc(S.cvFile) + '" download>Download CV</a></div><div class="pills">' + H.pills.map(function (p) { return '<span class="pill">' + esc(p) + "</span>"; }).join("") + '</div></div><aside class="hero-panel"><div class="mini">Professional focus</div><h2>From campaign planning to reporting and optimization.</h2><ul>' + focus.map(function (f) { return "<li>" + esc(f[0]) + "<span>" + esc(f[1]) + "</span></li>"; }).join("") + '</ul><div class="foot"><span class="dot"></span>Based in Dubai · Open to new opportunities</div></aside></div>');
    var m = S.tools.concat(S.tools).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    set("#marquee", '<div class="marquee-track">' + m + "</div>");
    set("#stats", S.stats.map(function (s) { return '<div class="stat rv"><b data-count="' + s.count + '" data-suffix="' + esc(s.suffix) + '">0</b><span>' + esc(s.label) + "</span></div>"; }).join(""));
    set("#about-teaser", '<div><div class="kicker">About</div><h2 style="font-size:clamp(30px,4vw,42px);margin:10px 0 18px">' + esc(S.about.heading) + "</h2></div><div><p>" + esc(S.about.paragraphs[0]) + '</p><p class="muted">' + esc(S.about.paragraphs[1]) + '</p><a class="link" href="about.html">More about me →</a></div>');
    set("#services", window.SERVICES.slice(0, 6).map(function (s) { return serviceCard(s); }).join(""));
    var feat = ["social-graphics-grid", "ecommerce-banners-grid", "email-holiday-sale", "welcome-series-map", "media-kit", "ig-monthly-recap"];
    var items = feat.map(function (f) { return window.PORTFOLIO.filter(function (p) { return p.image.indexOf(f) === 0; })[0]; }).filter(Boolean);
    renderGrid("#featured", items);
    set("#cases", window.CASES.slice(0, 3).map(caseCard).join(""));
    set("#quotes", window.TESTIMONIALS.slice(0, 3).map(quoteCard).join(""));
    set("#cta", ctaBand());
  };

  R.about = function () {
    set("#bio", '<div class="photo rv"><img src="' + esc(S.images.casual) + '" alt="' + esc(S.fullName) + '"></div><div><div class="kicker">Hello, I\'m ' + esc(S.name.split(" ")[0]) + '</div><h2 style="font-size:clamp(30px,4vw,42px);margin:10px 0 18px">' + esc(S.about.heading) + "</h2>" + S.about.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + '<div class="actions"><a class="btn" href="' + esc(S.cvFile) + '" download>Download CV</a><a class="btn outline" href="contact.html">Get in touch</a><a class="btn outline" href="' + esc(S.linkedin) + '" target="_blank" rel="noopener">View LinkedIn</a></div></div>');
    set("#values", S.about.values.map(function (v) { return '<div class="card rv"><h3>' + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></div>"; }).join(""));
    set("#industries", tags(S.industries));
    set("#tools", tags(S.tools));
    var e = S.education;
    set("#education", "<h3 style=\"font-size:22px\">" + esc(e.degree) + '</h3><p class="muted">' + esc(e.school) + " · " + esc(e.years) + "</p><ul class=\"muted\">" + e.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul><p><b>Languages:</b> " + esc(e.languages) + "</p>");
    set("#cta", ctaBand());
  };

  R.services = function () {
    set("#services", window.SERVICES.map(function (s) { return serviceCard(s, true); }).join(""));
    set("#cta", ctaBand("Need help with one of these?", "Tell me what you are working on and I will suggest where to start."));
  };

  R.experience = function () {
    set("#timeline", timeline());
    var e = S.education;
    set("#education", "<h3 style=\"font-size:22px\">" + esc(e.degree) + '</h3><p class="muted">' + esc(e.school) + " · " + esc(e.years) + "</p><ul class=\"muted\">" + e.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>");
    set("#cta", ctaBand());
  };

  R.portfolio = function () {
    var cats = [{ id: "all", label: "All work" }].concat(window.CATEGORIES.filter(function (c) { return window.PORTFOLIO.some(function (p) { return p.category === c.id; }); }));
    set("#filters", cats.map(function (c) { return '<button class="chip" data-c="' + c.id + '">' + esc(c.label) + "</button>"; }).join(""));
    function apply(id) {
      document.querySelectorAll(".chip").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-c") === id); });
      renderGrid("#grid", id === "all" ? window.PORTFOLIO : window.PORTFOLIO.filter(function (p) { return p.category === id; }));
      try { history.replaceState(null, "", id === "all" ? location.pathname : "#" + id); } catch (e) {}
    }
    document.querySelectorAll(".chip").forEach(function (b) { b.addEventListener("click", function () { apply(b.getAttribute("data-c")); }); });
    var h = location.hash.replace("#", ""); apply(cats.some(function (c) { return c.id === h; }) ? h : "all");
    set("#cta", ctaBand("Want something like this for your brand?"));
  };

  R["case-studies"] = function () {
    set("#cases", window.CASES.map(caseCard).join(""));
    set("#cta", ctaBand());
  };

  R.case = function () {
    var id = new URLSearchParams(location.search).get("id");
    var c = window.CASES.filter(function (x) { return x.id === id; })[0];
    if (!c) { set("#case", '<div class="wrap"><h1>Case study not found</h1><p><a class="link" href="case-studies.html">Back to all case studies</a></p></div>'); return; }
    document.title = c.title + " | " + S.name;
    var gal = c.gallery.map(function (g) { return window.PORTFOLIO.filter(function (p) { return p.image === g; })[0] || { image: g, title: c.title, text: "", category: "" }; });
    set("#case", '<div class="banner"><div class="wrap"><div class="crumbs"><a href="case-studies.html">Case studies</a> / ' + esc(c.industry) + '</div><span class="status">' + esc(c.tag) + "</span><h1>" + esc(c.title) + "</h1><p>" + esc(c.summary) + "</p></div></div>" +
      '<section><div class="wrap two"><div><h2 style="font-size:28px;margin-bottom:12px">The goal</h2><p>' + esc(c.challenge) + '</p><h2 style="font-size:28px;margin:30px 0 12px">What I did</h2><ul class="muted" style="padding-left:20px">' + c.approach.map(function (a) { return '<li style="margin-bottom:8px">' + esc(a) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="facts card"><div class="fact"><b>Role</b>' + esc(c.role) + '</div><div class="fact"><b>Period</b>' + esc(c.period) + '</div><div class="fact"><b>Industry</b>' + esc(c.industry) + '</div><div><b style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:8px">Platforms</b>' + tags(c.platforms) + "</div></div></div>" +
      (c.results.length ? '<div class="wrap"><div class="results">' + c.results.map(function (r) { return '<div class="result rv"><b>' + esc(r.value) + "</b><span>" + esc(r.label) + "</span></div>"; }).join("") + "</div></div>" : "") +
      (gal.length ? '<div class="wrap" style="margin-top:20px"><h2 style="font-size:28px;margin-bottom:20px">Selected work</h2><div class="work" id="grid"></div></div>' : "") + "</section>");
    if (gal.length) renderGrid("#grid", gal);
    var i = window.CASES.indexOf(c), nx = window.CASES[(i + 1) % window.CASES.length];
    set("#more", '<div class="wrap" style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-bottom:20px"><a class="link" href="case-studies.html">← All case studies</a><a class="link" href="case.html?id=' + encodeURIComponent(nx.id) + '">Next: ' + esc(nx.title) + " →</a></div>");
    set("#cta", ctaBand());
  };

  R.testimonials = function () {
    set("#quotes", window.TESTIMONIALS.map(quoteCard).join(""));
    set("#cta", ctaBand());
  };

  R.contact = function () {
    set("#info", '<a class="card hover" href="' + waLink() + '" target="_blank" rel="noopener">' + icon("wa") + "<div><b>WhatsApp</b><span>" + esc(S.phoneDisplay) + "</span></div></a>" +
      '<a class="card hover" href="' + mailLink() + '">' + icon("mail") + "<div><b>Email</b><span>" + esc(S.email) + "</span></div></a>" +
      '<a class="card hover" href="' + esc(S.linkedin) + '" target="_blank" rel="noopener">' + icon("link") + "<div><b>LinkedIn</b><span>linkedin.com/in/fynnamontano</span></div></a>" +
      '<div class="card">' + icon("pin") + '<div style="margin-top:12px"><b>Location</b><span>' + esc(S.location) + "</span></div></div>" +
      '<a class="btn outline" style="justify-content:center" href="' + esc(S.cvFile) + '" download>Download my CV</a>');
    var f = $("#enquiry");
    function build() {
      var d = new FormData(f), g = function (k) { return (d.get(k) || "").toString().trim(); };
      return { subject: "Enquiry: " + (g("service") || "Digital marketing") + (g("company") ? " – " + g("company") : ""),
        body: "Hi Fynna,\n\nName: " + g("name") + "\nCompany / brand: " + g("company") + "\nService needed: " + g("service") + "\nBudget / timeline: " + g("timeline") + "\n\n" + g("message") + "\n" };
    }
    f.querySelector('[name="service"]').innerHTML = '<option value="">Select a service</option>' + window.SERVICES.map(function (s) { return "<option>" + esc(s.title) + "</option>"; }).join("") + "<option>Something else</option>";
    function send(kind) {
      if (!f.reportValidity()) return;
      var b = build();
      if (kind === "wa") window.open(waLink(b.body), "_blank", "noopener"); else location.href = mailLink(b.subject, b.body);
    }
    $("#send-wa").addEventListener("click", function () { send("wa"); });
    $("#send-mail").addEventListener("click", function () { send("mail"); });
    f.addEventListener("submit", function (e) { e.preventDefault(); send("mail"); });
  };

  /* ---------- Scroll reveal + counters ---------- */
  var io;
  function reveal() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".rv").forEach(function (e) { e.classList.add("in"); }); countUp(document); return; }
    io = io || new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); countUp(e.target); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll(".rv:not(.in)").forEach(function (e) { io.observe(e); });
  }
  function countUp(root) {
    root.querySelectorAll("[data-count]").forEach(function (el) {
      if (el.getAttribute("data-done")) return; el.setAttribute("data-done", 1);
      var to = +el.getAttribute("data-count"), suf = el.getAttribute("data-suffix") || "", t0 = null;
      function step(t) { t0 = t0 || t; var p = Math.min((t - t0) / 1100, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); }
      requestAnimationFrame(step);
    });
  }

  /* ---------- Go ---------- */
  chrome();
  lightbox();
  if (R[page]) R[page]();
  reveal();
})();
