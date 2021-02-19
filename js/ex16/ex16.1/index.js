// result is 5, becuase otherFunction returns b,
// not defined in it's own scope so it searches in the upper scope
// also not defined, so its the global var
// b = 1 but re-assigned to b = 5 once we call the wrapper function
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;

    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

console.log(result)

// reuslt is 1
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);

// log 3 times 3, because after a few milli seconds, the iterations will be compelte
// and i is equal to 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}