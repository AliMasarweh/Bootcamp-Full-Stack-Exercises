'use strict'

const len = 10;
const arr = new Array(len);

for(let i = 0; i < len; i++){
    arr[i] = i+1;
}

const summer = (a,b) => a+b;
const evenFilter = (a) => a%2 === 0;
const normalize = (a, i, arr) => a/arr.length;

console.log(arr.reduce(summer, 0));

console.log(arr.filter(evenFilter).reduce(summer, 0));

console.log(arr.reduce(summer, 0)/arr.length);

console.log(arr.map(normalize).reduce(summer, 0));