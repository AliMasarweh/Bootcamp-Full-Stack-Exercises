// Undefined \n 2
// a is hoaisted but not initialized
// foo returns 2
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

// Aurelio De Rosa twice
// this in getFullName refers to prop
// and test refers to the function getFullName
// but this is refers to the global scope which doesn't contain fullName attribute
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// returns 1
// error a and b is attached to the global scope (this)
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// twice 2, last funcC definition is hoisted overrides the previous ones 
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();


// 1 & throws an error for e 
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e);

// undefined in the global scope, and 1 in the local because it has been assigned a value
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
