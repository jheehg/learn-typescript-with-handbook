
 // void
 // 어떤 타입도 존재할 수 없음
 function warnUser(): void {
    console.log('This is my warning message');
 }

 // 함수 리턴타입이 아닌 변수 선언 시 사용하면 null, undefined만 할당 가능.
 let unusable: void = undefined;
 unusable = null;