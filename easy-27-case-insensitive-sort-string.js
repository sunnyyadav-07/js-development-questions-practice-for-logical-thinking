/*
  🚀 Question 27: Write a javascript function that returns a passed string with letters in alphabetical order.


  🧩 Example:
  Input:1234
  Output: 10 

*/
let str = "jaVaScript";

/* 

  if i simply use sort() method , it did not give the right output, because it works according to unicode value, so that to make it case-insenitive i used a callBackFunction   

 */

let result = str.split("").sort((a, b) => {
  return a.localeCompare(b, undefined, { sensitivity: "base" });
});
console.log(result);
