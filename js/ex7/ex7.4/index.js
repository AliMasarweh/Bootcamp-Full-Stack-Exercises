'use strict'

const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200,
};

function getCandy(candyStore, id){
    //your code
    for(const candy of candyStore) {
        if(candy.id === id)
            return candy;
    }

    return null;
}

function getPrice(candyStore, id){
    //your code
    const candy = getCandy(candyStore, id);
    return candy? candy.price: null;
} 

function addCandy(candyStore, id, name, price, amount=1){
    //your code
    const candy = {
        id,
        name,
        price,
        amount
    };
    candyStore.candies.push(candy);
}

function buy(candyStore, id, amount=1){
    const candy = getCandy(candyStore, id);
    const ret = Math.min(candy.amount, amount);

    candy.amount -= amount;

    return ret;
}
