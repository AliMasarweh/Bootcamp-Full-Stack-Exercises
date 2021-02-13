'use srtict'

function countLetters(words) {
    const ret = {};

    for (const word of words) {
        word = word.toLowerCase();
        for (const char of word) {
            if(!ret[`${char}`])
                ret[`${char}`] = 0;
            ++ret[`${char}`];
        }
    }
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
