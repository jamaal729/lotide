// const assertArraysEqual = require ('../assertArraysEqual');
// const middle = require('../middle');

// console.log("\nLotide - Implement middle");
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEqual([], middle([1]));
// assertArraysEqual([], middle([1, 2]));
// assertArraysEqual([2], middle([1, 2, 3]));
// assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
// assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));



const middle = require('../middle.js')
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 given an array [1,2,3]", () => {
    const array = [1,2,3];
    assert.deepEqual(middle(array), [2]);
  });
  it("returns [] given an array [1,2]", () => {
    const array = [1,2];
    assert.deepEqual(middle(array), []);
  });
  it("returns [] given an array [1,2,3,4,5,6]", () => {
    const array = [1,2,3,4,5,6];
    assert.deepEqual(middle(array), [3,4]);
  });

});

