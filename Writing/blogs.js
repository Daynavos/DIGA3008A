// Wait for the full DOM to be loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Close <details> logic

  // Attach click listeners to all buttons with class 'close-details-button'
  document.querySelectorAll(".close-details-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Find the nearest parent <details> element
      const details = button.closest("details");

      // If it's open, close it
      if (details && details.open) {
        details.removeAttribute("open");
      }
    });
  });

  // 2. Toggle dropdown icons in <details>

  // Update the arrow icon
  document.querySelectorAll("details").forEach((detail) => {
    const icon = detail.querySelector(".dropdown-icon");

    detail.addEventListener("toggle", () => {
      icon.textContent = detail.open ? "▴" : "▾";
    });
  });

  // 3. Show/hide blog sidebar based on scroll

  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  // Create an invisible trigger element to detect scroll position
  const trigger = document.createElement("div");
  trigger.style.position = "absolute";
  trigger.style.top = "0";
  trigger.style.height = "1px";
  trigger.style.width = "100%";
  trigger.style.pointerEvents = "none";

  // Insert trigger at the top of the sidebar
  blogSidebar.prepend(trigger);

  // Observe visibility of the trigger relative to viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger is visible — show the sidebar nav
          blogSidebar.classList.add("nav-visible");
        } else {
          // Trigger is not visible — hide the sidebar nav
          blogSidebar.classList.remove("nav-visible");
        }
      });
    },
    {
      root: null, // Use the viewport as the container
      rootMargin: "-70px 0px 0px 0px", // Offset to adjust sensitivity (e.g., nav height)
      threshold: 0, // Trigger as soon as the element enters/exits the viewport
    }
  );

  observer.observe(trigger); // Start observing the trigger element

  // 4. Blog post filtering based on tag buttons

  const filterButtons = document.querySelectorAll(".filter-btn");
  const blogPosts = document.querySelectorAll(".blog-post");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      blogPosts.forEach((post) => {
        // Read the space-separated tags from the data-tags attribute
        const tagsAttr = post.getAttribute("data-tags") || "";
        const tags = tagsAttr.split(" ");

        // Show or hide the post based on tag match
        const match = filter === "all" || tags.includes(filter);
        post.style.display = match ? "block" : "none";
      });

      // Highlight the active filter button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 5. Toggle dropdown menu

  const toggle = document.querySelector(".dropdownToggle");
  const list = document.querySelector(".dropdownList");

  toggle.addEventListener("click", () => {
    // Toggle visibility class on the dropdown list
    list.classList.toggle("show");
  });
});
