const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString().split('');
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    let optionNum = ((n.slice(0, i) + n.slice(i + 1))).split(',').join('')
    console.log(i, n.slice(0, i), n.slice(i + 1), optionNum)
    if (optionNum > max) { max = optionNum; }
  }

  return parseInt(max);
}

module.exports = {
  deleteDigit
};
