/*
  🚀 Question 9: Write a function to flatten a deeply nested array.

   🧩 Example:
   Input: [1, 2, [3, 4, [6, 7, [8, 9, [10, [11, [12]]]]]]]
   Output: [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12]
   
*/
const flattenedTheArr = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + " is not a valid array");
  }
  return arr.flat(Infinity);
};
let deeplyNestedArr = [1, 2, [3, 4, [6, 7, [8, 9, [10, [11, [12]]]]]]];

console.log(flattenedTheArr(deeplyNestedArr));
