/*
  🚀 Question 29: write a javascript program to shuffle an array.


  🧩 Example:
  Input: [1, 2, 3, 4, 5, 6]
  Output: [ 1, 5, 4, 3, 6, 2 ] can be any order

*/
let arr = [1, 2, 3, 4, 5, 6];
function shuffleTheArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
console.log(shuffleTheArray(arr));
