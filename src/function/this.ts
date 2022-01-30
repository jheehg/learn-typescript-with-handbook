let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // return function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// 리턴되는 suit 프로퍼티의 this는 window객체 (비메서드일 경우 전역객체가 바인딩됨)이므로 오류 발생.
// * strict mode에서의 this는 undefined

// 리턴되는 함수를 화살표함수로 변경하면 this가 deck을 바인딩함. 
console.log("card: "+pickedCard.card + " of "+pickedCard.suit);



// this의 타입을 지정하기 위해 this 매개변수 주기.
// this 매개변수는 함수의 매개변수 목록에서 가장 먼저 나오는 가짜 매개변수.

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let _deck: Deck = {
    suits: [],
    cards: Array(52),
    // 아래함수에서의 this가 Deck 타입이여야 함을 명시.
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let _cardPicker = _deck.createCardPicker();
let _pickedCard = cardPicker();

console.log("card: "+pickedCard.card+" of "+pickedCard.suit);



// callback에서의 this 매개변수

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    // interface에서 this타입은 void임이라 onClickBad 함수에서 this를 사용 못함.
    // onClickBad(this: Handler, e: Event) { this.info = e.message; }
    onClickGood(this: void, e: Event) {
       console.log('clicked!');
    }
    // 여기서 만약 this를 사용하고 싶다면 화살표 함수를 사용한다.
    // 화살표함수의 단점은, 메서드일 경우 인스턴스 생성 시 Handler 프로토타입에 해당 메서드가 붙어 모든 객체와 공유하지만,
    // 화살표 함수는 각 타입 객체마다 화살표함수가 작성된다는 점임.
    onClickGood2 = (e: Event) => { this.info = e.message }

}

let h = new Handler();
uiElement.addClickListener(h.onClickGood2);
