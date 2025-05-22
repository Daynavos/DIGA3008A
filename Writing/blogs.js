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

  const nav = document.querySelector("nav");
  const blogSidebar = document.querySelector(".blogSelection");

  // Add an invisible trigger element above blogSidebar to watch
  const trigger = document.createElement("div");
  trigger.style.position = "absolute";
  trigger.style.top = "0";
  trigger.style.height = "1px";
  trigger.style.width = "100%";
  trigger.style.pointerEvents = "none";
  blogSidebar.prepend(trigger);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blogSidebar.classList.add("nav-visible");
        } else {
          blogSidebar.classList.remove("nav-visible");
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: "-70px 0px 0px 0px", // adjust if needed to align with nav height
      threshold: 0,
    }
  );

  observer.observe(trigger);

  const filterButtons = document.querySelectorAll(".filter-btn");
  const blogPosts = document.querySelectorAll(".blog-post");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      blogPosts.forEach((post) => {
        const tagsAttr = post.getAttribute("data-tags") || "";
        const tags = tagsAttr.split(" ");
        const match = filter === "all" || tags.includes(filter);
        post.style.display = match ? "block" : "none";
      });

      // Optional: Highlight active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
