var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var _deck = {
    suits: [],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var _cardPicker = _deck.createCardPicker();
var _pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = (function () {
    function Handler() {
        var _this = this;
        this.onClickGood2 = function (e) { _this.info = e.message; };
    }
    Handler.prototype.onClickGood = function (e) {
        console.log('clicked!');
    };
    return Handler;
}());
var h = new Handler();
uiElement.addClickListener(h.onClickGood2);
