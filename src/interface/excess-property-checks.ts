/********  읽기전용 프로퍼티  ********/

interface SquareConfig {
    color?: string;
    width?: number;
}

function _createSquare(config: SquareConfig): {color: string; area: number} {
    // code..
    return {color: 'white', area: 100};
}

// 객체 리터럴은 변수 핟당 또는 인수 전달할 때,초과 프로퍼티 검사를 함.
// 객체 리터럴이 대상 타입(Optional property를 가진 인터페이스)을 갖고 있지 않으면 오류 발생.
//let mySqure = _createSquare({ colour: 'red', width: 100});

// 초과 프로퍼티 검사 피하려면 타입단언 사용.
let mySqure = _createSquare({width: 100, opacity: 0.5} as SquareConfig);


// 추가 프로퍼티가 있다는 게 확실한 경우, 
// 문자열 인덱스 서명을 추가하여 할당된 프로퍼티 외에 다른 프로퍼티 또한 받을 수 있게 한다.
interface FixedSquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // 문자열 인덱스 서명
}

function FixedSquareConfig(config: FixedSquareConfig): {color: string; area: number} {
    // code..
    return {color: 'white', area: 100};
}

let fixedMySqure = FixedSquareConfig({width: 100, opacity: 0.5});


// 또는 객체 리터럴이 아닌 변수를 인자로 넣는 방법.
// 객체 리터럴이 아니면 컴파일러 에러를 주지 않음.
// 이 방법은 interface와 변수에 할당된 객체 리터럴이 중복된 프로퍼티를 1개 이상 가지고 있을 경우만 사용 가능. 아니면 오류.
let squareOptions = {colour: 'white', width: 100};
let myFixedSqure = _createSquare(squareOptions);


