/*
  🚀 Question 15: Find union of two arrays.

  🧩 Example:
  Input: [1, 3, 1] , [2, 5, 6, 3]
  Output: [1, 3, 2, 5, 6] 

*/
let arr1 = [1, 3, 1];
let arr2 = [2, 5, 6, 3];
function unionOfTwoArr(mergedArray) {
  //  ✅ Approach 1(efficeint)

  return [...new Set(mergedArray)];

  //  ✅ Approach 2

  // let union = [];
  // mergedArray.forEach((element) => {
  //   if (!union.includes(element)) {
  //     union.push(element);
  //   }
  // });
  // return union;
}
console.log(unionOfTwoArr([...arr1, ...arr2]));
