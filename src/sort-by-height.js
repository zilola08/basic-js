const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  // throw new NotImplementedError('Not implemented');
  let copy = array.slice().filter(x => x > 0).sort((a, b) => a - b)
  array.forEach(function (el, i) {
    if (el === -1) { copy.splice(i, 0, el) }
  })
  return copy;

}

module.exports = {
  sortByHeight
};
