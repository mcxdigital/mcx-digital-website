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


  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const status = document.getElementById("form-status");
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      status.hidden = false;
      status.textContent = "Sending your inquiry…";
      status.classList.remove("is-success", "is-error");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Your message could not be sent. Please try again.");
        }

        status.textContent = "Thanks for reaching out. Your message has been sent successfully. I'll be in touch soon.";
        status.classList.add("is-success");
        contactForm.reset();
      } catch (error) {
        status.textContent = error.message || "Something went wrong. Please try again or email matthew@mcxdigital.net directly.";
        status.classList.add("is-error");
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }

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