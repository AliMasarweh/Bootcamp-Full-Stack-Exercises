'use strict'

const book1 = {
    name: 'book 1', 
    author: 'author 1',
    year: 2001,
};

const book2 = {
    name: 'book 2', 
    author: 'author 2',
    year: 2002,
};

const bookUtils = {};

bookUtils.getFirstPublished = function(book1, book2) {
    if(book1.year <= book2.year)
        return book1;
    return book2;
}

bookUtils.setNewEdition = function(book, latestEdition) {
    book.latestEdition = latestEdition;
}

bookUtils.setLanguage = function(book, language) {
    book.language = language;
}

bookUtils.setTranslation = function(book, language, translator) {
    book.translatio = {
        language, 
        translator,
    };
}

bookUtils.setPublisher = function(book, name, location) {
    book.puplisher = {
        name, 
        location,
    };
}

bookUtils.isSamePublisher = function(book1, book2) {
    return book1.puplisher.name === book2.puplisher.name;
}
