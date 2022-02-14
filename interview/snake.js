// All Programming Languages
// Time Left:
// 00:00:41
// Probably all of us remember a game called Snake, where you have to eat as many apples as you can. As you may have guessed it, your task is to write a program which determines whether our snake wins the game or it ends up eating itself. Snake moves along an infinitely large board. It can turn left, right or go straight. Also, the snake - when going straight - can eat an apple under the condition that it is in front of him. If such a scenario occurs our friend extends onto a cell where the meal took place. The initial snake length is 1.

// Input
// The first line of the input contains number of tests t (t < 1001). Each of the next t lines consists of an integer n (n < 2401) and n characters describing snake's movements. Each character is one of four letters: 'L', 'R', 'F' or 'E'.

// 'L' - snake goes on the field on his left
// 'R' - snake goes right
// 'F' - snake goes on the field in front of him
// 'E' - like 'F' but with eating an apple.
// Output
// For each test you should print YES if the snake survived the current game without dying or otherwise print number of the step in which the snake bites itself.

// Example
// Input:
//         2
//         6 FLERFF
//         8 EEEELLLL
// FELRLLLREFRELREL
    
// Output:
//         YES
//         7

let currentColumn = 100;
let currentRow = 100;
let currentPositions  = [];
let fieldMatrix = new Array(200).fill(0).map(() => new Array(200).fill(0));
let screenDirection = 0; // Upwards

function reset() {
    currentColumn = 100;
    currentRow = 100;
    currentPositions  = [[currentColumn,currentRow]];
    fieldMatrix = new Array(200).fill(0).map(() => new Array(200).fill(0));
    screenDirection = 0; // Upwards
}

function findLoop(input) {
    reset();
    let i = 0;
    while(i < input.length) {
        const step = input.charAt(i);
        const moved = move(step);
        i++;

        if(!moved) return i;

    }

    return 'YES';
}

function move(step) {
    let moved = true;
    switch (step) {
        case 'F': 
            currentPositions.pop();
            moved = setCurrentPosition();
        break;
        case 'E': 
            moved = setCurrentPosition();
        break;
        case 'L': 
            currentPositions.pop();
            setDirection(step);
            moved = setCurrentPosition();
            break;
        case 'R': 
            currentPositions.pop();
            setDirection(step);
            moved = setCurrentPosition();
        break;
    }

    return moved;
}

function setCurrentPosition() {
    switch(screenDirection % 4) {
        case 0:  --currentRow; // Going upwards
        break;
        case 1 || -3:  ++currentColumn; // Going right
        break;
        case -1 || 3:  --currentColumn; // Going left
        break;
        case -2 || 2:  ++currentRow; // Going downwards
        break;
    }

    if(!isColliding()) {
        currentPositions.unshift([currentRow, currentColumn]);
        return true;
    }

    return false;
}

function isColliding() {
    const foundCollision = currentPositions.find(cp => {
        if(currentRow === cp[0] && currentColumn === cp[1]) {
            return true;
        }
    });

    if(foundCollision) 
        return true;
    else 
        return false;

}

function setDirection(action) {
    if(action === 'L') {
        screenDirection -= 1;
    }
    else {
        screenDirection += 1;
    }
}

const message = ['FLERFF', 'EEEELLLL', 'FELRLRRLLLLREFRELREL', 'FLLL'].map(findLoop);
console.log(message);