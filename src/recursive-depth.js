const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
  }

  calculateDepth(array) {
    this.count = 1;
    function arraysInside(array) {
      return array.some((x) => Array.isArray(x))
    }
    while (arraysInside(array)) {
      let flatArray = array.reduce((accum, curVal) => {
        return accum.concat(curVal)
      }, []);
      return this.count += this.calculateDepth(flatArray)
    }
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
