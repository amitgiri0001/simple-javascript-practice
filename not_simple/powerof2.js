const powerOf2 = (number) => {
    return Number.isInteger(Math.log2(number));
}

const array = [3, 4];
const newArray = [];

const check = () => {
    array.forEach(val => {
        if(powerOf2(val)) {
            newArray.push(1);
        }
        else {
            newArray.push(0)
        }
    });
}

check();
console.log(newArray);