// --- Directions
// Given an integer, return an integer that is the reverse ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign() => returns sign of a number
// if number is negative => it will return -1 & vice versa
console.log('negative test', Math.sign(-15));
console.log('positive sign', Math.sign(15));

const reverseInt = (num) => {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-51));