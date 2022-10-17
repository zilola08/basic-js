const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let dateCheck = new Date(date)
  let month = new Date(date).getMonth() + 1
  if (date === undefined) { return "Unable to determine the time of year!" };
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) { throw new Error("Invalid date!") };

  if (month >= 12 || month < 3) { return 'winter' }
  else if (month >= 3 && month < 6) { return 'spring' }
  else if (month >= 6 && month < 9) { return 'summer' }
  else if (month >= 9 && month < 12) { return 'autumn' }

}

module.exports = {
  getSeason
};
