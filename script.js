document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Elements for nav and sidebar
  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  // Scroll state tracking
  let lastScrollY = window.scrollY;
  let scrollUpBuffer = 0;
  const threshold = 10;

  // Unified scroll handler
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    // Show/hide nav
    if (delta < 0) {
      scrollUpBuffer -= delta;
      if (scrollUpBuffer >= threshold) {
        nav?.classList.remove("nav-hidden");
        checkOverlapAndAdjust();
        scrollUpBuffer = 0;
      }
    } else {
      nav?.classList.add("nav-hidden");
      blogSidebar?.classList.remove("nav-visible");
      navMenu?.classList.remove("active");
      scrollUpBuffer = 0;
    }

    // Show/hide top button
    if (btn) {
      btn.classList.toggle("show", window.scrollY > 300);
    }

    lastScrollY = currentScrollY;
  });

  // Scroll-to-top button logic
  const btn = document.getElementById("top");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
