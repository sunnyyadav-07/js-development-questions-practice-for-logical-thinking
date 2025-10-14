/*
  🚀 Question 10:  Generate Fibonacci series up to n terms.


  🧩 Example:
  Input: 5
  Output: 0, 1, 1, 2, 3

*/
let terms = 7;
let a = 0,
  b = 1;
for (let i = 0; i < terms; i++) {
  console.log(a);
  let nextTerm = a + b;
  b = a;
  a = nextTerm;
}
