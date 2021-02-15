'use strict'

const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];


console.log(data.map(element => element.name));

console.log(data.filter(element => new Date(element.birthday).getFullYear() < 1990));

const foodCounter = {};

data.forEach(element => {
    for (const food of element.favoriteFoods.meats) {
        (food in foodCounter && ++foodCounter[food]) || (foodCounter[food] = 1); 
    }

    for (const food of element.favoriteFoods.fish) {
        (food in foodCounter && ++foodCounter[food]) || (foodCounter[food] = 1); 
    }
});

console.log(foodCounter);
