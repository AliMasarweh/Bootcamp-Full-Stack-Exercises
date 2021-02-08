/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
const welcome = () => {
    return 'Welcome to Appleseeds Bootcamp!';
}

const power = a => Math.pow(a, 2);

console.log(welcome());
console.log(power(10));

// From function expressions to IIFE functions.
console.log((function (a) { 
    return Math.sqrt(a);
})(4)
);


console.log((function (a, b)  { 
    return Math.random() * (a - b) + b;
})(10, 100)
);
