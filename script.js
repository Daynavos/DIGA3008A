document.addEventListener("DOMContentLoaded", () => {
  // Get scroll-to-top button FIRST
  const btn = document.getElementById("top");

  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  let lastScrollY = window.scrollY;
  let scrollUpBuffer = 0;
  const threshold = 10;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (delta < 0) {
      scrollUpBuffer -= delta;
      if (scrollUpBuffer >= threshold) {
        nav?.classList.remove("nav-hidden");
        checkOverlapAndAdjust?.();
        scrollUpBuffer = 0;
      }
    } else {
      nav?.classList.add("nav-hidden");
      blogSidebar?.classList.remove("nav-visible");
      navMenu?.classList.remove("active");
      scrollUpBuffer = 0;
    }

    // Scroll-to-top toggle (works now!)
    if (btn) {
      btn.classList.toggle("show", window.scrollY > 300);
    }

    lastScrollY = currentScrollY;
  });

  // Scroll-to-top button click handler
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
