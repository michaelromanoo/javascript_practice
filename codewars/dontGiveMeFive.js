// TODO: In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

// input: start number, end number
// output: integer

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end) {
  // use regex to find all numbers that has a 5
  let regex = /[5]/gi;
  let result = [];
  for (let i = start; i <= end; i++) {
    if (!regex.test(i)) {
      result.push(i);
    }
  }
  return result.length;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
