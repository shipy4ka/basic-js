const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result:[],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    value += '';
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position < this.result.length + 1 && position > 0) {
      this.result.splice(position - 1, 1);
    } else {
      this.result.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let rejoin = '( ' + this.result.join(' )~~( ') +' )';
    this.result.length = 0;
    return rejoin;
  }
};

module.exports = {
  chainMaker
};
