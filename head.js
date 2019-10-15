const assertEqual = function(actual, expected) {
  if (typeof (actual) !== typeof (expected)) {
    console.log(`❗️  Error: The actual and expected values are not of the same type`);
  } else {
    if (actual === expected) {
      console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");