function toggle_theme() {

    const toggleButton = document.querySelector('.theme');
    // alert('clicked')
    document.body.classList.toggle('dark-theme');

}


const modal = document.getElementById("bookingModal");
const openBtn = document.querySelector(".open-modal-btn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});