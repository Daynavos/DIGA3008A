// Run the script only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll-to-top button setup
  const btn = document.getElementById("top"); // The "scroll to top" button

  // 2. Hamburger menu toggle for mobile
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      // Toggle the 'active' class to open/close menu
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // 3. Hide navbar on scroll down, show on scroll up
  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  let lastScrollY = window.scrollY; // Track last scroll position
  let scrollUpBuffer = 0; // Accumulate upward scroll distance
  const threshold = 10; // Amount of scroll needed to show nav

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY; // Difference in scroll direction

    if (delta < 0) {
      // User scrolled up
      scrollUpBuffer -= delta;

      // If user scrolled up enough, show nav and sidebar
      if (scrollUpBuffer >= threshold) {
        nav?.classList.remove("nav-hidden");
        checkOverlapAndAdjust?.(); // Optional helper (if defined elsewhere)
        scrollUpBuffer = 0;
      }
    } else {
      // User scrolled down
      nav?.classList.add("nav-hidden"); // Hide nav
      blogSidebar?.classList.remove("nav-visible"); // Hide sidebar
      navMenu?.classList.remove("active"); // Close mobile nav
      scrollUpBuffer = 0; // Reset buffer
    }

    // Show or hide scroll-to-top button depending on scroll position
    if (btn) {
      btn.classList.toggle("show", window.scrollY > 300);
    }

    lastScrollY = currentScrollY; // Update last scroll position
  });

  // 4. Scroll-to-top button click handler
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });
  }
});
