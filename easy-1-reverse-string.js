/*
  🚀 Question 1: Reverse a string without using built-in methods

  🧩 Example:
  Input: sunny
  Output: ynnus
  
*/
let str = "sunny";

let str2 = "superman";
let reverseStr2 = "";
for (let i = str2.length - 1; i >= 0; i--) {
  reverseStr2 += str2[i];
}
console.log(reverseStr2);
