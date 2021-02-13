'use strict'

const myCountry = {
    country: 'Finland', 
    capital: 'Helsinki', 
    language: 'Finnish', 
    population: 6,
    neighbours: ['Sweden', 'Norway', 'Russia'],
    describe: function () {
        return `${this.name} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        if(this.isIsland === undefined)
            this.isIsland = this.isIsland = this.neighbours.length === 0? true: false; 
    }
};

