const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength: function () { arr.push(arr.length); },
  addLink: function (value) {
    if (value === undefined) {
      this.arr.push("( )")
    } else { this.arr.push(`( ${value} )`) };
    return this
  },
  removeLink: function (position) {
    if (!position || !Number.isInteger(position) || !this.arr[position] || position <= 0 || typeof position == 'string') {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.arr.reverse();
    return this;
  },
  finishChain: function () {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }

};

module.exports = {
  chainMaker
};
