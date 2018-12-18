'use strict'
const intfc = require('../helpers/read_interface');

const concat = (list1, list2) => {
    for (let index = 0; index < list2.length; index++) {
        list1.push(list2[index]);
    }
    return list1;
}

const concat_js = (list1, list2) => {
//   list1.push.apply(list1, list2);
//     ^ is not acting  ^ this one does here . so the actuall way to write it should be as below.
    // return list1;
    // OR
    Array.prototype.push.apply(list1, list2);
    return list1;
}

if (require.main == module) {
    intfc.question("Enter list-1 : ", list1 => {
        intfc.question("Enter list-2 : ", list2 => {
            intfc.close();
            console.log(concat(list1.split(','), list2.split(',')));
            console.log(concat_js(list1.split(','), list2.split(',')));
            
        });
    });


}