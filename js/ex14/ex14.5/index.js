debugger;

function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
            // must assign the variable a new value each time occurance is encountered
            counter += 1 ;
        }
    }
    return counter ;
}
countOccurrences ( "ini mini miny moe" , "n" );

