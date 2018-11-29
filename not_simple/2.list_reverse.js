'use strict'
const intfc = require('../helpers/read_interface');


const rev = (entry) => {
    
    // Conventional way
    
    // let revString = '';
    // for (let index = entry.length; index > 0; index--) {
    //    revString += entry[index - 1];
    // }
    // return revString;

    // Geeky not recommended way for long strings dues to stack overflow issue.
    return entry !== '' ? rev(entry.substr(1)) + entry.charAt(0) : '';
}


if (require.main === module) {
    intfc.question("Enter what to reverse ", entry => {
        console.log("Write function that reverses a list, preferably in place.");
        console.log(rev(entry));
        intfc.close();
    });
}