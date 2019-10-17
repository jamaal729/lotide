const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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
      equal = true;
    }
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


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(['g', 'c', 't', 'm', 't'], map(["ground", "control", "to", "major", "tom"], word => word[0]));

assertArraysEqual(['d', 'l', 'o', 'r', 'm'], map(["ground", "control", "to", "major", "tom"], word => word[word.length - 1]));

assertArraysEqual(['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot'], map(["ground", "control", "to", "major", "tom"], word => word.split("").reverse().join("")));
