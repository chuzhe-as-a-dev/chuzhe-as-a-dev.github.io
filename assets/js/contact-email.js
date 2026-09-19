document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".contact-email");
  const popover = document.getElementById("contact-email-popover");
  if (!button || !popover) return;
  button.addEventListener("click", () => {
    popover.hidden = !popover.hidden;
    button.setAttribute("aria-expanded", String(!popover.hidden));
  });
  button.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      popover.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }
  });
});
