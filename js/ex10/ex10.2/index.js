'use strict'

function mapByForEach(arr, callBack) {
    const ret = [];
    arr.forEach((element, index, array) => ret.push(callBack(element, index, array)));

    return ret;
}

function mapWrapper(arr, callBack) {
    return arr.map((element, index, array) => callBack(element, index, array));
}

function filterFactory(filterCallBack) {
    function filter(arr) {
        const ret = [];
        for (let i = 0; i < arr.length; ++i) {
            if(filterCallBack(arr[i], i, arr))
                ret.push(arr[i]);
        }

        return ret;
    }

    return filter;
}

const doubleValue = (val, index, array) => val*2;
const onlyEvenValue = (val, index, array) => val%2===0;
const showFirstAndLast = (val, index, array) => index===0 || index == array.length-1;
const toStringCallBack = (val, index, array) => `${val}`;
const lowerCaseCallBack = (val, index, array) => val.toLowerCase();
const capitalizeCallBack = (val, index, array) => val.toUpperCase();

// const shiftLetterCallBack = (val, index, array) =>
//     String.fromCharCode(
//         (val < 'a' || val > 'z') && (val < 'A' || val > 'Z') && val.charCodeAt(0)
//         || ((val == 'a' || val == 'A') && val.charCodeAt(0) + 25) 
//         || val.charCodeAt(0)-1
//     );

// const swapLetterCallBack = (val, index, array) =>
//     String.fromCharCode(
//         (val < 'a' || val > 'z') && (val < 'A' || val > 'Z') && val.charCodeAt(0)
//         || ((val >= 'a' && val <= 'A') && val.charCodeAt(0) - 32) 
//         || val.charCodeAt(0) + 32
//     );


function stringManipulationCallBack(filter, condition, filtertedVal, conditionVal, defaultVal) {
    return (val, index, array) => String.fromCharCode(
        (filter(val) && val.charCodeAt(0) + filtertedVal)
        || (condition(val) && val.charCodeAt(0) + conditionVal) 
        || val.charCodeAt(0) + defaultVal
    );      
}


function counterCallBack(counter) {
    function arrayElementCounter(arr) {
        for (const iterator of arr) {
            if(iterator in counter)
                ++counter[iterator];
        }

        return counter;
    }

    return arrayElementCounter;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('mapByForEach: ', mapByForEach(arr1, doubleValue));
console.log('mapWrapper: ', mapWrapper(arr1, doubleValue), '\n');

const onlyEvenValues = filterFactory(onlyEvenValue);
console.log('onlyEvenValues filter: ', onlyEvenValues(arr1), '\n');

const showFirstAndLastVals = filterFactory(showFirstAndLast);
console.log('mapByForEach showFirstAndLastVals filter: ', mapByForEach(showFirstAndLastVals(arr1), toStringCallBack));
console.log('mapWrapper showFirstAndLastVals filter: ', mapWrapper(showFirstAndLastVals(arr1), toStringCallBack), '\n');

let vowelsCounter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
};

let vowelsCounterCallBack = counterCallBack(vowelsCounter);
const str = 'aaa fdsxv AA ee EEE gfdds OOO ooo xyz UIiu';
console.log('mapByForEach vowels counter: ', vowelsCounterCallBack(mapByForEach(str.split(''), lowerCaseCallBack)));

vowelsCounter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
};
vowelsCounterCallBack = counterCallBack(vowelsCounter);

console.log('mapWrapper vowels counter: ', vowelsCounterCallBack(mapWrapper(str.split(''), lowerCaseCallBack)), '\n');


console.log('mapByForEach capitalize: ', mapByForEach(str.split(''), capitalizeCallBack).join(''));
console.log('mapWrapper capitalize: ', mapWrapper(str.split(''), capitalizeCallBack).join(''), '\n');


const isNotCharFilter = val => (val < 'a' || val > 'z') && (val < 'A' || val > 'Z');
const isA =  val => (val == 'a' || val == 'A');
const isSmallLetter = val => (val >= 'a' && val <= 'z');

const shiftLetterCallBack = stringManipulationCallBack(isNotCharFilter, isA, 0, 25, -1);
console.log('mapByForEach shiftLetters: ', mapByForEach(str.split(''), shiftLetterCallBack).join(''));
console.log('mapWrapper shiftLetters: ', mapWrapper(str.split(''), shiftLetterCallBack).join(''), '\n');

const swapCaseCallBack = stringManipulationCallBack(isNotCharFilter, isSmallLetter, 0, -32, 32);
console.log(str);
console.log('mapByForEach swapCase: ', mapByForEach(str.split(''), swapCaseCallBack).join(''));
console.log('mapWrapper swapCase: ', mapWrapper(str.split(''), swapCaseCallBack).join(''), '\n');


