function openModal(modalId, caption, imgSrc, event) {
  const modal = document.getElementById(modalId);
  const img = document.getElementById("modalImg");
  img.src = imgSrc;
  modal.querySelector(".caption").innerText = caption;
  modal.classList.add("show");
}
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("show");
}
