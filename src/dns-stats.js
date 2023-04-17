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
  let result = {};
  for(let i= 0; i < domains.length; i++){
    let domain = domains[i];
    let domainArr = domain.split(".").reverse();
    let adress = "";
    for (let j = 0; j < domainArr.length; j++){
      adress = adress + '.' + domainArr[j];
      if(result.hasOwnProperty(adress)){
        result[adress] ++;
      }else{ result[adress] = 1;}
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
