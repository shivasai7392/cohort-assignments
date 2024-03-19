/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"])
  let ans = 0;
  str.toLowerCase().split("").forEach(element => {
    if (vowels.has(element)){
      ans += 1;
    }
  });
  return ans;
}

// console.log(countVowels("countVowels"))

module.exports = countVowels;