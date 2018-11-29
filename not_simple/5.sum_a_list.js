'use strict'
const intfc = require('../helpers/read_interface');

let list = [1,2,3,4,5]

const sumWhile = () => {
    let total = 0;
    while (list.length) {
        total += list.splice(0, 1)[0];
    }
    return total;
}

const sumRecursive = (list) => {
    // 1st way
    //return list.length ? list.splice(0, 1)[0] + sumRecursive(list) : 0;
    // 2nd way
    return list.length === 0 ? 0 : list[0] + sumRecursive(list.slice(1));
}

const sum = (type) => {
    switch (type) {
        case 'r':
            return sumRecursive(list);
        case 'w':
            return sumWhile();
    }
}

if (require.main === module) {
    intfc.question("Enter type: ", type => {
        console.log("Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)");
        console.log('\n Total: ' ,sum(type));
        intfc.close();
    });
}