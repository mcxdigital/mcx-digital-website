(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const config = window.MCX_CONFIG || {};
  document.querySelectorAll("[data-portal-link]").forEach((link) => {
    if (config.customerPortalUrl) {
      link.href = config.customerPortalUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "contact.html";
      link.setAttribute("aria-label", "Customer portal destination to be configured; contact MCX Digital");
    }
  });
})();