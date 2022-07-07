// interface Bird {
//   fly(): void;
//   layEggs(): void;
// }

// interface Fish {
//   swim(): void;
//   layEggs(): void;
// }

// declare function getSmallPet(): Fish | Bird;

// let pet = getSmallPet();

//* 만약 공통메서드를 제외한 메서드에 접근하고 싶다면 타입 단언으로 지정해주기.
(pet as Fish).swim();
(pet as Bird).fly();

//* 타입 단언을 메서드호출 시 마다 사용하지 않고 타입 가드 메서드를 활용하기.
//* 타입 서술어 : parameterName is Type 형태로 사용하고 parameterName은 반드시 현재 함수의 매개변수 이름이여야 한다.
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//* in 연산자 사용하기
if ("swim" in pet) {
  pet.swim();
} else {
  pet.fly();
}

//* typeof 타입 가드 사용
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function isString_(x: number | string): x is string {
  return typeof x === "string";
}

console.log(isString_(3));

//* instanceof 연산자 사용

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingpadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  const value: number = Math.floor(Math.random() * 5); // 0 ~ 4
  return value > 2 ? new SpaceRepeatingpadder(value) : new StringPadder(" ");
}

let padder: Padder = getRandomPadder();
let resultPaddingString = padder.getPaddingString();

if (padder instanceof SpaceRepeatingpadder) {
  console.log("타입은 SpaceRepeatingpadder 로 좁혀집니다.");
} else {
  console.log("타입은 StringPadder 로 좁혀집니다.");
}
