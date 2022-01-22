/********  클래스 타입  ********/

// 자바처럼 클래스가 특정 계약을 충족시키도록 하는 방법 또한 사용가능.
// 인터페이스는 필드, 메서드 모두 public임.
// 그래서 클래스 인스턴스의 private에서는 특정 타입이 있는지 검사할 수 없다.

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m:number) {}
}

// setTime 함수 설정
interface SetTimeClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class SetTimeClock implements SetTimeClockInterface {
    currentTime: Date = new Date();
    setTime(date: Date) {
        this.currentTime = date;
    }
    constructor(h: number, m:number) {}
}




