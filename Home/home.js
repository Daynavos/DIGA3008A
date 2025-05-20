document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");

  const title = document.querySelector(".mainTitle");
  console.log("Title element:", title);

  if (title) {
    const defaultX = "90%";
    const defaultY = "50%";

    title.addEventListener("mouseenter", () => {
      title.addEventListener("mousemove", updatePosition);
    });

    title.addEventListener("mouseleave", () => {
      title.removeEventListener("mousemove", updatePosition);
      title.style.setProperty("--x", defaultX);
      title.style.setProperty("--y", defaultY);
    });

    function updatePosition(e) {
      const rect = title.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      title.style.setProperty("--x", `${x}%`);
      title.style.setProperty("--y", `${y}%`);
    }
  } else {
    console.warn("mainTitle element not found");
  }
});
