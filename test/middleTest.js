const assertArraysEqual = require ('../assertArraysEqual');
const middle = require('../middle');

console.log("\nLotide - Implement middle");
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual([], middle([1]));
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));
