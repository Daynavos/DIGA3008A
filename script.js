document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Scroll-to-hide nav logic
  const nav = document.querySelector("nav"); // now targeting generic <nav>
  let lastScrollY = window.scrollY;

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY < lastScrollY) {
        nav.classList.remove("nav-hidden");
      } else {
        nav.classList.add("nav-hidden");
      }
      lastScrollY = window.scrollY;
    });
  }

  const btn = document.getElementById("top");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
