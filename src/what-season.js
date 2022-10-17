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
  if (!date) return 'Unable to determine the time of year!';
  if (
    typeof date.getMonth != 'function'
  ) {
    throw Error('Invalid date!');
  }
  let winter = [0, 1, 11];
  let spring = [2, 3, 4];
  let summer = [5, 6, 7];

  return winter.includes(date.getMonth())
    ? 'winter'
    : spring.includes(date.getMonth())
    ? 'spring'
    : summer.includes(date.getMonth())
    ? 'summer'
    : 'autumn';
}

module.exports = {
  getSeason
};
