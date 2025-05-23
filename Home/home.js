document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".gameCarousel");
  const btnLeft = document.querySelector(".carouselBtn.left");
  const btnRight = document.querySelector(".carouselBtn.right");

  // Helper: calculate scroll amount dynamically
  function getScrollAmount() {
    // Option 1: Scroll by the width of one item + gap
    const firstItem = carousel.querySelector(".gameEntry");
    if (!firstItem) return carousel.offsetWidth; // fallback

    const style = getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 0;

    return firstItem.offsetWidth + gap;
  }

  btnLeft.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Optional: update scrollAmount on window resize (if you want to cache)
  window.addEventListener("resize", () => {
    // If caching scrollAmount in a variable, update it here
  });
});
