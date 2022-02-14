function minimumDistance (array, x, y) {
    let i = 0;
    let xPos = null;
    let yPos = null;
    let minDistance = array.length;

    while(i <= array.length) {
        if(array[i] === x) {
         xPos = i;
        }

        if(array[i] === y) {
            yPos = i;
        }

        if(xPos != null && yPos != null) {
            const distance = xPos - yPos;

            if(minDistance > Math.abs(distance)) {
                minDistance =  Math.abs(distance);
            }
        }

        i++;
    }

    return minDistance;
}

console.log(minimumDistance([1,2], 1, 2));// 1
console.log(minimumDistance([3, 4, 5], 3, 5));// 2
console.log(minimumDistance([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6));// 4
console.log(minimumDistance([2, 5, 3, 5, 4, 4, 2, 3], 3, 2)); // 1




