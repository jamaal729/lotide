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

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const arr = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(arr);
for (let i = 0; i < newArr.length; i++) {
  assertEqual(newArr[i], ["Lighthouse", "Labs"][i]);
}
