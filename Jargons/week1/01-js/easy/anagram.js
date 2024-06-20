/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// str1 = "silent";
// str2 = "listen";
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let x = str1.split("").sort().join("");
  let y = str2.split("").sort().join("");
  let result = x == y;
  // console.log(x);
  // console.log(y);
  // console.log(result);
  return result;
}
isAnagram(str1, str2);
module.exports = isAnagram;
