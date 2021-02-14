'use strict'

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort((a,b) => b.localeCompare(a)));

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];

console.log();
console.log(foodsWithUpperCase.sort((a,b) => a.localeCompare(b, undefined, { sensitivity: 'accent' })));
console.log(foodsWithUpperCase.sort((a,b) => b.localeCompare(a, undefined, { sensitivity: 'accent' })));

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];
console.log();
console.log(foodsWithUpperCase.sort((a,b) => b.length - a.length));
