function boomingFunction(number, digit = 7) {
    for(let i = 1; i <= number; ++i) 
        if(i%digit == 0 && (i+'').includes(digit+'')){
            process.stdout.write('BOOM-BOOM ');
        }
        else if(i%digit == 0) {
            process.stdout.write('BOOM ');
        } else {
            process.stdout.write(i+" ");
        }
}

boomingFunction(70);