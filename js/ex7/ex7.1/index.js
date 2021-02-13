'use strict'

function bookDetails(book) {
    return `The book ${book.name} was written by ${book.author.name} in the year ${book.publishingyYear}`
}

const Book = {
    name: 'Surrounded by Idiots',
    edition: 1,
    author: {
        name: 'Thomas Erikson',
    },
    publishingyYear: 2019,
    bestsellersRank: 303281,
}

console.log(bookDetails(Book))
