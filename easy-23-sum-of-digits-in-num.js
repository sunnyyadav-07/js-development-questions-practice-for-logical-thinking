/*
  🚀 Question 23: Find the sum of digits of a number.


  🧩 Example:
  Input:1234
  Output: 10 

*/
let number = 12345;

// ✅ Approach 1

function sumOfDigitsOfNumber(num) {
  let sum = 0;
  let remainder = 0;
  while (num > 0) {
    remainder = num % 10;
    sum += remainder;
    num = Math.trunc(num / 10);
  }
  return sum;
}
console.log(sumOfDigitsOfNumber(number));

// ✅ Approach 2

let result = String(number)
  .split("")
  .reduce((a, b) => {
    return Number(a) + Number(b);
  });
console.log(result);
