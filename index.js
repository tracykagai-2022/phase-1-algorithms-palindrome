function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split('').reverse().join('');

  // Check if the reversed string is the same as the original string
  return reversed === str;
}

// Test the function
console.log(isPalindrome('madam')); // should print true
console.log(isPalindrome('robot')); // should print false
console.log(isPalindrome('racecar')); // should print true
console.log(isPalindrome('level')); // should print true
console.log(isPalindrome('hello')); // should print false

/*
Pseudocode:

1. Define a function called "isPalindrome" that takes in a string called "str".
2. Within the function, create a variable called "reversed" which is the result of splitting "str" into an array of characters, reversing the array, and joining the array back into a string.
3. Return the result of checking if "reversed" is equal to "str".
*/

