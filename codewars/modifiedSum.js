// TODO: You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
//
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
// input: array, num
// output: num

function modifiedSum(arr, n) {
  let sumToTheNth = arr
    .map((num) => num ** n)
    .reduce((acc, curr) => acc + curr, 0);
  let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
  return sumToTheNth - sumArr;
}

console.log(modifiedSum([1, 2, 3], 3));
console.log(modifiedSum([1, 2], 5));
