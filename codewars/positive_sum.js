// TODO: You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// input: array, output: integer

function positiveSum(arr) {
  return arr.filter((num) => num >= 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
