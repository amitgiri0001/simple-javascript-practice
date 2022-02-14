# Sorts

## Selection sort
Select what should be there in the array positions incrementally. 

if given `[4,2,1]` then "find and set what should be there in array[0], array[1]"

Time complexity in best, avg, worst: O(n^2)

```
arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64 
```

## Insertion sort
Insert the value by finding it's position in the left side of sorted array.

if given  `[4,2,1]` then "starting from array[1] find position of 2 on the left side of the array"

Time complexity:
Best: Ω(n) Avg: θ(n^2)  Worst: O(n^2)

**Benefits** 
- When array is already sorted. Because it skip inner loop if previous element it smaller already.


# Bubble sort
Swap values in every j iteration if smaller value in right

if given  `[4,2,1]` then "swap 2 and 4 in fist j iteration and so on"

Time complexity:
Best: Ω(n) Avg: θ(n^2)  Worst: O(n^2)

# Heap Sort
Make a max heap and let it reshuffle with lower values in decremental order see example:

if given `[ 5, 12, 11, 13, 4, 6, 7 ]`
```
                          5(i)
                        /      \
                     12         11
                 (2 * i + 1)  (2 * i + 1)
                   /    \      /    \
                 13      4    6      7
```

Makes max heap tree: 
```
                          13(i)
                        /      \
                     12         11
                 (2 * i + 1)  (2 * i + 1)
                   /    \      /    \
                 5      4     6      7
```

loop i-- to Swap first and last and maintain max heap
```
i = length-1;
init: [ 13, 12, 11, 5, 4, 6, 7 ]
0: [ **7**, 12, 11, 5, 4, 6, **13** ] <-- swap[0][i] i--  | max heap -->  [12, 7, 11, 5, 4, 6, 13]
1: [ **6**, 7, 11, 5, 4, **12**, 13 ] <-- swap[0][i] i-- | max heap -->  [11, 7, 6, 5, 4, 12, 13]
```

**Benefits**
- O(n log(n)) all the time
- Better then merge sort (Space O(n)) coz of lesser space complexity.
- Better than quick sort for worst case O(n^2) scenarios.

**Bad for**
- Not so good for big data sort unlike merge sort
- Merge sort outperforms heap sort in most of the practical situations. https://en.wikipedia.org/wiki/Heapsort#Comparison_with_other_sorts 

# Quick sort
Partitions the array with a pivot so that the pivot reaches to it's final position leaving left partition and right partition to repeat the same. 
The process goes on until start < end.

**Benefits**
- Better use it to sort Array compared to Merge sort because of lesser space complexity.
  
**Bad for**
- Quick sort needs indexed data (like in array) so linked list sorting is better done in Merge Sort where random index access is lesser and sequential data access is only needed.
- Worst case scenarios is O(n^2) else O(n log(n))

# Merge sort
Split array in half recursively start = end and merge every 2 sorted list to have whole list sorted.

**Benefits**
- O(n log(n)) all the time
- Better sorting algorithm for linked list
- Fast with extra space complexity
- Good for "external sorting" with big amount of data (more than RAM side) due to it's new array nature.
  ```
  The data can be sorted using external sorting which uses merging technique. This can be done as follows: 1. Divide the data into 10 groups each of size 100. 2. Sort each group and write them to disk. 3. Load 10 items from each group into main memory. 4. Output the smallest item from the main memory to disk. Load the next item from the group whose item was chosen. 5. Loop step #4 until all items are not outputted. The step 3-5 is called as merging technique.
  ```
  
**Bad for**
- Small set of data. Slow because of new memory allocation and de-allocation. 
- Extra space
- Not good for sorted array. It goes through the process anyways. 

