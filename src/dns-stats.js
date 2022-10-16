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
function getDNSStats(domains) {
  let obj = {},
    dns = [],
    one = [],
    two = [],
    three = [];

  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split(".").reverse().join(".")
    one.push(domains[i].slice(0, domains[i].indexOf(".")))
    if (domains[i].indexOf(".") !== domains[i].lastIndexOf(".")) {
      two.push(domains[i].slice(0, domains[i].lastIndexOf(".")))
      three.push(domains[i].slice(0))
    }
    else { two.push(domains[i]) }
  }
  dns.push(one, two, three)
  dns = dns.join(",").split(",")

  dns = dns.filter(x => x !== "");

  dns.forEach(
    function (value, index, array) {
      array[index] = '.' + value
    }
  )


  dns.forEach(el => {
    obj[el] = (obj[el] || 0) + 1;
  });

  return obj;

}

module.exports = {
  getDNSStats
};
