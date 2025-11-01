/*
  🚀 Question 14: Create a stopwatch using JavaScript.

   
*/
const timer = document.querySelector("#timer");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const stopBtn = document.querySelector(".stop-btn");
function createStopwatch() {
  let time = 0;
  let timerId = null;
  function start() {
    if (timerId) return;
    startBtn.classList.add("display-none");
    stopBtn.classList.remove("display-none");
    timerId = setInterval(() => {
      time++;
      let minutes = Math.floor(time / 60);
      let hours = Math.floor(minutes / 60);
      let seconds = time % 60;
      minutes = minutes % 60;
      let formattedTime = `${String(hours).padStart(2, "0")} : ${String(
        minutes
      ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

      timer.innerText = formattedTime;
    }, 1000);
  }
  function stop() {
    clearInterval(timerId);
    stopBtn.classList.add("display-none");
    startBtn.classList.remove("display-none");
    timerId = null;
  }
  function reset() {
    stop();
    time = 0;
    timer.innerText = `00 : 00 : 00`;
  }
  return { start, stop, reset };
}
let stopWatch = createStopwatch();
startBtn.addEventListener("click", stopWatch.start);
resetBtn.addEventListener("click", stopWatch.reset);
stopBtn.addEventListener("click", stopWatch.stop);
