'use strict'

function validatePassIfElseFunc(password) {
    if(password.length > 7)
        return "Strong";
    return "Weak";
}

function validatePassTrenaryFunc(password) {
    return password.length > 7? "Strong" : "Weak";
}

function validatePassLogicalAndFunc(password) {
    return (password.length > 7 && "Strong" || "Weak");
}

function advancedPassValidetorTrenary(password) {
    return password.length > 7 && /[A-Z]/.test(password)? "Very Strong":
    password.length >= 7? "Strong": "Weak";
}

function advancedPassValidetor(password) {
    return (password.length > 7 && /[A-Z]/.test(password) && "Very Strong"
            || password.length >= 7 && "Strong"
            || "Weak");
}


const weakPass = "123";
const veryStrongPass = "LAvz72lAkd^&";

console.log('\n/******* validatePassIfElseFunc *******\\');
console.log(validatePassIfElseFunc(weakPass));
console.log(validatePassIfElseFunc(veryStrongPass));

console.log('\n/******* validatePassTrenaryFunc *******\\');
console.log(validatePassTrenaryFunc(weakPass));
console.log(validatePassTrenaryFunc(veryStrongPass));

console.log('\n/******* validatePassLogicalAndFunc *******\\');
console.log(validatePassLogicalAndFunc(weakPass));
console.log(validatePassLogicalAndFunc(veryStrongPass));

const stronPass = "1234567";

console.log('\n/******* advancedPassValidetor *******\\');
console.log(advancedPassValidetor(weakPass));
console.log(advancedPassValidetor(stronPass));
console.log(advancedPassValidetor(veryStrongPass));

console.log('\n/******* advancedPassValidetorTrenary *******\\');
console.log(advancedPassValidetorTrenary(weakPass));
console.log(advancedPassValidetorTrenary(stronPass));
console.log(advancedPassValidetorTrenary(veryStrongPass));
