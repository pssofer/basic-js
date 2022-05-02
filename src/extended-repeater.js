const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let arr = [];
  let addition = options.hasOwnProperty('addition')
    ? String(options.addition)
    : '';
  let counter = options.repeatTimes || 1;
  let innerCounter = options.additionRepeatTimes;
  let separator = options.separator || '+';
  let innerSeparator = options.additionSeparator  || '|';

  for (let i = 0; i < counter; i++) {
    const innerArr = [];

    for (let j = 0; j < innerCounter; j++) {
      innerArr.push(addition);
    }

    arr.push(str + (innerCounter ? innerArr.join(innerSeparator) : addition));
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
