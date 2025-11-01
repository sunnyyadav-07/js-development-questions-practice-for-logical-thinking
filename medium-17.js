/*
  🚀 Question 17:  Implement light/dark mode toggle with JS.

   
*/
const modeBtn = document.querySelector("button");
const body = document.body;
modeBtn.addEventListener("click", () => {
  if (body.classList.toggle("bg-color")) {
    modeBtn.innerText = "Light mode";
  } else {
    modeBtn.innerText = "Dark mode";
  }
});
