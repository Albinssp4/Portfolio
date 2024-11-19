document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = (event.target as HTMLAnchorElement).getAttribute("href");
        if (target) {
          const section = document.querySelector(target);
          section?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  