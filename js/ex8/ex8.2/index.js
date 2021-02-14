'use strict'

const obj = {};
const map = new Map();

const maxCount = 10**6;
console.time("Object timing");// <---- Starts the timer
for(let i =0; i < maxCount; i++){
//Perform the operation to be measured multiple times
    obj[i] = i;
}
console.timeEnd("Object timing"); // <---- Stops the time

console.time("Map timing");// <---- Starts the timer
for(let i =0; i < maxCount; i++){
//Perform the operation to be measured multiple times
    map.set(i, i);
}
console.timeEnd("Map timing"); // <---- Stops the time

// Obj is faster
console.log();


console.time("Object get member timing");
for(let i =0; i < maxCount; i++){
    const index = Math.floor(Math.random() * Math.floor(maxCount));
    obj[index];
}
console.timeEnd("Object get member timing");

console.time("Map get member timing");
for(let i =0; i < maxCount; i++){
    const index = Math.floor(Math.random() * Math.floor(maxCount));
    map.get(index);
}
console.timeEnd("Map get member timing");

// Obj is faster
console.log();


console.time("Object add one member timing");
obj[maxCount+1] = maxCount+1;
console.timeEnd("Object add one member timing");

console.time("Map add one member member timing");
map.set(maxCount+1, maxCount+1);
console.timeEnd("Map add one member member timing");

// Map is faster in adding a single member
console.log();
const index = Math.floor(Math.random() * Math.floor(maxCount));

console.time("Object remove one member timing");
delete obj[index];
console.timeEnd("Object remove one member timing");

console.time("Map remove one member member timing");
map.delete(index);
console.timeEnd("Map remove one member member timing");

// Map is faster in deleting a single member.
