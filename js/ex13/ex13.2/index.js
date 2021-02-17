// function itemsToLength(array) {
//     for (let index = 0; index < array.length; index++) {
//         array[index] = array[index].length;   
//     }

//     return array;
// }

function itemsToLength(array) {
    let index = 0;
    while (index < array.length) {
        array[index] = array[index].length; 
        index++  
    }

    return array;
}

console.log(itemsToLength(["boo", "doooo", "hoo","ro"] ));

// for is more concise and while should be use in cases the number of iterations are unkown
