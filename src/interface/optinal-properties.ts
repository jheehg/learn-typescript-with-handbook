/********  선택적 프로퍼티  ********/
// 인터페이스의 모든 프로퍼티가 필요한 것은 아님.
// 선택적 프로퍼티를 가지는 인터페이스는 선언시 프로퍼티에 ? 를 붙여 사용한다.
// 인터페이스가 가진 프로퍼티를 선택적으로 사용 가능하면서도 선언된 프로퍼티만 사용할 수 있도록 제한함.

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: 'black'});
