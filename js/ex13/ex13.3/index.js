'use strict'

const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const commonFood = [];

for (const eleFood of food) {
    for (const eleFood1 of food1) {
        if(eleFood === eleFood1) {
            commonFood.push(eleFood);
            break;
        }
    }
}

console.log(commonFood);
