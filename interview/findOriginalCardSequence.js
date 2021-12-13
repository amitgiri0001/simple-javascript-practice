// An unknown order of sequence of number cards on the hand
// 1. Pick first card on the hand and put it on the table
// 2. Pick second card on the hand and put it in the bottom of the cards on the hand
// 3. Repeat 1,2 till all cards are replaced on table

// Example:
// Original cards sequence 1, 2, 3, 4, 5, 6
// Iteration | Cards on Hand       | Cards on Table
// 0            1, 2, 3, 4, 5, 6
// 1            3, 4, 5, 6, 2       1
// 2            5, 6, 2, 4          3, 1
// 3            2, 4, 6             5, 3, 1
// 4            6, 4                2, 5, 3, 1
// 5            4                   6, 2, 5, 3, 1
// 6


// 4, 6, 2, 5, 3, 1
// Write a program to accept the output sequence of cards on the table, and return the original card sequence on hand.


const onTheTable = [4, 6, 2, 5, 3, 1];

function backToHand(numArray) {

    let inTheHand = [];
    let i = 0;
    while(i < numArray.length) {
        const fromTheTable = numArray[i];
        
        if(inTheHand.length > 0) { 
            const lastElem = inTheHand[inTheHand.length - 1];  
            inTheHand = inTheHand.slice(0, inTheHand.length - 1);
            inTheHand.unshift(lastElem); 
        }

        inTheHand.unshift(fromTheTable);
 
        i++;
    }
  // Algo
  // pop();
  // add new element to top
  // top element will to the first position of array

  console.log(inTheHand);

}

console.log(backToHand(onTheTable));


