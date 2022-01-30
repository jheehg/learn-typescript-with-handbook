// 나머지 매개변수는 선택적 매개변수들의 수를 무한으로 취급.
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

// 함수타입에도 사용 가능.
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));
