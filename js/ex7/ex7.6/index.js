'use strict'

function swapPropertiesAndValues(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
      ret[obj[key]] = key;
    });
    return ret;
}

const aplhabetToNumbs = {A : 1, B : 2, C : 3, D : 4};

console.log(swapPropertiesAndValues(aplhabetToNumbs));
