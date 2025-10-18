/*
  🚀 Question 21: Find all odd numbers in an array.

  🧩 Example:
  Input: [1, 3, 2, 4, 5, 7, 6, 8]
  Output: [1, 3, 5, 7] 

*/
let arr = [1, 3, 2, 4, 5, 7, 6, 8];
let oddArr = arr.filter((num) => num % 2 !== 0);
console.log(oddArr);
