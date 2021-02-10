'use strict'

const arrayOfSameObject = new Array(100);
arrayOfSameObject.fill(1);

console.log(arrayOfSameObject);

const range = Array.from({length: 100}, (v, k) => k+1);
console.log(range);

const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
    key7: 'value7',
    key8: 'value8',
}

console.log(Object.keys(obj).map(k => obj[k]));

const rangeObj = {...range.slice(0, 11)};
console.log(rangeObj);

function isAnArray(array) {
    if(!Array.isArray(array))
        return 'Not an array';
    return 'An array';
}

console.log(isAnArray(range));
console.log(isAnArray(rangeObj));

const shallowCopy = arrayOfSameObject;
const deepCopy = [...arrayOfSameObject];
