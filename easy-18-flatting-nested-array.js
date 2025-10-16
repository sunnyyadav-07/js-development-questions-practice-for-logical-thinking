/*
  🚀 Question 18:  Flatten a nested array (1 level).

  🧩 Example:
  Input: [1, 3, [ 2, 5 ], 6, 4]
  Output: [1, 3, 2, 5, 6, 4]

*/
let arr = [1, 3, [2, 5], 6, 4];
let result = arr.flat();
console.log(result);

// For multi-level
 
let arr2 = [1, 3, [2, 5, [9, 8, [10, 11]]], 6, 4];
let result2 = arr2.flat(Infinity);
console.log(result2);
