/*
  🚀 Question 10: Implement a simple calculator using JS functions.

  
*/
const resultArea = document.querySelector("#input-field");
const btns = document.querySelector("#btns-part");
function btnClicked(event) {
  let clickedBtn = event.target.innerText;
  console.log(clickedBtn);
  if (clickedBtn === "=") {
    calculate(resultArea.value);
  } else if (clickedBtn === "AC") {
    resultArea.value = "";
  } else if (clickedBtn === "DEL") {
    resultArea.value = resultArea.value.slice(0, -1);
  } else {
    resultArea.value += clickedBtn;
    console.log(resultArea.value);
  }
}
btns.addEventListener("click", btnClicked);
function calculate(val) {
  try {
    let expression = val.replace(/%/g, "/100*");
    resultArea.value = new Function(`return ${expression}`)();
  } catch (error) {
    resultArea.value = "Error";
  }
}
document.addEventListener("keydown", handleKeybordInputs);
function handleKeybordInputs(event) {
  let enteredInput = event.key;
  if (
    !isNaN(enteredInput) ||
    ["*", "+", "-", "/", ".", "%"].includes(enteredInput)
  ) {
    resultArea.value += enteredInput;
  } else if (enteredInput === "=" || enteredInput === "Enter") {
    calculate(resultArea.value);
  } else if (enteredInput === "Escape") {
    resultArea.value = "";
  } else if (enteredInput === "Backspace") {
    resultArea.value = resultArea.value.slice(0, -1);
  }
}
