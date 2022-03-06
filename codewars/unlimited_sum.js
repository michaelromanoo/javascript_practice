// TODO: Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.
// The function should reject any arguments that are not integers, and sum the remaining integers.

// input: multiple data types
// output: integer

// sum(1, 2, 3)   // -> 6
// sum(1, "2", 3) // -> 4

// spread multiple arguments into one array
function unlimited_sum(...arg) {
  // filter out non integers from array & return sum
  return [...arg]
    .filter((item) => typeof item === "number" && item % 1 == 0)
    .reduce((acc, curr) => acc + curr);
}

console.log(unlimited_sum(1, 2, 3));
console.log(unlimited_sum(1, "2", 3));
console.log(unlimited_sum(1, 11, 111));
console.log(unlimited_sum(4, true, 4, "A", 4, "99"));
