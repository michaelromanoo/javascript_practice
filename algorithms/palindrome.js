// --- Directions
// Given a string (case insensiive), return true if the string is a palindromeor false if it is not.  
// Palindromes are strings that form the same word if it is reversed. 
// *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // remove whitespace in string => only if the question asks for removing whitespace
    // const regexString = str.replace(/\s/g, '');
    // reverse the given string
    const reversedStr = str.split('').reverse().join('').toLowerCase();
    return reversedStr === str.toLowerCase();
}

console.log(palindrome('a'))
console.log(palindrome('abba'));
console.log(palindrome('Abba'));
console.log(palindrome('Madam'));
console.log(palindrome(" aba"));