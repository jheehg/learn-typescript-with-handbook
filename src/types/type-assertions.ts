// 타입 선언은 런타임에는 영향을 주지 않으며 컴파일러에만 사용됨.

let someValue: any = 'this is a string';

// angle-bracket 문법
let strLength1: number = (<string>someValue).length;

// as 문법
let strLength2: number = (someValue as string).length;