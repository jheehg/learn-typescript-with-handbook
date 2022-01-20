// Array
let list1: number[] = [1, 2, 3];   
// generic array type: Array<elemType>
let list2: Array<number> = [1, 2, 3];


// Tuple
// 요소의 "타입"과 "개수"가 고정된 배열 표현
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];  타입이 잘못되었으므로 오류.

console.log(x[0].substring(1));
//console.log(x[2].substring(1)); // string 타입이 아니므로 오류.

//x[3] = 'world'; 정해진 인덱스에 더 추가하면 오류 발생.