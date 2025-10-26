/*
  🚀 Question 4: Create a function to debounce another function.

*/
const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");
const debounce = function (fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
function print(event) {
  output.innerText = event.target.value;
}
let debouncedCalling = debounce(print, 1000);
searchInput.addEventListener("input", debouncedCalling);
