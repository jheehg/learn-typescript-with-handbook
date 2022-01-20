// 절대 발생할 수 없는 타입을 나타냄.
// 모든 타입에 할당 가능한 하위 타입이지만
// 자기자신을 제외하고는 어떤 타입도 never에 할당할 수 없음 (any도 불가)

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('Something failed');
}

function infiniteLoop(): never {
    while(true) {}
}
