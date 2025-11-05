/*
  🚀 Question 19: Create a modal popup box with open/close buttons
   
*/
const grayLayer = document.querySelector(".gray-layer");
const openBtn = document.querySelector(".open-btn");
const cancelBtn = document.querySelector(".cancel-btn");
openBtn.addEventListener("click", openModal);
function openModal() {
  grayLayer.classList.toggle("dis-none");
  openBtn.classList.toggle("dis-none");
}
cancelBtn.addEventListener("click", cancelModal);
function cancelModal() {
  grayLayer.classList.toggle("dis-none");
  openBtn.classList.toggle("dis-none");
}
