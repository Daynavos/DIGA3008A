document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    // Toggles 'active' class on both hamburger icon and nav menu when clicked
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Elements for nav and sidebar
  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  // Scroll state tracking
  let lastScrollY = window.scrollY; // Tracks last scroll position
  let scrollUpBuffer = 0; // Accumulates upward scroll amount
  const threshold = 10; // Threshold to determine meaningful upward scroll

  // Unified scroll handler for nav visibility and scroll-to-top button
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY; // Positive = scrolling down, negative = up

    // Show nav when user scrolls up beyond threshold
    if (delta < 0) {
      scrollUpBuffer -= delta; // Add absolute value of upward scroll
      if (scrollUpBuffer >= threshold) {
        nav?.classList.remove("nav-hidden"); // Reveal nav
        checkOverlapAndAdjust(); // Optional: adjust layout if needed
        scrollUpBuffer = 0;
      }
    } else {
      // Hide nav on downward scroll
      nav?.classList.add("nav-hidden");

      // Hide sidebar if visible
      blogSidebar?.classList.remove("nav-visible");

      // Close nav menu if open
      navMenu?.classList.remove("active");

      // Reset buffer since we're scrolling down
      scrollUpBuffer = 0;
    }

    // Show/hide scroll-to-top button after 300px scroll
    if (btn) {
      btn.classList.toggle("show", window.scrollY > 300);
    }

    lastScrollY = currentScrollY;
  });

  // Scroll-to-top button logic
  const btn = document.getElementById("top");
  if (btn) {
    // Smooth scroll to top when button is clicked
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
