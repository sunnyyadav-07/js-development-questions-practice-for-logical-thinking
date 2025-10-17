/*
  🚀 Question 19: Convert a number to binary manually.

  🧩 Example:
  Input: 5
  Output: 101 

*/
let num = 13;
function decimalToBinary(decimalNum) {
  let quotient = 0;
  let reminder = 0;
  let binary = "";
  while (num > 0) {
    quotient = Math.floor(decimalNum / 2);
    reminder = decimalNum % 2;
    binary += reminder;
    decimalNum = quotient;
  }
  return binary.split("").reverse().join("");
}
console.log(decimalToBinary(num));
