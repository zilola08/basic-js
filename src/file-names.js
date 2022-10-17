const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(files) {
  // throw new NotImplementedError('Not implemented');
  let obj = {};
  let c = 1;
  files.forEach(function (el, i) {
    if (files.indexOf(el) !== i) {
      c = el in obj ? obj[el] += 1 : obj[el] = 1;
      //   var k = c + 1;
      console.log(obj, c, i);
      let new_el = el + "(" + c + ")";
      files[i] = new_el;
    }
  })

  return files;

}

module.exports = {
  renameFiles
};
