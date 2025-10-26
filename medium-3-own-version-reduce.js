/*
  🚀 Question 3: Implement your own version of Array.reduce().

*/
const ownVersionReduce = function (logic, initialValue) {
  if (typeof logic !== "function")
    throw new TypeError(logic + " is not a function");
  let output;
  let startingInd;
  if (initialValue !== undefined) {
    output = initialValue;
    startingInd = 0;
  } else {
    output = this[0];
    startingInd = 1;
  }

  for (let i = startingInd; i < this.length; i++) {
    output = logic(output, this[i], i, this);
  }
  return output;
};

Array.prototype.ownReduce = ownVersionReduce;
let arr = [1, 2, 3];
let result = arr.ownReduce((acc, curr) => {
  return acc + curr;
});
console.log(result);
