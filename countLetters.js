const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  const obj = {};
  for (let l of letters) {
    if (l === " ") {
      continue;
    }
    if (!Object.keys(obj).includes(l)) {
      obj[l] = 1;
    } else {
      obj[l]++;
    }
  }
  return obj;
};

console.log("\nLotide - Implement countLetters");
console.log(countLetters("light"));
console.log(countLetters("llight"));
console.log(countLetters("lighthouse in the house"));
