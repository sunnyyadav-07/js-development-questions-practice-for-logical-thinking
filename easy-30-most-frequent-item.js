/*

 🚀 Question 30: write a javascript program to find the most frequent item of an array.


  🧩 Example:
  Input: [1, 2, 3, 4, 5, 6, 2, 8, 2, 9, 2]
  Output: [2]

*/
let arr = [1, 2, 3, 4, 5, 6, 2, 8, 2, 9, 2];

function mostFrequentItem(array) {
  let occurrence = {};
  array.forEach((el) => {
    if (occurrence.hasOwnProperty(el)) {
      occurrence[el]++;
    } else {
      occurrence[el] = 1;
    }
  });
  let frequency = Object.values(occurrence);
  let maxFrequency = Math.max(...frequency);

  return Object.keys(occurrence)
    .filter((key) => occurrence[key] === maxFrequency)
    .map((item) => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return Number(item);
      }
    });
}
console.log(mostFrequentItem(arr));
