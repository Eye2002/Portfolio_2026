// ================= MODAL FUNCTIONS =================

// OPEN MODAL
window.showModal = function (src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.warn("Modal not found on this page");
    return;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalImg.src = src;
  document.body.style.overflow = "hidden";
};

// CLOSE MODAL
window.closeModal = function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.warn("Modal not found on this page");
    return;
  }

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalImg.src = "";
  document.body.style.overflow = "";
};

// CLICK OUTSIDE TO CLOSE (SAFE)
document.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  if (e.target === modal) {
    window.closeModal();
  }
});
