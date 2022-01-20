var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = 'blue';
color = 'red';
var fullName = 'Bob Bobbington';
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ".\nI'll be ").concat(age + 1, " years old next month.");
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['hello', 10];
console.log(x[0].substring(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var colorName = Color1[1];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Blue;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
prettySure.toFixed();
//# sourceMappingURL=types.js.map