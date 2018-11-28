'use strict'
const intfc = require('../helpers/read_interface');
const sum = require('../simple/3.sum');
console.log("Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.");

const mul = (number) => {
    let product = 1;
    for (let index = 1; index <= +number; index++) {
        product *= index;
    }
    return product;
}

const mul_or_sum = (type, number) => {
    let op;
    switch (type) {
        case 'm':
            op = mul(number)
            break;
        case 's':
            op = sum(number)
            break;
        default:
            console.log('No selection made.');
    }
    console.log(op);
}

const getInput = () => {
    intfc.question("Enter a number: ", number => {
        intfc.question("Multipy(m) or Sum(s) ? ", type => {
            mul_or_sum(type, number);
            intfc.close();
        });
        
    });
    
    
}

if(require.main == module) {
    getInput();
}