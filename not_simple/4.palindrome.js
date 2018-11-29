'use strict'
const intfc = require('../helpers/read_interface');

const palindromeCheck = (entry) => {
    for (let index = 0; index < entry.length / 2; index++) {
        if (entry[index] != entry[entry.length - index -1]) {
            return false;
        }
    }
    return true;
}


const cleanText = (entry) => {
    return entry.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase();
}

if (require.main === module) {
    intfc.question("Enter what to reverse ", entry => {
        console.log("Write function that reverses a list, preferably in place.");
        console.log(palindromeCheck(cleanText(entry)));
        intfc.close();
    });
}