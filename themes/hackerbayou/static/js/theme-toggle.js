// Theme toggle functionality
(function () {
  "use strict";

  // Get the current theme
  function getCurrentTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  }

  // Set theme
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update toggle button text
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
      toggleBtn.setAttribute(
        "aria-label",
        `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      );
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  // Initialize theme when DOM is loaded
  function initTheme() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);

    // Add click listener to toggle button
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);

      // Add keyboard support
      toggleBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      });
    }
  }

  // Listen for system theme changes
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addListener(function (e) {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }

  // Mobile Navigation functionality
  function initMobileNav() {
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (!mobileToggle || !mainNav) return;

    // Toggle mobile navigation
    function toggleMobileNav() {
      const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";

      mobileToggle.setAttribute("aria-expanded", !isOpen);
      mainNav.classList.toggle("active");

      // Prevent body scroll when nav is open
      document.body.style.overflow = !isOpen ? "hidden" : "";
    }

    // Close mobile nav
    function closeMobileNav() {
      mobileToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("active");
      document.body.style.overflow = "";
    }

    // Add click listener to toggle button
    mobileToggle.addEventListener("click", toggleMobileNav);

    // Add keyboard support for toggle button
    mobileToggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMobileNav();
      }
    });

    // Close nav when clicking on nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    // Close nav when clicking outside
    document.addEventListener("click", function (e) {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close nav on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMobileNav();
      }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });
  }

  // Initialize both theme and mobile nav when DOM is ready
  function initAll() {
    initTheme();
    initMobileNav();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

  // Watch for system theme changes
  watchSystemTheme();
})();
