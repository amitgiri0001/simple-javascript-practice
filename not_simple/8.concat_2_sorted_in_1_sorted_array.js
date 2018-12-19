'use strict'
const intfc = require('../helpers/read_interface');

// Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]
// Indirectly this example is the half portion of 'Merge sort'
const concat = (list1, list2) => {
    let list3 = [];
    
    // Loop till either of the list gets over, hence cant do swapping
    while (list1.length && list2.length) {
        console.log(`Comparing among ==>`, list1[0], list2[0]);
        // Get the small value of either of the list value at first index
        // and push at the end if the new list
        // and remove the element from list
        if (list1[0] > list2[0]) {
            list3.push(list2[0]);
            list2.shift();
        }
        else {
            list3.push(list1[0]);
            list1.shift();
        }
    }

    // Since we are pushing only small elem in new list.
    // chnaces of elem remain in either of list is there
    // if any, push all at the end of the new list, coz all will be surely bigger than the value already pushed in new list in above loop
    if (list1.length) {
        console.log(`remaining in list1 ==> `, list1);
        
        Array.prototype.push.apply(list3, list1);
    }

    if (list2.length) {
        console.log(`remaining in list2 ==> `, list2);
        Array.prototype.push.apply(list3, list2);
    }

    // Example:

    // Enter list-1 : 1,3,4
    // Enter list-2 : 2,5,6
    // Comparing among ==> 1 2
    // Comparing among ==> 3 2
    // Comparing among ==> 3 5
    // Comparing among ==> 4 5
    // remaining in list2 ==>  [ 5, 6 ]
    // [ 1, 2, 3, 4, 5, 6 ]

    return list3;
}


if (require.main == module) {
    intfc.question("Enter list-1 : ", list1 => {
        intfc.question("Enter list-2 : ", list2 => {
            intfc.close();
            console.log(concat(list1.split(',').map(v => +v), list2.split(',').map(v => +v)));
        });
    });
}