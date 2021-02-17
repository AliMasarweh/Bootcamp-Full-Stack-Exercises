'use strict'

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];

for (const neighboursList of listOfNeighbours) {
    for (const neighbour of neighboursList) {
        console.log(`Neighbour: ${neighbour}`);
    }
}
