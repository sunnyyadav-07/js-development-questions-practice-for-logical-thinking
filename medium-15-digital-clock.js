/*
  🚀 Question 15: Create a digital clock that updates every second.

   
*/
const time = document.querySelector(".time");

// console.log(date.toLocaleTimeString());
setInterval(() => {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
