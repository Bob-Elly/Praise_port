/**
 * Godwin Praise Portfolio - Site Configuration
 * Single source of truth for external links and contact details.
 * Edit values here to update them across the entire portfolio site.
 */
window.PORTFOLIO_CONFIG = {
  // Public contact email
  email: "godwinpraise05@gmail.com",

  // 15-minute consultation booking link
  bookingUrl: "https://cal.com/praise-godwin-6lfzkq/15min",

  // Social profile links (Placeholders - replace with your real handles)
  socials: {
    linkedin: "https://www.linkedin.com/in/godwinpraise-placeholder",
    twitter: "https://x.com/godwinpraise-placeholder",
    dribbble: "https://dribbble.com/godwinpraise-placeholder",
    behance: "https://www.behance.net/godwinpraise-placeholder"
  },

  // Owner details
  name: "Godwin Praise",
  title: "UI Designer | UX Designer | Brand Designer",
  location: "Nigeria"
};

// Auto-sync configuration to DOM elements that have data attributes
document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  // Sync email links and text
  document.querySelectorAll("[data-config-email]").forEach(el => {
    if (el.tagName === "A") {
      el.href = `mailto:${config.email}`;
    }
    if (el.dataset.configEmail === "text") {
      el.textContent = config.email;
    }
  });

  // Sync booking links
  document.querySelectorAll("[data-config-booking]").forEach(el => {
    if (el.tagName === "A") {
      el.href = config.bookingUrl;
    }
  });

  // Sync social links
  document.querySelectorAll("[data-config-social]").forEach(el => {
    const platform = el.dataset.configSocial;
    if (config.socials[platform] && el.tagName === "A") {
      el.href = config.socials[platform];
    }
  });
});
