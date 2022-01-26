// 함수 타입 (Function Types)

// 함수의 타이핑 (Typing the function)
// return문을 보고 리턴타입을 파악할 수 있으므로 반환 타입 생략도 가능.
// 기명 함수
function add(x: number, y: number): number {
    return x + y;
}

// 익명 함수
let myAdd = function(x: number, y:number): number { return x + y };


// 함수 타입 작성하기 (Writing the function type)
// 함수가 저장될 myAdd2에 함수의 파라미터 타입과 리턴타입 명시하기.
let myAdd2: (x: number, y: number) => number = 
    function(x: number, y: number): number { return x + y; };



// 타입의 추론 (Inferring the types)
// 타입스크립트 컴파일러는 방정식의 한쪽만 타입이 있더라도 반대편의 타입을 추론할 수 있다.
let myAdd3: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y };

