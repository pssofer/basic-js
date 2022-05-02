const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(array) {
  let domains = {};
  let res = array.map((el) => el.split('.').reverse());
  res.forEach((subarr) => {
    let item = '';
    for (let i = 0; i < subarr.length; i += 1) {
      item += `.${subarr[i]}`;
      if (!domains.hasOwnProperty(item)) {
        domains[item] = 1;
      } else {
        domains[item] += 1;
      }
    }
  })
  return domains;
}

module.exports = {
  getDNSStats
};
