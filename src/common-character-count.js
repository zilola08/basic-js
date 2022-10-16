const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  count = 0;
  s1 = s1.split("").sort((a, b) => a.localeCompare(b));
  s2 = s2.split("").sort((a, b) => a.localeCompare(b));

  if (s1.length === s2.length) {
    for (let i = 0; i < s1.length; i++) {
      if (s1.includes(s2[i])) {
        count++;
        console.log(s2, s2[i], count)
        s1.splice(i, 1)
      }
    }
    return count;
  }

  else {
    for (let i = 0; i < s2.length; i++) {
      if (s2.includes(s1[i])) {
        count++;
        s2.splice(i, 1)
      }
    }
    return count;
  }
}

module.exports = {
  getCommonCharacterCount
};
