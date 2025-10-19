/*
  🚀 Question 23: Reverse words in a sentence


  🧩 Example:
  Input: I love JavaScript
  Output: JavaScript love I

*/
let sentence = "I love JavaScript";
const reverseWords = (sentence) => {
  let result = sentence.split(" ").reverse().join(" ");
  return result;
};
console.log(reverseWords(sentence));
