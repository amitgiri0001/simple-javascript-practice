'use strict'

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
const intfc = require('../helpers/read_interface');

const sum = (number) => {
    let sum = 0;
    for (let index = 0; index <= +number; index++) {
        sum += index;
    }
    return sum;
}

// Checks wether the file is running diectly or loaded as module
if (require.main === module) {
    intfc.question('Enter a number: ', number => {
        console.log(sum(number));
        intfc.close();
    });
}

module.exports = sum;