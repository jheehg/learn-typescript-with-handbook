// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Enum은 0부터 시작해 번호를 매김.
// 값을 임의로 지정해서 바꿀수도 있다.
// 아래와 같이 첫번째에 시작하는 번호를 지정하거나,
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;

let colorName = Color1[1];
console.log(colorName);

// 아예 지정해줄 수 도 있음.
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Blue;
