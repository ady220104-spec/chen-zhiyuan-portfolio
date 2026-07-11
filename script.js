(() => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reveals = document.querySelectorAll(".reveal");

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((element) => observer.observe(element));
  }

  const colors = ["#2B7FD8", "#F4D758", "#2B7FD8", "#F4D758", "#E84A5F"];

  document.querySelectorAll("[data-cool-button]").forEach((button) => {
    button.addEventListener("click", () => {
      if (motionQuery.matches) return;

      const bounds = button.getBoundingClientRect();
      const originX = bounds.left + bounds.width / 2;
      const originY = bounds.top + bounds.height / 2;

      for (let index = 0; index < 12; index += 1) {
        const angle = (Math.PI * 2 * index) / 12 + (Math.random() - 0.5) * 0.24;
        const distance = 34 + Math.random() * 34;
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.style.left = `${originX}px`;
        particle.style.top = `${originY}px`;
        particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
        particle.style.setProperty("--particle-size", `${4 + Math.random() * 4}px`);
        particle.style.setProperty("--particle-color", colors[index % colors.length]);
        document.body.append(particle);
        particle.addEventListener("animationend", () => particle.remove(), { once: true });
      }
    });
  });
})();
