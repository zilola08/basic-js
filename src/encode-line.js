const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let obj = {};
  let temp = [];
  arr = str.split("");

  arr.forEach((element, index, array) => {
    if (array[index] === array[index + 1]) {
      obj[element] = (obj[element] || 1) + 1;
    }
    else if (array[index] !== array[index + 1] && array[index] !== array[index - 1]) { temp.splice(index, 0, array[index]) }
  });

  if (temp.length === 0) {
    for (let i in obj) {
      temp.splice(arr.indexOf(i), 0, obj[i] + i)
    }
  } else {
    arr.forEach((element, index, array) => {
      if (array[index] === array[index + 1]) {
        temp.splice(arr.indexOf(element), obj[element], obj[element] + element)
      }
      else if (array[index] !== array[index + 1] && array[index] !== array[index - 1]) { temp.splice(index, 1, array[index]) }
    })
  };

  return temp.join("");


}

module.exports = {
  encodeLine
};
