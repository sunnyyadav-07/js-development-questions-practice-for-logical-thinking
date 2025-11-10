/*
  🚀 Question 21: Build a custom counter app using event listeners.

   
*/
const counting = document.querySelector("#count");
const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");

function counter() {
  let count = 0;
  function countIncrement() {
    count++;
    counting.textContent = count;
  }
  function countDecrement() {
    count--;
    counting.textContent = count;
  }
  function countReset() {
    count = 0;
    counting.textContent = count;
  }
  return { countIncrement, countDecrement, countReset };
}
let ca = counter();
incrementBtn.addEventListener("click", ca.countIncrement);
decrementBtn.addEventListener("click", ca.countDecrement);
resetBtn.addEventListener("click", ca.countReset);
