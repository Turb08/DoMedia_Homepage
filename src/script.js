const menu = document.getElementById("menu");
const highlight = document.querySelector(".highlight");
const links = document.querySelectorAll("#menu a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const rect = link.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    highlight.style.height = `${rect.height}px`;
    highlight.style.width = `${rect.width}px`;
    highlight.style.transform = `translate(${rect.left - menuRect.left}px, ${
      rect.top - menuRect.top
    }px)`;
    highlight.style.opacity = 1;
  });
});

menu.addEventListener("mouseleave", () => {
  highlight.style.opacity = 0;
});
