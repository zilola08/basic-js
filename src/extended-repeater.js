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
function repeater(str, options = {
  repeatTimes: 0,
  addition: '',
  additionRepeatTimes: 0,
}) {

  const objWithSpecificCoercion = {
    [Symbol.toPrimitive](objWithSpecificCoercion) {
      return objWithSpecificCoercion = objWithSpecificCoercion => objWithSpecificCoercion !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
    }
  }

  if (options.separator === undefined) {
    options.separator = '+'
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }

  if (typeof str !== 'string' || typeof options.addition !== 'string') {
    str = `${str}`;
    if (options.addition !== undefined) {
      options.addition = `${options.addition}`
    }
  }
  let arr = [];

  if (options.additionRepeatTimes && options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      let add = [];
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.addition !== undefined) {
          add.push(options.addition)
        }
      }
      let rep = str.concat(add.join(`${options.additionSeparator}`));
      arr.push(rep);
    }
    return arr.join(`${options.separator}`);
  }

  else if (options.repeatTimes && !options.additionRepeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      let add = [];
      add.push(str)
      if (options.addition !== undefined) { add.push(options.addition) }
      arr.push(add.join(""))
    }
    return arr.join(`${options.separator}`);
  }

  else if (!options.repeatTimes && !options.additionRepeatTimes) {
    arr.push(str);
    arr.push(options.addition);
    return arr.join("")
  }
}

module.exports = {
  repeater
};
