/*
  🚀 Question 7: Remove Duplicates from an Array

  🧩 Example:
  Input: [1, 3, 1, 2, 5, 6, 3]
  Output: [1, 3, 2, 5, 6]

  ✅ Approach 1: Using Set (Efficient)
  ✅ Approach 2: Using includes() for logical understanding
*/

let arr = [1, 3, 1, 2, 5, 6, 3];

// ✅ Approach 1
let set = new Set(arr);
console.log(Array.from(set));

// ✅ Approach 2
let newArr = [];
arr.forEach((elem) => {
  if (!newArr.includes(elem)) {
    newArr.push(elem);
  }
});
console.log(newArr);
