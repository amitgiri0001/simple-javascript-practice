 var N = 4;
 
    // Function to rotate the matrix 90 degree clockwise
    function rotate90Clockwise(arr) {
        // printing the matrix on the basis of
        // observations made on indices.
        for (j = 0; j < N; j++) {
            for (i = N - 1; i >= 0; i--)
                console.log(arr[i][j]);
        }
    }
 
     
        var arr = [ [ 1, 2, 3, 4 ],
                    [ 5, 6, 7, 8 ],
                    [ 9, 10, 11, 12 ],
                    [ 13, 14, 15, 16 ] ];
        rotate90Clockwise(arr);