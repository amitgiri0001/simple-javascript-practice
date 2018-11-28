'use strict'
const intfc = require('../helpers/read_interface');

const findLargest = (arrayNumbers) => {
    let max = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        // Swapping way
        // if(arrayNumbers[index] > arrayNumbers[index + 1]) {
        //     console.log(`${arrayNumbers[index + 1]} <==> ${arrayNumbers[index]}`)
        //     let temp = arrayNumbers[index + 1];
        //     arrayNumbers[index + 1] = arrayNumbers[index];
        //     arrayNumbers[index] = temp;
        // }

        // The more better/easy way
        if (arrayNumbers[index] > max) {
            max = arrayNumbers[index];
        }

        console.log(arrayNumbers);
    }

    // 4,3,2,1
    // 3,4,2,1
    // 3,2,4,1
    // 3,2,1,4

    return max;
}

if (require.main === module) {
    intfc.question("Enter numbers: ", number => {
        console.log("Write a function that returns the largest element in a list.");
        number = number.split(',').map(v => +v);
        console.log('\n Max number: ' ,findLargest(number));
        intfc.close();
    });
}
