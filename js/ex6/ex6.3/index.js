'use strict'

function itemsToLength(array) {
    return array.map(x=>x.length);
}

function itemsToLength2(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].length;   
    }

    return array;
}

console.log(itemsToLength(["boo", "doooo", "hoo","ro"] ));
console.log(itemsToLength2(["boo", "doooo", "hoo","ro"] ));