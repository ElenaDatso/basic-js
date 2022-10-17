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
function transform(ar) {
  if (!Array.isArray(ar)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let ar2 = ar.slice(0);
  if (ar2.includes('--double-next')) {
    let i = ar2.indexOf('--double-next');
    let num = ar2[i + 1];
    if (!num) {
      ar2.splice(i, 1);
    } else {
      ar2.splice(i, 1, num);
    }
  }
  if (ar2.includes('--double-prev')) {
    let i = ar2.indexOf('--double-prev');
    let num = ar2[i - 1];
    if (!num) {
      ar2.splice(i, 1);
    } else {
      ar2.splice(i, 1, num);
    }
  }
  if (ar2.includes('--discard-next')) {
    let i = ar2.indexOf('--discard-next');
    let num = ar2[i + 1];
    if (!num) {
      ar2.splice(i, 1);
    } else {
      ar2.splice(i, 2);
    }
  }
  if (ar2.includes('--discard-prev')) {
    let i = ar2.indexOf('--discard-prev');
    let num = ar2[i - 1];

    if (!num) {
      ar2.splice(i, 1);
    } else {
      ar2.splice(i - 1, 1);
      ar2.splice(i - 1, 1);
    }
  }
  console.log(ar);
  return ar2;
}


module.exports = {
  transform,
};
