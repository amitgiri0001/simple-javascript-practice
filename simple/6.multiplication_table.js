'use strict'
const intfc = require('../helpers/read_interface');

const printTable = (number) => {
    for (let index = 1; index <= +number; index++) {
        console.log(`\n Multiplication tabe for ${index} \n`);
       for (let j_index = 1; j_index <= 10; j_index++) {
           console.log(`${index} * ${j_index} = ${index * j_index}`);
       }
        
    }
}

if (require.main === module) {
    intfc.question("Enter a number till the table needed: ", number => {
        console.log(`Write a program that prints a multiplication table for numbers up to ${number}`);
        printTable(number);
        intfc.close();
    });
}