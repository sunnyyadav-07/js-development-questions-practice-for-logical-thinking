/*
  🚀 Question 7: Write a function to check if an object is empty.
  🧩 Example:
  
   Input: { name: "sunny", id: 45, city: "rajpura" }
   Output: false

*/
let obj = { name: "sunny", id: 45, city: "rajpura" };
function isEmptyObject(object) {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    throw new TypeError(object + " is not a valid object");
  }
  return Object.keys(object).length === 0;
}

console.log(isEmptyObject(obj));
