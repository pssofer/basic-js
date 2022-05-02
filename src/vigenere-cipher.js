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

	constructor(type) {
	  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  this.field = [];
	  this.type = type;
	  
	  for (let i = 0; i < this.alphabet.length; i += 1) {
		let row = this.alphabet.slice(i);
		row += this.alphabet.slice(0, i);
		this.field.push(row);
	  }
	}
	
	encrypt(message, key) {
	  if (!message || !key) {
		throw new Error(`Incorrect arguments!`);
	  }
	  
	  let messageArr = [];
	  message = message.toUpperCase();
	  for (let i = 0; i < message.length; i += 1) {
		if (this.alphabet.includes(message[i])) {
		  messageArr.push(message[i]);
		}
	  }
	  
	  let newKeyArr = [];
	  key = key.toUpperCase();
	  let keyCount = 0;
	  let keyLengthCount = key.length;
	  for (let i = 0; i < messageArr.length; i += 1) {
		  if(key[i]) {
			newKeyArr.push(key[i]);
		  } else {
			keyCount += 1;
			if (keyCount === keyLengthCount + 1) {
			  keyLengthCount += key.length;
			}
			newKeyArr.push(key[i - keyLengthCount]);
		  }
		}
	  
	  let encryptMessageArr = [];
	  for (let i = 0; i < messageArr.length; i += 1) {
		let row = this.alphabet.indexOf(messageArr[i]);
		let column = this.alphabet.indexOf(newKeyArr[i]);
		encryptMessageArr.push(this.field[row][column]);
	  }
	  
	  let encryptMessage = [];
	  let count = 0;
	  for (let i = 0; i < message.length; i += 1) {
		if (this.alphabet.split('').includes(message[i])) {
		  encryptMessage.push(encryptMessageArr[count]);
		  count += 1;
		} else {
		  encryptMessage.push(message[i])
		}
	  }  
		if (this.type === false) {
		  return encryptMessage.reverse().join('');
		} else {
		  return encryptMessage.join('');
		}    
	}
	
	decrypt(message, key) {
		if (!message || !key) {
		throw new Error(`Incorrect arguments!`);
	  }
	  
	  
		let messageArr = [];
		message = message.toUpperCase();
		for (let i = 0; i < message.length; i += 1) {
		  if (this.alphabet.includes(message[i])) {
			messageArr.push(message[i]);
		  }
		}
		
		let newKeyArr = [];
		key = key.toUpperCase();
		let keyCount = 0;
		let keyLengthCount = key.length;
		for (let i = 0; i < messageArr.length; i += 1) {
		  if(key[i]) {
			newKeyArr.push(key[i]);
		  } else {
			keyCount += 1;
			if (keyCount === keyLengthCount + 1) {
			  keyLengthCount += key.length;
			}
			newKeyArr.push(key[i - keyLengthCount]);
		  }
		}
		
		  
		let decryptMessageArr = [];
		for (let i = 0; i < messageArr.length; i += 1) {
		  let row = this.alphabet.indexOf(newKeyArr[i]);
		  let column = this.field[row].indexOf(messageArr[i]);
		  decryptMessageArr.push(this.alphabet[column]);
		  }
		  
		let decryptMessage = [];
		let count = 0;
		for (let i = 0; i < message.length; i += 1) {
		if (this.alphabet.split('').includes(message[i])) {
		  decryptMessage.push(decryptMessageArr[count]);
		  count += 1;
		} else {
		  decryptMessage.push(message[i])
		}
	  } 
		if (this.type === false) {
		  return decryptMessage.reverse().join('');
		} else {
		  return decryptMessage.join('');
		}
	  }
  }
  
module.exports = {
  VigenereCipheringMachine
};
