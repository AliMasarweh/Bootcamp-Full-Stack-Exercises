'use strict'

function steps(n) {
    const step = '#';
    for (let index = 0; index < n; index++) {
        const line = [];
        for (let j = 0; j < index+1; j++) {
            line.push(step);
        }

        for (let j = index+1; j < n; j++) {
            line.push(' ');
        }
        // console.log(`${step.repeat(index+1)}${' '.repeat(n-index-1)}`);
        console.log(line.join(''));
    }
}

steps(5);
