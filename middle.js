const middle = function(arr) {
  let middle = [];
  let index;
  if (0 <= arr.length && arr.length <= 2) {
    middle = [];
  } else {
    index = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      middle[0] = arr[index - 1];
      middle[1] = arr[index];
    } else {
      middle[0] = arr[index];
    }
  }
  return middle;
};

module.exports = middle;
