/*
  🚀 Question 25: Remove falsy values from an array.


  🧩 Example:
  Input: [1, 3, 0, "sunny", undefined, { age: "kuchh to hai" }, "0", null]
  Output: [ 1, 3, 'sunny', { age: 'kuchh to hai' }, '0' ] 

*/
// const falseyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

let arr = [1, 3, 0, "sunny", undefined, { age: "kuchh to hai" }, "0", null];
let result = arr.filter(Boolean); // boolean convert each element to true or false

console.log(result);
