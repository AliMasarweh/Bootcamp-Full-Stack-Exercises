'use strict';

let x = 'a string';
console.log(typeof(x));

x = 10101;
console.log(typeof(x));

x = { first: 'nevermind'};
console.log(typeof(x));

x = true;
console.log(typeof(x));

x = null;
console.log(typeof(x));

x = undefined;
console.log(typeof(x));

x = Symbol('new symbol');
console.log(typeof(x));
