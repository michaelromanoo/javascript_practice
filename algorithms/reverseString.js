// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('apple'))
console.log(reverseString('hello'))