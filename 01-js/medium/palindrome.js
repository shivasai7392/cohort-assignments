/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  console.log(str)
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(str)
  const n = str.length
  let i = 0
  let j = n-1
    while ( i <= j){
      if (str[i] !== str[j]){
        return false;
      }
      i += 1;
      j -= 1;
    }
  return true;
}
// console.log(isPalindrome('Able, was I ere I saw Elba!'));

module.exports = isPalindrome;
