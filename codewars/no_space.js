// TODO: Simple, remove the spaces from the string, then return the resultant string.

function no_space(str) {
  // use regexp to replace whitespaces
  return str.replace(/[\s]/g, "");
}

console.log(no_space("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(no_space("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
