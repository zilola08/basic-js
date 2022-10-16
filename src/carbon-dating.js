const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) return false;
  sampleActivityNumber = parseFloat(sampleActivity);
  let modernActivity = 15; let k = Math.log(2) / 5730;
  if (sampleActivityNumber > modernActivity || sampleActivityNumber == 0 || sampleActivityNumber < 0 || !sampleActivityNumber) {
    return false;
  } else {
    let time = Math.ceil((Math.log(modernActivity / sampleActivityNumber)) / k);
    return time;
  }
}

module.exports = {
  dateSample
};
