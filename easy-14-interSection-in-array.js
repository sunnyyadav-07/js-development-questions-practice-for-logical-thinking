/*
  🚀 Question 14: 7. Find intersection of two arrays.

  🧩 Example:
  Input: [1, 3, 4], [2, 5, 1, 3]
  Output: [1, 3] 

*/
let arr1 = [1, 3, 4];
let arr2 = [2, 5, 1, 3];

//  ✅ Approach 1

let result = arr1.filter((elem) => {
  return arr2.includes(elem);
});
console.log(result);

//  ✅ Approach 2

// function intersectionOfTwoArr(mergedArr) {
//   let intersectionOfArr = [];
//   let occurrences = {};
//   mergedArr.forEach((elem) => {
//     if (occurrences.hasOwnProperty(elem)) {
//       occurrences[elem]++;
//     } else {
//       occurrences[elem] = 1;
//     }
//   });
//   for (const key in occurrences) {
//     if (occurrences[key] > 1) {
//       intersectionOfArr.push(Number(key));
//     }
//   }

//   console.log(`Intersection of [${arr1}] and [${arr2}] = `, intersectionOfArr);
// }
// intersectionOfTwoArr([...arr1, ...arr2]);
