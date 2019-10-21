const tail = require('../tail');
const assertEqual = require('../assertEqual');

const arr = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(arr);
for (let i = 0; i < newArr.length; i++) {
  assertEqual(newArr[i], ["Lighthouse", "Labs"][i]);
}
