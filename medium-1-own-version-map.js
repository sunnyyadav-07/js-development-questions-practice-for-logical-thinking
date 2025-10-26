/*

 🚀 Question 1: How do you implement your own version of .map() function on arrays?

 
*/
let ownVersionMap = function (logic) {
  if (typeof logic !== "function") {
    throw new TypeError(logic + " is not a function");
  }
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]), i, this);
  }
  return output;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prototype.myMap = ownVersionMap;
let result = arr.myMap((el) => {
  return el * 2;
});
console.log(result);
