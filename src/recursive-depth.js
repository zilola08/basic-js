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
    this.count = 1;
  }
  
  calculateDepth(array) {
  throw new NotImplementedError('Not implemented');
    let oneLevelCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            oneLevelCount++;
            if (oneLevelCount > 1) { oneLevelCount-- }
            this.calculateDepth(array[i])
        }
    }
    this.count += oneLevelCount;
    return this.count;
}
}

module.exports = {
  DepthCalculator
};
