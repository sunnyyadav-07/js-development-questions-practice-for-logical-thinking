/*
  🚀 Question 12: Merge two arrays and remove duplicates.

  🧩 Example:
  Input: arr1 = [1, 5, 3, 7, 6] and arr2 = [4, 8, 6]
  Output: [1, 3, 4, 5, 6, 7, 8]

*/
let arr1 = [1, 2, 5, 8, 46, 7];
let arr2 = [9, 2, 8, 3, 5, 10];
let mergedArr = [...arr1, ...arr2];
let uniqueArr = [];
mergedArr.forEach((elem) => {
  if (!uniqueArr.includes(elem)) uniqueArr.push(elem);
});
console.log(mergedArr);
console.log(uniqueArr);
