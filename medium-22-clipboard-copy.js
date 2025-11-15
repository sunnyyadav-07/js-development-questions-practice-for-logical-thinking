/*

🚀 Question 22:  Make a copy-to-clipboard feature.


   
*/
const copyIcon = document.querySelector("i");
const userInput = document.querySelector("input");
copyIcon.addEventListener("click", copied);
function copied() {
  if (!userInput.value) return;
  navigator.clipboard.writeText(userInput.value);
}
