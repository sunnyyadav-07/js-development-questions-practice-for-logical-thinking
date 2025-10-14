/*
  🚀 Question 7: Check if a number is prime.

  🧩 Example:
  Input: 5
  Output: prime

*/
let number = 7;
function isPrime(num) {
  let condition = Math.sqrt(num);
  console.log(condition);
  if (num === 1 || num === 0) return "not prime";
  if (num == 2 || num == 3) return "prime";
  for (let i = 2; i <= condition; i++) {
    if (num % i == 0) return "not prime";
  }
  return "prime";
}
console.log(isPrime(number));
