const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let count = [0];
    for (let n = i + 1; n < names.length; n++) {
      if (names.indexOf(names[i], n) > 0) {
        count.push(names.indexOf(names[i], n));
        console.log(count);
      }
    }

    if (count.length > 0) {
      for (let i = 1; i < count.length; i++) {
        names[count[i]] = names[count[i]] + `(${count.indexOf(count[i])})`;
        if (count[i] >= count.length - 1) {
          count = [0];
        }
      }
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
