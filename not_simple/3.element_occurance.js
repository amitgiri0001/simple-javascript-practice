'use strict'
const intfc = require('../helpers/read_interface');

const check = (entry) => {
    let list = [1,2,6,3,0];
    for (let index = 0; index < list.length; index++) {
        if(list[index] == +entry) {
            return true;
        }
    }

    return false;
}

if (require.main === module) {
    intfc.question("Enter what to reverse ", entry => {
        console.log("Write a function that checks whether an element occurs in a list.");
        console.log(check(entry));
        intfc.close();
    });
}