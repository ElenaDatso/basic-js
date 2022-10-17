const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

    const chainMaker = {
      result: [],
      getLength() {
        return this.result.split('~~').length;
      },

      addLink(val) {
        if (val == undefined && val !== null) {
          this.result.push(`()`);
        } else if (typeof val === 'object' && val !== null) {
          this.result.push(`( [object Object] )`);
        } else {
          this.result.push(`( ${val} )`);
        }

        return this;
        // remove line with error and write your code here
      },
      removeLink(i) {
        if (typeof i !== 'number' || i < 1 || i > this.result.length - 1) {
          this.result = [];
          throw new Error("You can't remove incorrect link!");
        } else {
          let index = i - 1;
          this.result.splice(index, 1);
          return this;
        }
      },
      reverseChain() {
        this.result.reverse();
        return this;
      },

      finishChain() {
        const chain = this.result;
        this.result =[];
        return chain.join('~~');
      },
    };
module.exports = {
  chainMaker
};
