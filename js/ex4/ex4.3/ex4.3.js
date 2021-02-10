function avg(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });

    return sum/numbers.length;
}

function printWinner(scoresOfTeam1, scoresOfTeam2) {
    let avg1 = avg(scoresOfTeam1),
        avg2 = avg(scoresOfTeam2);
    let ans = avg1 < avg2? 1: avg1===avg2? 0: -1; 
    if(avg1 === avg2)
        console.log("A draw!");
    else if(avg1 > avg2)
        console.log(`First team wins with average of ${avg1} points!`);
    else 
        console.log(`Second team wins with average of ${avg2} points!`);

    return ans;
}

printWinner([ 89, 120, 103], [116, 94, 123])
printWinner([ 122, 112, 99], [116, 94, 123])
printWinner([ 122, 112, 115], [116, 94, 123])