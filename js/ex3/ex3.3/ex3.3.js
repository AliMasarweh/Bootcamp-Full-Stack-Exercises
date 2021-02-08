'user strict'

function percentageOfWorld1(country) {
    return (country.popluation/percentageOfWorld1.worldPopulation)*100;
}

percentageOfWorld1.worldPopulation = 7900;

console.log(
    percentageOfWorld1({name: 'China', popluation:1439})
    );

console.log(
    percentageOfWorld1({name: 'Switzerland', popluation:8.5})
    );

console.log(
    percentageOfWorld1({name: 'Norway', popluation:5.3})
    );

console.log(
    percentageOfWorld1({name: 'India', popluation:1380})
    );
