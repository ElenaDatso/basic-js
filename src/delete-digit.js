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
  let digitsAr = n.toString().split('');
  let toSort = [];

  for (let i = 0; i <= digitsAr.length; i++) {
    digitsAr = n.toString().split('');

    console.log(digitsAr.splice(i, 1));
    toSort.push(+digitsAr.join(''));
  }
  return toSort.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
