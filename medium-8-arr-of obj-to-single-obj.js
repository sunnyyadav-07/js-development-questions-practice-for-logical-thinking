/*
  🚀 Question 8: Convert an array of objects to a single object (key-value).

   🧩 Example:
   Input: [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]
   Output: { a: 1, b: 2, c: 3, d: 4 }
   
*/

let arrOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
let result = arrOfObjects.reduce((acc, curr) => {
  return { ...acc, ...curr };
});
console.log(result);
