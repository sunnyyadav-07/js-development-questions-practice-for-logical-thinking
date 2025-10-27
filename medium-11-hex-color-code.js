/*
  🚀 Question 11: Generate random hex color codes.

   
*/
function randomHexColorCodes() {
  // let random = Math.floor(Math.random() * 16);
  let hexColorRange = "0123456789abcdef";
  let hexColorCode = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    hexColorCode += hexColorRange[random];
  }
  return hexColorCode;
}

let color = randomHexColorCodes();
console.log(`Generated color : %c${color}`, `color:${color}`);
