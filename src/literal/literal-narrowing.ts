// var, let으로 선언할 경우 변경될 가능성이 있음을 컴파일러에게 알림.
// const는 변경되지 않음.
// 무수한 문자열 값의 잠재적 케이스를 줄여나가는 것(let/var const로 선언함으로써)을 타입 좁히기(Narrowing) 라고 한다.


const helloWorld = "hello world";
let hiWorld = "Hi! world";