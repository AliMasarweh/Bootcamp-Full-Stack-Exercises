'use strict'

// lines 8 and 19

debugger;
function getSum(arr1, arr2){
    // should not be a const
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }

    /* Breakpoint here*/ return sum;
}
// should have a comma between two arguments
/* Breakpoint here*/ getSum([1,2,3], [5,66,23]);

// I use the debugger