/*
  🚀 Question 5: Create a function to throttle another function.

*/
const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");
const submitBtn = document.querySelector("button");
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function inputText(text) {
  output.innerText = text;
  searchInput.value = "";
}
let throttledSubmission = throttle(inputText, 5000);
submitBtn.addEventListener("click", () => {
  throttledSubmission(searchInput.value);
});
