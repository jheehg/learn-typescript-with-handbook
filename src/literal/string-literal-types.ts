// type 별칭을 사용하면 enum과 비슷한 형태를 갖춘다.

type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if(easing === "ease-in") {

        } else if(easing === "ease-out") {

        } else if(easing === "ease-in-out") {

        } else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// 아래 코드. Easing에 주어진 문자열이 아닐 경우 오류 발생.
// button.animate(0, 0, "uneasy");

// 함수 오버로드로 파라미터 타입 제한하는 것과 동일한 방법으로 사용된다.
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLImageElement;
function createElement(tagName: string): Element {
    return new Element();
}
