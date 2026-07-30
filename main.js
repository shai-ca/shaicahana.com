document.addEventListener("DOMContentLoaded", function () {
  const modalLinks = document.querySelectorAll(".modalLink");

  modalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Find the next modal div after this link
      const modal = this.closest("p").nextElementSibling;
      if (modal && modal.classList.contains("modal")) {
        modal.style.display = "block";
        setTimeout(() => {
          modal.classList.add("show");
        }, 10);
      }
    });
  });

  // Close button handler
  document.querySelectorAll(".close-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling to modal
      const modal = this.parentElement;
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    });
  });

  // Click outside image to close
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        // Only close if clicking the background
        this.classList.remove("show");
        setTimeout(() => {
          this.style.display = "none";
        }, 300);
      }
    });
  });
});
