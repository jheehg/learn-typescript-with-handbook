let suits = ['hearts','spades','clubs','diamonds'];

function pickCard(x: any): any {
    if(typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if(typeof x == 'number') {
        let pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{suit: 'diamonds', card:2},
              {suit: 'spades', card: 10},
              {suit: 'heards', card: 4}];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: '+pickedCard1.card + ' of '+pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log('card: '+pickedCard2.card + ' of '+pickedCard2.suit);


// 여기서 사용된 pickCard 함수는 사용자가 넣는 파라미터 타입에 따라 다른 리턴값을 반환함.
// 아래와 같이 예상할 수 있는 파라미터와 리턴값 타입을 오버로드 목록에 명시해주면
// 오버로드 목록에 명시되지 않은 다른 타입으로 함수를 호출했을 때 오류가 발생한다.
// 여기서 파라미터와 리턴타입이 any인 함수는 오버로드 목록에 포함되지 않음.

function pickCardOverload(x: {suit: string; card: number;}[]): number;
function pickCardOverload(x: number): {suit: string; card: number;};
function pickCardOverload(x: any): any {
    if(typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if(typeof x == 'number') {
        let pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck2 = [{suit: 'diamonds', card:2},
              {suit: 'spades', card: 10},
              {suit: 'heards', card: 4}];
let pickedCard3 = myDeck2[pickCard(myDeck2)];
console.log('card: '+pickedCard3.card + ' of '+pickedCard3.suit);

let pickedCard4 = pickCard(15);
console.log('card: '+pickedCard4.card + ' of '+pickedCard4.suit);