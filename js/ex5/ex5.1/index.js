'use strict'

function countryToLiveIn(language, isIsland, population, country) {
    const countries = [
        {language: 'Finnish' , isIsland: false, population: 5.518, country: 'Finland'},
        {language: 'Icelandic' , isIsland: true, population: 0.356, country: 'Iceland'},
        {language: 'Japanese' , isIsland: true, population: 126.3, country: 'Japan'}
    ]

    const ans = false;
    for (const cntry of countries) {
        if(cntry.country === country && cntry.isIsland === isIsland && cntry.language === language 
                && cntry.population === population)
                ans = true;
    } 

    if(cntry)
        console.log(`You should live in ${country}`);
    else 
        console.log(`${country} does not meet your criteria`);
}
