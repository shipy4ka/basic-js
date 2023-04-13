const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if(arr.length === 0){
    return [];
  }

  let include = (el) => (el === "--discard-next" || el === "--discard-prev" || el === "--double-next" || el === "--double-prev");
  if(arr.some(include) === false){
    return arr;
  }

  let newArr = [...arr];
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === "--discard-next"){
      newArr[i + 1] = "delte";
      i++;
    }
    if(newArr[i] === "--discard-prev"){
      newArr[i-1] = "delte";
    }
    if(newArr[i] === "--double-next" && newArr[i + 1]){
      newArr[i] = newArr[i + 1];
      i++;
    }
    if(newArr[i] === "--double-prev" &&  newArr[i-1]){
      newArr[i] = newArr[i - 1];
    }
  }
  const result = newArr.filter(item => {
    return item !== "--discard-next" && item !== "--discard-prev" && item !== "--double-prev" && item !== "--double-next"&& item !== "delte";
  });
  return result;
}

module.exports = {
  transform
};
