'user strict'

console.log('in browser')
result = window.prompt('How many siblings do you have?');

if(result === 1) {
    console.log('1 sibling!');
} else if(result > 1) {
    console.log('More than 1 sibling');
} else {
    console.log('No siblings');
}
