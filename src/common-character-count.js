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
function getCommonCharacterCount(str1, str2) {
  let ar = [];
  let ar2 = str2.split('');
  for (let l of str1) {
    if (ar2.includes(l)) {
      console.log(l);
      let i = ar2.indexOf(l);

      let out = ar2.splice(i, 1).join('');
      console.log(ar2);
      ar.push(out);
    }
  }
  return +ar.length;
}

module.exports = {
  getCommonCharacterCount
};
