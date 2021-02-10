'use strict'

function percentageOfWorld1(country) {
    return (country.popluation/percentageOfWorld1.worldPopulation)*100;
}

percentageOfWorld1.worldPopulation = 7900;

function populationPercentages(popluations) {
    const percentages = [];
    for (const population of popluations) {
        percentages.push(percentageOfWorld1(population));
    }

    return percentages;
}

let popluations = [
            {name: 'China', popluation:1439}, 
            {name: 'Switzerland', popluation:8.5}, 
            {name: 'Norway', popluation:5.3}, 
            {name: 'India', popluation:1380}
        ];

console.log(populationPercentages(popluations));
