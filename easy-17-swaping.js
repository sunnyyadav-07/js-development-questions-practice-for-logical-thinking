/*
  🚀 Question 17:  Swap two variables without using a third variable.

  🧩 Example:
  Input: a = 10 , b = 15
  Output: a = 15 , b = 10 

*/
let a = 10;
let b = 15;

// ✅ Approach 1

function swapTwoNum(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  return [num1, num2];
}
[a, b] = swapTwoNum(a, b);
console.log(a, b);

// ✅ Approach 2

// [a, b] = [b, a];
// console.log(a, b);
