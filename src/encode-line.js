const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let count = 1;
  let result = '';
  for (i =0; i< array.length; i++){
    if(array[i] == array[i+1]){
      count ++;
    }else{
      if(count === 1) {
        result += `${array[i]}`;
      }else{
        result += `${count}${array[i]}`;
        count = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
