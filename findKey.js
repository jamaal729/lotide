const findKey = function(obj, callback) {

  let result;

  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value["stars"]}`);
    if (callback(value)) {
      console.log(value["stars"]);
      result = key;
      break;
    }
  }

  console.log(result);
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyResult =
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2); // => "noma"

assertEqual(findKeyResult, "noma");
