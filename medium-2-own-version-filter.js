/*
  🚀 Question 2: Implement your own version of Array.filter().

*/
let arr = [1, 2, 3, 4, 5, 6, 7];

let ownVersionFilter = function (logic) {
  if (typeof logic !== "function") {
    throw new TypeError(logic + " is not a function");
  }
  let output = [];
  for (let i = 0; i < this.length; i++) {
    let result = logic(this[i], i, this);
    if (result) {
      output.push(this[i]);
    }
  }
  return output;
};
Array.prototype.ownFilter = ownVersionFilter;
let result1 = arr.ownFilter((el, ind, arr) => {
  return el % 2 === 0;
});

console.log(result1);
