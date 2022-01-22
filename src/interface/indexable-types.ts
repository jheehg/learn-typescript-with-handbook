/********  인덱서블 타입  ********/

// 인터페이스 프로퍼티를 인덱스로 기술하는 방법.
// 인덱스 서명을 지원하는 타입 : string, number
// "숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위타입이어야 한다."
// 이유는, number로 인덱싱 할 때, javascript는 인덱싱 하기전에 이를 string으로 변환하기 때문임.

// 아래와 같이 사용하면 배열 리터럴 할당이 가능하다.
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];


class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// x의 리턴타입 Animal이 y의 리턴타입 Dog의 하위타입이 아니므로 오류.
interface NotOkay {
   // [x: number]: Animal;
    [y: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string;  : name타입은 인덱서의 하위타입이 아님.
}

 // 인덱스 시그니처가 프로퍼티 타입들의 합집합이라면 다른 타입의 프로퍼티도 허용 가능.
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

// 인덱스 시그니처 또한 readonly로 선언 가능.
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myStringArray: ReadonlyStringArray = ['Alice', 'Bob'];
// myStringArray[2] = 'Mallory'; 오류 