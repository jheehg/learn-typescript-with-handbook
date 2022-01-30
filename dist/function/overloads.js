var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'heards', card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
function pickCardOverload(x) {
    if (typeof x == 'object') {
        var pickedCard_2 = Math.floor(Math.random() * x.length);
        return pickedCard_2;
    }
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck2 = [{ suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'heards', card: 4 }];
var pickedCard3 = myDeck2[pickCard(myDeck2)];
console.log('card: ' + pickedCard3.card + ' of ' + pickedCard3.suit);
var pickedCard4 = pickCard(15);
console.log('card: ' + pickedCard4.card + ' of ' + pickedCard4.suit);
