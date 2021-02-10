'use strict'

let people = ["Greg", "Mary", "Devon", "James"];

console.log('Iterate through this array and console.log all of the people');
for (const person of people) {
    console.log(person)
}

console.log('\nRemove "Greg" from the array.')
console.log(people.slice(0, people.indexOf('Greg')) + people.slice(people.indexOf('Greg')+1));

console.log('\nRemove "James" from the array.')
console.log(people.slice(0, people.indexOf('James')) + people.slice(people.indexOf('James')+1));

console.log('\nAdd "Matt" to  the array.')
console.log(['Matt', ...people]);

console.log('\nAdd "Ali" to  the array.')
console.log([...people, 'Ali']);

console.log('\nMake a copy of the array using slice.\nThe copyshould NOT include "Mary" or "Matt"')
console.log([...people.slice(0 , people.indexOf('Mary')), ...people.slice(people.indexOf('Mary')+1)]);

console.log('\nGives the indexOf where "Mary" is located')
console.log(people.indexOf('Mary'));

console.log('\nGives the indexOf where "Foo" is located')
console.log(people.indexOf('Foo'));

console.log('\nRemove "Devon" from the array and add "Elizabeth" and "Artie"')
console.log(people = [...people.splice(0,people.indexOf('Devon')), 'Elizabeth', 'Artie', ...people.splice(people.indexOf('Devon')+1)]);

console.log('\nVariable called withBob equal to the people array concatenated with the string of "Bob')
console.log(people.slice().join('Bob ').split(' '));
