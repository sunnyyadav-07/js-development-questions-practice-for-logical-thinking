/*
  🚀 Question 7: Sum all numbers in an array

  🧩 Example:
  Input: [1, 2, 5, 6, 3]
  Output: 17

  ✅ Approach 1: Using logical thinking 
  ✅ Approach 2: Using reduce() method 
*/
let arr = [1, 5, 3, 7];

function sumOfArr(arr) {

  // ✅ Approach 1

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  
  // ✅ Approach 2

  // let result = arr.reduce((acc, curr) => {
  //   return acc + curr;
  // });
  // return result;
}
console.log(sumOfArr(arr));
