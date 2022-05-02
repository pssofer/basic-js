const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain : [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    if (value !== '') {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },
  
  removeLink(position) {
    if (typeof position == 'number' & position > 0 &  position <= this.chain.length & position == parseInt(position)) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
