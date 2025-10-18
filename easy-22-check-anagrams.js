/*
  🚀 Question 22: Check if two strings are anagrams.


  🧩 Example:
  Input: listen , silent
  Output: anagrams 

*/
let str1 = "listen";
let str2 = "silent";
function isAnagrams(str1, str2) {
  str1 = str1.trim().toLowerCase().replaceAll(" ", "");
  str2 = str2.trim().toLowerCase().replaceAll(" ", "");
  if (str1.length !== str2.length) return "not anagrams";
  let str1Frequency = checkFrequency(str1);
  let str2Frequency = checkFrequency(str2);
  let isSameFrequency = false;
  let keys = Object.keys(str1Frequency);
  isSameFrequency = keys.every((elem) => {
    return (
      Object.hasOwn(str2Frequency, elem) &&
      str1Frequency[elem] === str2Frequency[elem]
    );
  });
  return isSameFrequency ? "anagrams" : "not anagrams";
}
console.log(isAnagrams(str1, str2));
function checkFrequency(str) {
  let occurance = {};
  for (const element of str) {
    if (Object.hasOwn(occurance, element)) {
      occurance[element]++;
    } else {
      occurance[element] = 1;
    }
  }
  return occurance;
}
