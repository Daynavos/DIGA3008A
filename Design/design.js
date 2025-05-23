document.addEventListener("DOMContentLoaded", () => {
  // Close button logic for <details>
  document.querySelectorAll(".close-details-button").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.closest("details");
      if (details && details.open) {
        details.removeAttribute("open");
      }
    });
  });
});
