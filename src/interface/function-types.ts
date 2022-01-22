/********  함수 타입  ********/

// 인터페이스 함수 타입은 아래와 같이 선언
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// 매개변수 이름은 꼭 인터페이스와 동일하지 않아도 됨.
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// 이미 인터페이스로 매개변수 타입과 리턴타입이 지정이 되어 있으므로
// 아래와 같이 생략해도 됨.
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 아래와 같이 리턴 타입 다르면 오류 발생 

// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return "string";
// }

