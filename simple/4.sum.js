'use strict'
const intfc = require('../helpers/read_interface');


const sum = (number) => {
    let sum = 0;
    for (let index = 0; index <= +number; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            sum += index;
        }
    }
    return sum;
}

if (require.main === module) {
    intfc.question("Enter a number: ", number => {
        console.log("Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17");
        console.log(sum(number));
        intfc.close();
    });
}

module.exports = sum;