function padLeft(value:string, padding:any) {
    if(typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}.`);
}

console.log(padLeft("Hello, world", 2));

// 위와 같이 파라미터 padding을 any타입으로 넣을 경우
// string, number이외의 타입도 받아들이므로 결국 오류가 발생된다.
// any타입 대신에 유니언 타입을 매개변수 padding에 사용할 수 있다.
// 유니언 타입은 여러 타입 중 하나가 될 수 있는 값을 의미.

function padLeftUnion(value:string, padding:string | number) {
    if(typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}.`);
}

// 타입에 맞지 않는 값을 넣을 수 없음.
// console.log(padLeftUnion("Hello, world", true);