const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(garden) {
  let catsCount = 0;
  for (let ar of garden) {
    let localCount = ar.filter((el) => el === '^^').length;
    catsCount += localCount;
  }
  return catsCount;
}

module.exports = {
  countCats
};
