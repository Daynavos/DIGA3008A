// Wait until the entire HTML document has been fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  // Set up click handlers for all elements with the "close-details-button" class
  // These are used to programmatically close their parent <details> elements
  document.querySelectorAll(".close-details-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Find the closest <details> ancestor of the clicked button
      const details = button.closest("details");

      // If a <details> element is found and it is currently open, close it
      if (details && details.open) {
        details.removeAttribute("open");
      }
    });
  });

  // Add toggle event listeners to all <details> elements
  document.querySelectorAll("details").forEach((detail) => {
    // Find the arrow icon inside the summary, if present
    const icon = detail.querySelector(".dropdown-icon");

    // When the <details> element is toggled (opened or closed)
    detail.addEventListener("toggle", () => {
      // Change the icon's text to indicate open (▴) or closed (▾) state
      if (icon) {
        icon.textContent = detail.open ? "▴" : "▾";
      }
    });
  });
});
