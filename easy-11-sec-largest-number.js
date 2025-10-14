/*
  🚀 Question 11: Find the second largest number in an array.

  🧩 Example:
  Input: [1, 3, 7, 2, 5, 6, 8]
  Output: 7

*/
let arrOfNumbers = [1, 3, 4, 6, 7, 9, 12, 11, 8];
function secondLargest(arr) {
  let result = arr.sort((a, b) => {
    return b - a;
  })[1];
  return result;
}
console.log(secondLargest(arrOfNumbers));
