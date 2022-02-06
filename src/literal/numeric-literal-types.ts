// 숫자형 리터럴 타입도 있음.
// 아래와 같이 설정값 설명 시 주로 사용된다.

function rollDice(): 1|2|3|4|5|6 {
    return (Math.floor(Math.random() * 6) + 1) as 1|2|3|4|5|6;
}

const result = rollDice();

declare function setupMap(config:MapConfig): void;

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8|16|32;
}

// tileSize에 설정된 8, 16, 32 이외의 숫자가 들어갈 경우 오류 발생.
setupMap({ lng: -73.9, lat: 40.7, tileSize: 16});