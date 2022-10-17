const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ar = str.split('');
  let result = [];
  for (let i = 0; i < ar.length; i++) {
    console.log(i);
    if (ar[i] !== ar[i + 1]) {
      ar[i] = ar[i] + '!';
    }
  }
  let splited = ar.join('').split('!');
  let encoded = [];
  for (let l of splited) {
    if (l && l.length > 1) {
      encoded.push(l.length + l[0]);
    } else if (l && l.length === 1) {
      encoded.push(l[0]);
    }
  }
  return encoded.join('');
}

module.exports = {
  encodeLine
};
