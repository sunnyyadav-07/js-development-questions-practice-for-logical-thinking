// Q-5=> Find the Smallest Number in an Array (Without Using Built-in Methods).
/*
  🚀 Question 7:  Find the Smallest Number in an Array (Without Using Built-in Math.min() or sort())

  🧩 Example:
  Input: [2, 3, 1, 6, 16]
  Output: 1

*/
let arr = [2, 1, 14, 3, 7, 6, 5, 16, 12, 18, 9, 11, 6, 48, 99, 44, 55];
function smallestNum(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(smallestNum(arr));
