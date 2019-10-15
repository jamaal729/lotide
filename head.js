const assertEqual = function(actual, expected) {
  if (typeof (actual) !== typeof (expected)) {
    console.log(`❗️  Error: The actual and expected values are not of the same type`);
  } else {
    switch (typeof (actual) && typeof (expected)) {
    case "string":
      if (actual === expected) {
        console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
      }
      break;
    case "number":
      if (actual === expected) {
        console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
      }
      break;
    default:
    }
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
