/********  읽기전용 프로퍼티  ********/

//readonly로 선언된 프로퍼티는 재할당이 안됨.
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
// p1.x = 5;  readonly 이므로 오류

// 모든 변경메서드가 제거된 ReadonlyArray<T>를 제공함.
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// 아래와 같이 배열 변경 시도는 모두 오류 발생.
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;

// 일반배열을 ReadonlyArray타입으로 재할당할 수 있지만,
// ReadonlyArray를 일반배열타입으로 재할당 불가함.
// a = ro;

// readonly타입을 바로 할당할수는 없고
// 타입 단언(타입형변환과 비슷)으로 오버라이드하는 것은 가능함.
a = ro as number[];