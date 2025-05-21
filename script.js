document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");
  let lastScrollY = window.scrollY;
  let scrollUpBuffer = 0;
  const threshold = 10;

  function checkOverlapAndAdjust() {
    if (!nav || !blogSidebar) return;

    const navRect = nav.getBoundingClientRect();
    const blogRect = blogSidebar.getBoundingClientRect();

    const isOverlapping =
      navRect.bottom > blogRect.top && navRect.top < blogRect.bottom;

    if (isOverlapping) {
      blogSidebar.classList.add("nav-visible");
    } else {
      blogSidebar.classList.remove("nav-visible");
    }
  }

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (delta < 0) {
      scrollUpBuffer -= delta;
      if (scrollUpBuffer >= threshold) {
        nav.classList.remove("nav-hidden");
        checkOverlapAndAdjust();
        scrollUpBuffer = 0;
      }
    } else {
      nav.classList.add("nav-hidden");
      blogSidebar?.classList.remove("nav-visible");
      scrollUpBuffer = 0;
    }

    lastScrollY = currentScrollY;
  });

  // Scroll-to-top logic
  const btn = document.getElementById("top");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
