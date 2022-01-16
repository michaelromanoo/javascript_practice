// TODO: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// input: integer, output: string
// e.g. 42 => even

function even_or_odd(num) {
  return num % 2 ? "Even" : "Odd";
}

console.log(even_or_odd(7));
console.log(even_or_odd(42));
console.log(even_or_odd(0));
