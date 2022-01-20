// Any
// 알지 못하는 동적인 값에 사용.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// any타입일 경우, 런타임엔 존재함으로 인식. 컴파일러는 검사 안함.
notSure.ifItExists();
notSure.toFixed();

// Object 타입으로 선언 시 , 어떤 타입이든 할당이 가능하지만
// 실제로 메서드가 존재하던 존재하지 않던 아래와 같이 호출을 임의로 할 수 없음.
let prettySure: Object = 4;
//prettySure.toFixed();

// 배열 중 일부의 타입만 알고 있을 경우에도 사용
let anyList: any[] = [1, true, "tree"];
