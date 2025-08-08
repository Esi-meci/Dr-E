function toggle_theme() {
  const toggleButton = document.querySelector(".theme");
  // alert('clicked')
  document.body.classList.toggle("dark-theme");
}

const openBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementById("closeModalBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.onload = function () {
  const bookBtn = document.getElementById("bookBtn");

  bookBtn.addEventListener("click", function () {
    if (window.Calendly) {
      Calendly.initPopupWidget({
        url: 'https://calendly.com/cherrychiro8'
      });
      console.log('calendly is here')
    } else {
      console.error('Calendly script not loaded yet.');
    }
    return false;
  });
};
