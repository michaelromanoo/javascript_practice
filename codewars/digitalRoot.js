// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

function digitalRoot(num) {
  let result = num
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reduce((acc, curr) => acc + curr, 0);
  // check result length => if result has one digit, return number. else continue reducing number until it reaches a single digit
  return result.toString().length == 1 ? result : digitalRoot(result);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
