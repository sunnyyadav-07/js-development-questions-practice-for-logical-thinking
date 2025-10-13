
/*
  🚀 Question 7: Count vowels in a string

  🧩 Example:
  Input: Superman
  Output: 3

*/

let str = "SupermAn";
function countVowels(str) {
  let count = 0;
  for (const element of str.toLowerCase()) {
    // console.log(element);
    // if (
    //   element === "a" ||
    //   element === "e" ||
    //   element === "i" ||
    //   element === "o" ||
    //   element === "u"
    // )
    // ***OR***
    if ("aeiou".includes(element)) count++;
  }
  return count;
}
console.log(countVowels(str));
