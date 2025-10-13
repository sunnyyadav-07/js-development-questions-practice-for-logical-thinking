/*
  🚀 Question 7: Check if a string is a palindrome

  Palindrome: reverse of any string or number = actual string or number.

  🧩 Example:
  Input: madam
  Output: palindrome

*/

let str = "madam";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
let result = str === reverseStr ? "palindrome" : "not palindrome";
console.log(result);
