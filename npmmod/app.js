



//chalk is use for use for style 

const chalk = require('chalk')
const validator = require('validator')

console.log(chalk.blue('hello world'));
console.log(chalk.red.underline.inverse('false'));


const res = validator.isEmail('hiren12@woho.com')
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));