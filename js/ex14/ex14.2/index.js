debugger;

// line 16, 7, 9

function findSmallest(a, b, c){
    // wrong relational experssion
    if (a > c && b > c){
        return c;
    } else if (b > a && c > a) {
        return a;
   } else {
    return b;
    }
}
// wrong function name
findSmallest(52,66, 2);

// I used the debugger and found that if else path it took was wrong, and the return value
