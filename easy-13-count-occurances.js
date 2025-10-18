/*
  🚀 Question 13: Count occurrences of each element in an array.

  🧩 Example:
  Input: [1, 3, 1, 2, 5, 6, 3]
  Output: 1:2 ,3:2 ,2:1 , 5:1 , 6:1  

*/
let arr = [1, 3, 1, 2, 5, 6, 3];
let occurrences = {};

arr.forEach((elem) => {
  if (occurrences.hasOwnProperty(elem)) {
    occurrences[elem]++;
  } else {
    occurrences[elem] = 1;
  }
});
console.log(occurrences);
