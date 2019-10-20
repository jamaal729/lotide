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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let next = sentence[i];
    if (next === " ") {
      continue;
    }
    if (!Object.keys(results).includes(next)) {
      results[next] = [sentence.indexOf(next)];
    } else {
      results[next].push(i);
    }
  }
  return results;
};

console.log("\nLotide - Implement letterPositions");
// console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
