// const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
