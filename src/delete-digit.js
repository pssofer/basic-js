const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxNumber = 0;
  for (let i = 1; i < n; i *= 10) {
    maxNumber = Math.max(parseInt(n / 10 / i) * i + n % i, maxNumber)
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
