document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");

  hamburger.addEventListener("click", () => {
    console.log(navMenu);
    navMenu.classList.toggle("active");
    hamburger;
  });
});
