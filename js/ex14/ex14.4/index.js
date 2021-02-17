debugger;

// line 7 and 12

function calcAverage (arr){
    // needs to initialize
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    // must divide by the length
    return sum/arr.length;
}
calcAverage ([ 85 , 90 , 92 ]);
