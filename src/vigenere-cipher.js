const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(arg) {
    this.reverse = arg == false ? true : false;
  }

  encrypt(str, key) {

    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!')

    function charIsLetter(char) {
      if (typeof char !== 'string') {
        return false;
      }
      return char.toLowerCase() !== char.toUpperCase();
    }

    console.log(str, key)
    key = key.toLowerCase().split("");
    let strOrig = str;
    str = str.toLowerCase().split("").filter(x => charIsLetter(x))
    console.log(str)
    let encrypted = [];

    if (key.length > str.length) {
      key = key.slice(0, str.length)
    }

    if (str.length > key.length) {
      let diff = str.length - key.length;
      for (let i = 0; i < diff; i++) {
        key.push(key[i % (key.length)])
      }
    }


    for (let i = 0; i < key.length; i++) {
      let index = ((((str[i].charCodeAt() - 97) + (key[i].charCodeAt() - 97)) % 26) + 65);
      encrypted.push(String.fromCharCode(index));
    }

    for (let i = 0; i < strOrig.length; i++) {
      if (!charIsLetter(strOrig[i])) { encrypted.splice(i, 0, strOrig[i]) }
      // else if(str[i]=="!"){encrypted.splice(strOrig.indexOf(str[i]),1,str[i]);
      // }
    }

    if (this.reverse === false) {
      return (encrypted).join("")
    } else {
      return (encrypted).reverse().join("")
    }

    return this;
  }

  decrypt(str, key) {

    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!')


    function charIsLetter(char) {
      if (typeof char !== 'string') {
        return false;
      }
      return char.toLowerCase() !== char.toUpperCase();
    }

    key = key.toLowerCase().split("");
    let strOrig = str;
    str = str.split("").filter(x => charIsLetter(x))
    let decrypted = [];

    if (key.length > str.length) {
      key = key.slice(0, str.length)
    }

    if (str.length > key.length) {
      let diff = str.length - key.length;
      for (let i = 0; i < diff; i++) {
        key.push(key[i % (key.length)])
      }
    }

    for (let i = 0; i < key.length; i++) {
      let index = ((((str[i].charCodeAt() - 65) - (key[i].charCodeAt() - 97))) + 65);
      if ((index - 65) < 0) { index += 26 }
      decrypted.push(String.fromCharCode(index));
    }

    for (let i = 0; i < strOrig.length; i++) {
      if (!charIsLetter(strOrig[i])) { decrypted.splice(i, 0, strOrig[i]) }
    }

    if (this.reverse === false) {
      return decrypted.join("")
    } else {
      return decrypted.reverse().join("")
    }

    return this;
  }
}

module.exports = {
  VigenereCipheringMachine
};
