// TODO: Complete the solution so that it reverses the string passed into it.
// e.g., 'world'  =>  'dlrow'
// e.g, 'word'   =>  'drow'
// input: string, output: string

function reversed_string(str) {
  return str.split("").reverse().join("");
}

console.log(reversed_string("world"));
console.log(reversed_string("hello"));
console.log(reversed_string("word"));
