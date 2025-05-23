// Run the script only after the HTML document has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the carousel container
  const carousel = document.querySelector(".gameCarousel");

  // Select the left and right scroll buttons
  const btnLeft = document.querySelector(".carouselBtn.left");
  const btnRight = document.querySelector(".carouselBtn.right");

  // Helper function to calculate how far to scroll when a button is clicked
  function getScrollAmount() {
    // Try to get the first item in the carousel
    const firstItem = carousel.querySelector(".gameEntry");

    // If no items exist, fall back to scrolling by the visible width of the carousel
    if (!firstItem) return carousel.offsetWidth;

    // Get computed styles of the carousel to read the `gap` value
    const style = getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 0; // Convert gap to integer, default to 0

    // Return the total scroll distance: width of one item plus the gap
    return firstItem.offsetWidth + gap;
  }

  // Scroll left when the left button is clicked
  btnLeft.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" }); // scroll left
  });

  // Scroll right when the right button is clicked
  btnRight.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" }); // scroll right
  });

  // Optional: respond to window resizing if scrollAmount is cached
  window.addEventListener("resize", () => {
    // You could re-calculate or re-cache scrollAmount here if needed
    // Currently this is left empty because scrollAmount is dynamically calculated each click
  });
});
