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
  str += '';
  let result = '';
  if (typeof options.repeatTimes == 'undefined') {
    options.repeatTimes = 1;
  }
  if (typeof options.separator == 'undefined') {
    options.separator = '+';
  }
  if (typeof options.addition == 'undefined') {
    options.addition = '';
    }else{options.addition += '';}
  if (typeof options.additionRepeatTimes == 'undefined') {
    options.additionRepeatTimes = 1;
  }
  if (typeof options.additionSeparator == 'undefined') {
    options.additionSeparator = '|';
  }
  if (arguments.length == 1) {
    return str;
  }
  let additionRepeatArr = new Array(options.additionRepeatTimes);
  additionRepeatArr.fill(options.addition);
  let strRepeatArr = new Array(options.repeatTimes);
  strRepeatArr.fill(str + additionRepeatArr.join(options.additionSeparator));
  result = strRepeatArr.join(options.separator)
  return result;
}

module.exports = {
  repeater
};
