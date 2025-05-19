function fixPortfolioOrder() {
  const isSmallScreen = window.innerWidth < 700; // adjust breakpoint as needed
  const entries = document.querySelectorAll(".gameEntry");

  entries.forEach((entry) => {
    const textDiv = entry.querySelector(".gameInfo");
    const imageDiv = entry.querySelector(".gameImage");

    // Reset order before applying
    entry.appendChild(textDiv);
    entry.appendChild(imageDiv);

    if (isSmallScreen) {
      // Ensure the order is always text → image on small screens
      if (entry.firstElementChild.classList.contains("gameImage")) {
        entry.insertBefore(textDiv, imageDiv);
      }
    }
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", fixPortfolioOrder);

// Also re-run when the window is resized
window.addEventListener("resize", fixPortfolioOrder);
