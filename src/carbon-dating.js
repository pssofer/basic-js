const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(argument) {
  let res;
  if (typeof argument == 'string') {
    let num = parseFloat(argument);
    res = Math.log(MODERN_ACTIVITY / num) / (Math.log(2) / HALF_LIFE_PERIOD);
  }
  if (Math.ceil(res) > 0 & Math.ceil(res) != 'Infinity') {
    return Math.ceil(res);
  } else {
    return false;
  }
}




module.exports = {
  dateSample
};
