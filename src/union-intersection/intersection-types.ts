// 여러타입을 하나로 결합.
// 기존 타입을 합쳐 필요한 기능을 모두 가진 단일 타입을 얻을 수 있음.
// 에러 핸들링을 분리하지만 ArtistsResponse 단일 타입으로 합치게 된다.
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[]; 
}

interface ArtistsData {
    artists: { name: string }[]; 
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if(response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
}


// 교차타입 믹스인

class Person {
    constructor(public name: string) {}
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name: string) {
        console.log(`Hello. I'm ${name}.`);
    }
}

// Partial<T> : 타입 T의 모든 프로퍼티를 Optional 형태로 변경해준다.
function extend<First extends {}, Second extends {}>
(first: First,
 second: Second): First & Second 
{
    const result: Partial<First & Second> = {};
    // for..in 반복문은 프로토타입에 있는 메서드까지 탐색하므로 
    // Person 또는 ConsoleLogger 클래스가 가지고 있는 프로퍼티만 result에 할당하기.
    for(const prop in first) {
        if(first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }

    for(const prop in second) {
        if(second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }
    return result as First & Second;   
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
// Person, ConsoleLogger이 결합되어 모든 프로퍼티 사용이 가능하다.
jim.log(jim.name);
