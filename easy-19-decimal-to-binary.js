/*
  🚀 Question 19: Convert a number to binary manually.

  🧩 Example:
  Input: 5
  Output: 101 

*/
let num = 15;
function fractionDecimalToBinary(fractionDecimalNum) {
  let intPart = Math.trunc(fractionDecimalNum);
  let fractionPart = fractionDecimalNum - intPart;
  intPart = decimalToBinary(intPart);
  let result = 0;
  let fractionBits = "";
  for (let i = 1; fractionPart !== 0 && i <= 8; i++) {
    result = fractionPart * 2;
    let bit = Math.trunc(result);
    fractionBits += bit;
    fractionPart = result - bit;
  }
  if (Number(fractionBits) === 0) {
    return intPart;
  } else {
    return `${intPart}.${fractionBits}`;
  }
}
console.log(fractionDecimalToBinary(num));
function decimalToBinary(decimalNum) {
  let quotient = 0;
  let remainder = 0;
  let binary = "";
  while (decimalNum > 0) {
    quotient = Math.floor(decimalNum / 2);
    remainder = decimalNum % 2;
    binary = remainder + binary;
    decimalNum = quotient;
  }
  return binary;
}
