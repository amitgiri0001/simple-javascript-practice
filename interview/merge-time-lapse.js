//Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, 
//and return an array of the non-overlapping intervals that cover all the intervals in the input.

// intervals = [[1,4],[4,5]]
// [[1,5]]
// intervals = [[1,6], [4,5]] 
// [[1,6]]

// intervals = [[1,3], [4,5]]
// [[1,3], [4,5]]

// intervals = [[1,3], [3, 4], [4,5]]
// [[1,5]]

// intervals = [[1,3], [3, 4], [4,5], [7,9]]
// [[1,5], [7,9]]

// 

// [[1,3], [3, 4], [4,9]]
// min 1
// max 3
// array[0][1] = array[1][0] 
// [[1,4], [4,9]]
// 

// min 1
// max 3
// [1,3] [3, 4]
// array[0][0] < array[1][1] 
// array[0][0] < array[1][1] 


function merge(intervals) {
    let i = 0;
    while(intervals.length) {
        const first = intervals[i];
        const second = intervals[i+1];

        if(second[1] > first[1] && first[0] )
    }
}

console.log();