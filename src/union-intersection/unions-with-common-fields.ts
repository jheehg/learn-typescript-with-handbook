// 유니언 타입의 리턴 값이 있을 경우,
// 모든 타입의 공통인 필드 또는 메서드에만 접근이 가능하다.

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

// 공통 메서드
pet.layEggs();

// Bird에는 없는 메서드이므로 아래 코드는 오류.
// pet.swim();

