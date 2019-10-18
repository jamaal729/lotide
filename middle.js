const eqArrays = function(arr1, arr2) {
  let equal;
  if (arr1.length !== arr2.length) {
    equal = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        equal = false;
        break;
      }
    }
    equal = true;
  }
  return equal;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(arr) {
  let middle = [];
  let index;
  if (0 <= arr.length && arr.length <= 2) {
    middle = [];
  } else {
    index = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      middle[0] = arr[index - 1];
      middle[1] = arr[index];
    } else {
      middle[0] = arr[index];
    }
  }
  return middle;
};

console.log("\nLotide - Implement middle");
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log();
assertArraysEqual([], middle([1]));
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));
