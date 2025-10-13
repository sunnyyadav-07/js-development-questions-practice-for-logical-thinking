/*
  🚀 Question 7:  Find the Largest Number in an Array (Without Using Built-in Math.max() or sort())

  🧩 Example:
  Input: [1, 3, 1, 2, 6, 16]
  Output: 16

*/
let arr = [2, 1, 14, 3, 7, 600, 5, 16, 12, 18, 9, 11, 6, 48, 99, 44, 55];
function maxNum(arr) {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  return maximum;
}
console.log(maxNum(arr));
