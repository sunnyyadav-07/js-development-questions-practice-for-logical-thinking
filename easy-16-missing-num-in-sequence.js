/*
  🚀 Question 16: Find missing number in a sequence (1 to n).

  🧩 Example:
  Input: [1, 3, 1, 2, 5, 6, 3]
  Output: 1:2 ,3:2 ,2:1 , 5:1 , 6:1  

*/
let lastNum = 10;
let seqOfNum = [1, 3, 6, 7, 8, 9];
let missingNumbers = [];
for (let i = 1; i <= lastNum; i++) {
  if (!seqOfNum.includes(i)) missingNumbers.push(i);
}
console.log(missingNumbers);
