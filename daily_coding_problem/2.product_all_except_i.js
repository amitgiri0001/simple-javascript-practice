'use strict'
const intfc = require('../helpers/read_interface');
const fs = require('fs');

//TODO: finding best way to do it.

// Just good way of doing it
let new_arr = [], original_List = [];
const getProduct_except_i = (list) => {
    let new_arr = [];
    for (let index = 0; index < list.length; index++) {
        let temp_prod = 1;
        for (let j_index = 0; j_index < list.length; j_index++) {
            if(j_index !== index) temp_prod *= list[j_index];
        }
        new_arr.push(temp_prod);
    }

    return new_arr;
}

// bad way of doing it
const getProduct_except_i_rec = (list, i) => {
    let prod = 1;
    for (let index = 0; index < list.length; index++) {
        prod *= list[index];
    }
    new_arr.push(prod);
    if (i < original_List.length - 1) {
        let next = i + 1;
        getProduct_except_i_rec([...original_List.slice(0, next), ...original_List.slice(next + 1)], next);
    }
    
    return new_arr;
}

if (require.main === module) {
    //intfc.question("Enter numbers in array: ", number => {
        // Given an array of integers, return a new array such that each element at index i of the new array 
        // is the product of all the numbers in the original array except the one at i
        console.log(" [3, 2, 1] => [2, 3, 6]");
        let number = fs.readFileSync('../myOutput', 'utf8');
        number = number.trimRight();
        original_List = number.split(' ').map(v => +v);
        //original_List = [1,2,3,4,5];
        //console.log('\n Product: by recursion ', getProduct_except_i_rec([...original_List.slice(0, 0), ...original_List.slice(1)], 0));
        console.log('\n Product by loop : ', getProduct_except_i(original_List));
        intfc.close();
    //});
}