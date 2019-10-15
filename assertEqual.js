// FUNCTION IMPLEMENTATION
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

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

// https://stackoverflow.com/questions/53746913/why-does-console-log-log-strings-with-quotes-in-some-cases