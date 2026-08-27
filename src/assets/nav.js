/* ═══════════════════════════════════════════════════════════
   nav.js — injects sidebar into every page.

   HOW TO CUSTOMISE:
   ─────────────────
   LOGO (top of sidebar):
     Set SITE_CONFIG.logoSrc to a path relative to the page,
     e.g. "assets/img/logo.png". Leave as "" to show the
     text name only.

   FUNDER (bottom of sidebar):
     Set SITE_CONFIG.funderName, funderUrl, funderLogoSrc.
     Leave funderLogoSrc as "" to show a placeholder box.
     The logo is auto-inverted to white (filter: invert).
     If your logo already works on dark backgrounds set
     funderLogoInvert: false.

   FOOTER LINKS: edit the footerLinks array below.
   ═══════════════════════════════════════════════════════════ */
(function() {
  var Countly = window.Countly = window.Countly || {};
  Countly.q = Countly.q || [];
  Countly.app_key = "2d884cde319dcea32d8c3a35f0a3cec5bd028540";
  Countly.url = "https://countly.test.hedera.online/";
  Countly.q.push(["track_sessions"]);
  Countly.q.push(["track_pageview"]);
  Countly.q.push(["track_errors"]);
  Countly.q.push(["require_consent"])
  var cly = document.createElement("script");
  cly.async = true;
  cly.src = "https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js";
  cly.onload = function() { Countly.init(); };
  document.head.appendChild(cly);
})();

const SITE_CONFIG = {
  /* ── Sidebar logo ──────────────────────────────────────── */
  logoSrc:            "assets/img/logo.png",           // e.g. "assets/img/logo.png"
  logoAlt:            "HEDERA Sustainable Solutions",
  siteName:           "ClimateRisk Resource Hub",  // used when no logo image
  siteNameAccent:     "Risk",       // this word gets the green colour
  tagline:            "Tools for climate- and biodiversity-related risk assessment for microfiance institutions",

  /* ── Funder ────────────────────────────────────────────── */
  funderName:         "Supported by DBU (Deutsche Bundesstiftung Umwelt)",  // label above logo
  funderUrl:          "https://www.dbu.de/",          
  funderLogoSrc:      "assets/img/dbu_logo_en.png",           
  funderLogoAlt:      "DBU",
  funderLogoInvert:   false,         // invert to white on dark sidebar

  /* ── Footer links ──────────────────────────────────────── */
  footerLinks: [
    { label: "Home",          href: "index.html" },
    { label: "Climate datasets", href: "climate-datasets.html" },
    { label: "Resources",  href: "resource-hub.html" },
    { label: "Risk assessment", href: "risk-assessment.html" },
  ],
};

/* ── Page definitions ──────────────────────────────────── */
(function () {
  const PAGES = [
    {
      href: "index.html", label: "Home", soon: false,
      icon: `<svg viewBox="0 0 16 16" fill="none"><path d="M2 6.5L8 2l6 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 15v-5h4v5" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`
    },
    {
      href: "climate-datasets.html", label: "Climate datasets", soon: false,
      icon: `<svg viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.3" stroke-dasharray="2 1.5"/></svg>`
    },
    {
      href: "resource-hub.html", label: "Resources", soon: true, disabled: true,
      icon: `<svg viewBox="0 0 16 16" fill="none"><rect x="2" y="1.5" width="12" height="13" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M5 5.5h6M5 8h6M5 10.5h3.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`
    },
    {
      href: "risk-assessment.html", label: "Risk assessment", soon: true, disabled: true,
      icon: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 1.5L1.5 5.5v5L8 14.5l6.5-4v-5L8 1.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 9V6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="10.5" r=".6" fill="currentColor"/></svg>`
    },
    {
      href: "publications.html", label: "Publications", soon: true, disabled: true,
      icon: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 1.5L1.5 5.5v5L8 14.5l6.5-4v-5L8 1.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 9V6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="10.5" r=".6" fill="currentColor"/></svg>`
    },
    {
      href: "publications.html", label: "Trainings", soon: true, disabled: true,
      icon: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 1.5L1.5 5.5v5L8 14.5l6.5-4v-5L8 1.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 9V6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="10.5" r=".6" fill="currentColor"/></svg>`
    },
    {
      href: "data-editor.html", label: "Data editor", soon: false, tools: true,
      icon: `<svg viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M5 8h6M8 5v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`
    },
  ];

  const current = location.pathname.split("/").pop() || "index.html";
  const el = document.getElementById("site-sidebar");
  if (!el) return;

  /* ── Logo block ──────────────────────────────────────── */
  const c = SITE_CONFIG;
  const logoBlock = c.logoSrc
    ? `<a href="index.html"><img class="sidebar-logo-img" src="${c.logoSrc}" alt="${c.logoAlt}" /></a>`
    : `<div class="sidebar-logo-img-placeholder">Logo</div>`;

  /* split site name on the accent word */
  const siteNameHtml = c.siteName.replace(
    c.siteNameAccent,
    `<span>${c.siteNameAccent}</span>`
  );

  /* ── Funder block ────────────────────────────────────── */
  const funderImg = c.funderLogoSrc
    ? `<img class="sidebar-funder-logo" src="${c.funderLogoSrc}"
          alt="${c.funderLogoAlt}"
          style="${c.funderLogoInvert ? '' : 'filter:none;opacity:.85'}" />`
    : `<span class="sidebar-funder-placeholder">Logo</span>`;

  const funderWrap = c.funderUrl
    ? `<a href="${c.funderUrl}" target="_blank" rel="noopener">${funderImg}</a>`
    : funderImg;

  /* ── Footer links ────────────────────────────────────── */
  const footerLinksHtml = c.footerLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join("");

  el.innerHTML = `
    <div class="sidebar-logo">
      ${logoBlock}
      <a href="index.html">${siteNameHtml}</a>
      <div class="sidebar-tagline">${c.tagline}</div>
    </div>

    <nav class="sidebar-nav">
      <span class="sidebar-section-label">Pages</span>
      ${PAGES.filter(p => !p.tools).map(p => p.disabled
        ? `<span class="nav-item nav-disabled">
            ${p.icon}${p.label}${p.soon ? `<span class="nav-soon">Soon</span>` : ""}
           </span>`
        : `<a href="${p.href}" class="${p.href === current ? "active" : ""}">
            ${p.icon}${p.label}${p.soon ? `<span class="nav-soon">Soon</span>` : ""}
           </a>`).join("")}
      <!--
      <span class="sidebar-section-label">Tools</span>
      ${PAGES.filter(p => p.tools).map(p => `
        <a href="${p.href}" class="${p.href === current ? "active" : ""}">
          ${p.icon}${p.label}
        </a>`).join("")}
        -->
    </nav>

    <div class="sidebar-footer">
      <span class="sidebar-funder-label">${c.funderName}</span>
      ${funderWrap}
      <div class="sidebar-footer-copy">
        Climate Risk Resource Hub<br>${new Date().getFullYear()}
      </div>
    </div>
  `;
})();
