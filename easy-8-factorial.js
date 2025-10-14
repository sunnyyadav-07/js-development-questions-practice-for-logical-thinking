/*
  🚀 Question 8: Find the factorial of a number using loops.

FACTORIAL : 4!=4x3x2x1

  🧩 Example:
  Input: 4
  Output: 24

*/
let number = 3;

function factorial(num) {
  let fact = 1;
  if (number == 0) return 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(number));
