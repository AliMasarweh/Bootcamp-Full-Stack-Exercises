'use strict'

const objs = [
    {
        name: 'obj1',
    },
    {
        name: 'obj2',
    },
    {
        name: 'obj3',
    },
];

const objToIdMapper = new Map([[objs[0], 1], [objs[1], 2], [objs[2], 3]]);

console.log(objToIdMapper);
