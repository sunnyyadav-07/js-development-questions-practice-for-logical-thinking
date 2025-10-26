/*
  🚀 Question 5: Implement deep clone of an object.

  🧩 Example:
   Input: obj = { name: "sunny", id: 45, address: { city: "rajpura" } }
   Output: obj2 = { name: "sunny", id: 45, address: { city: "rajpura" } }

*/
let obj = { name: "sunny", id: 45, address: { city: "rajpura" } };

// ✅ let obj2 = JSON.parse(JSON.stringify(obj));

let obj2 = structuredClone(obj);
obj2.address.city = "mumbai";
console.log(obj2);
console.log(obj);
