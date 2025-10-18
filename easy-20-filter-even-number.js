/*
  🚀 Question 20: Find all even numbers in an array.

  🧩 Example:
  Input: [1, 3, 2, 4, 5, 7, 6, 8]
  Output: [2, 4, 6, 8] 

*/
let arr = [1, 3, 2, 4, 5, 7, 6, 8];
let evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr);
