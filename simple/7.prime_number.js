'use strict'
const intfc = require('../helpers/read_interface');

const getAllPrimeNumbers = (ceilValue) => {
    for (let index = 1; index <= +ceilValue; index++) {
        let count = 0;
        for (let j_index = 1; j_index <= index/2; j_index++) {
           if (index % j_index == 0) {
               count++;

               if(count > 1) {
                break;
               }
           }
        }

        if(count == 1) {
            console.log(index);
        }
    }
}

if (require.main === module) {
    console.log(`Write a program that prints all prime numbers`);
    intfc.question("Enter a number till the prime numbers needed: ", number => {
        getAllPrimeNumbers(number);
        intfc.close();
    });
}