function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  Define a function named isPalindrome that takes in a string str
Create a variable named reversed and assign to it the result of calling str split with an empty string, reverse, and join with an empty string
Return the result of comparing reversed to str

*/

/*
  Add written explanation of your solution here
  Write a function that takes in a string and returns true if the string is a palindrome, meaning it is the same forwards and backwards.

Write Your Own Test Cases:

Input: "mom"
Expected: true

Input: "tacocat"
Expected : true

Input: "awesome"
Expected: false
*/
/* what i understood in code form
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  function isPalindrome(str) {
    // Reverse the input string
    const reversed = str.split('').reverse().join('');
  
    // Compare the reversed string to the original input string
    return reversed === str;
  }
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  function isPalindrome(str) {
  // Reverse the input string
  var reversed = str.split('').reverse().join('');

  // Compare the reversed string to the original input string
  return reversed == str;
}

}

module.exports = isPalindrome;
