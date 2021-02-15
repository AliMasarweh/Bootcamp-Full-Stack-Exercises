'use strict'
function filterPropsOfObject(obj, props) {
    const ret = {};
    for (const prop of props) {
        ret[prop] = obj[prop];
    }

    return ret;
}

function filterPropertiesForEach(objArr, properties) {
    const ret = [];
    objArr.forEach(element => ret.push(filterPropsOfObject(element, properties)));

    return ret;
}

function filterPropertiesMap(objArr, properties) {
    return objArr.map(element => filterPropsOfObject(element, properties));;
}

const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
];

const props = ['id'];
console.log(filterPropertiesForEach(newReleases, props));
console.log(filterPropertiesMap(newReleases, props));
