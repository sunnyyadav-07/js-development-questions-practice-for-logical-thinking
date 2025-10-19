/*
  🚀 Question 28: Write a Javascript function that accepts a string as a parameter and conversts the first
letter of each word of the string in upper case.


  🧩 Example:
  Input:hello my name is sunny
  Output: Hello My Name Is Sunny 

*/
let str = "hello my name is sunny";
function capitalizeEachLetterOfString(string) {
  let output = string
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((el) => {
      let result = el[0].toUpperCase() + el.slice(1);
      return result;
    })
    .join(" ");
  return output;
}
console.log(capitalizeEachLetterOfString(str));
console.log(!!"");
