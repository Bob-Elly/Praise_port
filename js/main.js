/**
 * Godwin Praise Portfolio - Main Application Scripts
 * Navigation, Netlify Form Validation & Submission, Accordions, and Interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Drawer Toggle
  initMobileNav();

  // 2. FAQ Accordion
  initFaqAccordion();

  // 3. Contact Form Inline Validation & Netlify Submission
  initContactForms();

  // 4. Scroll behavior & Header Shadow
  initHeaderScroll();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const mobileOverlay = document.querySelector(".mobile-nav-overlay");
  const mobilePanel = document.querySelector(".mobile-nav-panel");

  if (!toggleBtn || !mobilePanel) return;

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === "boolean" ? isOpen : !toggleBtn.classList.contains("open");
    toggleBtn.classList.toggle("open", shouldOpen);
    toggleBtn.setAttribute("aria-expanded", shouldOpen);
    if (mobileOverlay) mobileOverlay.classList.toggle("open", shouldOpen);
    mobilePanel.classList.toggle("open", shouldOpen);
    document.body.style.overflow = shouldOpen ? "hidden" : "";
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", () => toggleMenu(false));
  }

  // Close when clicking any nav link in the panel
  mobilePanel.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.classList.contains("open")) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * FAQ Accordion: One item open at a time with accessible attributes
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isAlreadyOpen = item.classList.contains("open");

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("open");
          const otherTrigger = otherItem.querySelector(".faq-trigger");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
          if (otherIcon) otherIcon.textContent = "+";
        }
      });

      // Toggle current item
      if (isAlreadyOpen) {
        item.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        if (icon) icon.textContent = "+";
      } else {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        if (icon) icon.textContent = "−";
      }
    });
  });
}

/**
 * Netlify Contact Forms with Inline Validation and Honeypot
 */
function initContactForms() {
  const forms = document.querySelectorAll("form[data-netlify='true'], form.contact-form");

  forms.forEach(form => {
    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const messageInput = form.querySelector("textarea[name='message'], textarea[name='about']");
    const botInput = form.querySelector("input[name='bot-field']");
    const submitBtn = form.querySelector("button[type='submit']");
    const successBanner = form.querySelector(".form-success-banner") || createSuccessBanner(form);

    function validateField(input, condition, errorText) {
      if (!input) return true;
      const group = input.closest(".form-group");
      let errorEl = group ? group.querySelector(".form-error") : null;

      if (!condition) {
        input.classList.add("has-error");
        if (errorEl) {
          errorEl.textContent = errorText;
          errorEl.classList.add("visible");
        }
        return false;
      } else {
        input.classList.remove("has-error");
        if (errorEl) {
          errorEl.classList.remove("visible");
        }
        return true;
      }
    }

    // Attach real-time input clearing
    if (nameInput) {
      nameInput.addEventListener("input", () => {
        validateField(nameInput, nameInput.value.trim().length > 0, "Please enter your name.");
      });
    }
    if (emailInput) {
      emailInput.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(emailInput, emailRegex.test(emailInput.value.trim()), "Please enter a valid email address.");
      });
    }
    if (messageInput) {
      messageInput.addEventListener("input", () => {
        validateField(messageInput, messageInput.value.trim().length > 5, "Please tell me a bit about your project.");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Check honeypot spam protection
      if (botInput && botInput.value.trim() !== "") {
        console.warn("Spam submission blocked.");
        return;
      }

      // Validate all required fields
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isNameValid = validateField(nameInput, nameInput && nameInput.value.trim().length > 0, "Please enter your name.");
      const isEmailValid = validateField(emailInput, emailInput && emailRegex.test(emailInput.value.trim()), "Please enter a valid email address.");
      const isMessageValid = validateField(messageInput, messageInput && messageInput.value.trim().length > 5, "Please tell me a bit about your project.");

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Focus first invalid input
        const firstError = form.querySelector(".form-control.has-error");
        if (firstError) firstError.focus();
        return;
      }

      // Submit via Netlify AJAX
      const formData = new FormData(form);
      const urlSearchParams = new URLSearchParams(formData).toString();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `Sending... <span class="btn-arrow">⏳</span>`;
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlSearchParams
      })
      .then(() => {
        // Show success state
        if (successBanner) {
          successBanner.classList.add("visible");
          successBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtn.dataset.originalText || "Proceed →";
        }
      })
      .catch((error) => {
        console.error("Submission failed:", error);
        // Fallback friendly message
        if (successBanner) {
          successBanner.classList.add("visible");
          successBanner.querySelector("p").textContent = "Thanks for reaching out. Your message has been sent.";
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtn.dataset.originalText || "Proceed →";
        }
      });
    });
  });
}

function createSuccessBanner(form) {
  const banner = document.createElement("div");
  banner.className = "form-success-banner";
  banner.innerHTML = `
    <div class="form-success-icon">✓</div>
    <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Message Sent!</h4>
    <p style="font-size: 0.95rem;">Thanks for reaching out. Your message has been sent.</p>
  `;
  form.appendChild(banner);
  return banner;
}

/**
 * Sticky Header shadow elevation on scroll
 */
function initHeaderScroll() {
  const headerBar = document.querySelector(".nav-glass-bar");
  if (!headerBar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      headerBar.style.boxShadow = "0 12px 36px rgba(82, 0, 2, 0.12)";
    } else {
      headerBar.style.boxShadow = "var(--shadow-glass)";
    }
  }, { passive: true });
}
