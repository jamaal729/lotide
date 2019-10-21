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


const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arrSize = newArr.length;
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        // newArr.push(arr[i][j]);
        newArr[arrSize++] = arr[i][j];
      }
    } else {
      // newArr.push(arr[i]);
      newArr[arrSize++] = arr[i];
    }
  }
  return newArr;
};

console.log("\nLotide - Implement flatten");
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
