// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const arr = ["Yo Yo", "Lighthouse", "Labs"];
// const newArr = tail(arr);
// for (let i = 0; i < newArr.length; i++) {
//   assertEqual(newArr[i], ["Lighthouse", "Labs"][i]);
// }







  
const tail = require('../tail');
const assert = require('chai').assert;

//const assertEqual = require('../assertEqual');


// const words = ["Yo Yo", "Lighthouse", "Labs"];

// const result = tail(words); // no need to capture the return value since we are not checking it

// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

describe("#tail", () => {
  it("returns 'Lighthouse' in an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });

  it("returns 'Labs' in an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words)[1], "Labs");
  });

  it("returns 2 as array length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words).length, 2);
  });
  
});
