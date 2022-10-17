const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  let result = [];
  if (!Array.isArray(arr)) { throw new Error ("'arr' parameter must be an instance of the Array!") }
  arr.forEach((element, index, array) => {
      if (element!=='--discard-prev' && element!=='--double-prev' && element!=='--discard-next' && element!=='--double-next' && array[index-1]!=='--discard-next' && array[index+1]!=='--discard-prev') {
          result.push(element)
      }
      if(element=='--double-prev'&&array[index-2]!=='--discard-next') {
          result.push(array[index-1])
      }
      if(element=='--double-next') {
          result.push(array[index+1])
      }
  });
  
  return result.filter(x=>x!==undefined)
}

module.exports = {
  transform
};
