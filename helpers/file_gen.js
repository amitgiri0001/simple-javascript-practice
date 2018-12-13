'use strict'
const intfc = require('../helpers/read_interface');
const fs = require('fs');

const generateNumbers = ([start, end, repeat]) => {
    let wstream = fs.createWriteStream('../myOutput', 'utf8');
    wstream.on('finish', function () {
        console.log('file has been written');
    });
    
    while (repeat --> 0) {
        //console.log(repeat, repeat);
        let i = end;
        while (i --> start) {
            console.log(i);
            wstream.write(`${i} `);
        }
    }
    
    wstream.end();

}


if (require.main === module) {
    intfc.question('start,end ? ', number => {
        generateNumbers(number.split(',').map(v => +v));
        intfc.close();
    });
}