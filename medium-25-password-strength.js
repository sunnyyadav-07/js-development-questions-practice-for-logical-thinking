/*
🚀 Question 25:   Make a password strength checker.

  
*/
const userPassword = document.querySelector("input");
const checkBtn = document.querySelector("button");
const passwordRuleDesc = document.querySelector("ul");
const copyIcon = document.querySelector("i");
let str = "abHcdE@%55";
const upperCasesChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCasesChars = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_-/+=?><,.';:`~";
const numbers = "0123456789";
userPassword.focus();
function strongPasswordRule(str) {
  let pass = str.trim();
  let upperCaseScore = 0;
  let lowerCaseScore = 0;
  let symbolScore = 0;
  let charScore = 0;
  let numberScore = 0;
  if (pass.length >= 5 && pass.length <= 8) {
    charScore += 10;
  } else if (pass.length > 8 && pass.length <= 13) {
    charScore += 20;
  } else if (str.length >= 14) {
    charScore += 30;
  }
  if (upperCasesChars.split("").some((ch) => pass.includes(ch))) {
    upperCaseScore += 10;
  }
  if (lowerCasesChars.split("").some((ch) => pass.includes(ch))) {
    lowerCaseScore += 10;
  }
  if (numbers.split("").some((ch) => pass.includes(ch))) {
    numberScore += 10;
  }
  if (symbols.split("").some((ch) => pass.includes(ch))) {
    symbolScore += 15;
  }

  let totalScore =
    charScore + numberScore + upperCaseScore + lowerCaseScore + symbolScore;
  let isRepeating = hasRepeatedChars(pass);
  let isInSequence = hasSequentialPatteren(pass);
  if (isRepeating) {
    totalScore -= 20;
  }
  if (isInSequence) {
    totalScore -= 20;
  }

  if (totalScore > 0 && totalScore <= 30) {
    return "weak";
  }
  if (totalScore >= 30 && totalScore <= 55) {
    return "medium";
  }
  if (totalScore >= 55 && totalScore <= 100) {
    return "strong";
  }
}
//  checking repeatition of chars
function hasRepeatedChars(str) {
  return /(.)\1{2,}/.test(str);
}

// checking a sequence pattern
function hasSequentialPatteren(str) {
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length - 2; i++) {
    let chunks = lower.slice(i, i + 3);
    // forword chars
    if (lowerCasesChars.includes(chunks)) return true;
    // reverse chars
    if (lowerCasesChars.split("").reverse().join("").includes(chunks))
      return true;
    // forword number
    if (numbers.includes(chunks)) return true;
    // reverse number
    if (numbers.split("").reverse().join("").includes(chunks)) return;
  }
  return false;
}

userPassword.addEventListener("input", checkPasswordStrength);
function checkPasswordStrength() {
  let password = userPassword.value.trim();
  passwordRuleDesc.style.visibility = "hidden";
  if (password === "") {
    userPassword.style.outline = "none";
    passwordRuleDesc.style.visibility = "unset";

    return;
  }

  let output = strongPasswordRule(password);
  if (output === "weak") {
    userPassword.style.outline = "3px solid red";
  } else if (output === "medium") {
    userPassword.style.outline = "3px solid orange";
  } else if (output === "strong") {
    userPassword.style.outline = "3px solid green";
  }
}
copyIcon.addEventListener("click", () => {
  if (!userPassword.value) return;
  navigator.clipboard.writeText(userPassword.value.trim());
  userPassword.value = "";
  userPassword.style.outline = "none";
  passwordRuleDesc.style.visibility = "unset";
  alert("copied successfully!");
});
