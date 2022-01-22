function _createSquare(config) {
    return { color: 'white', area: 100 };
}
var mySqure = _createSquare({ width: 100, opacity: 0.5 });
function FixedSquareConfig(config) {
    return { color: 'white', area: 100 };
}
var fixedMySqure = FixedSquareConfig({ width: 100, opacity: 0.5 });
var squareOptions = { colour: 'white', width: 100 };
var myFixedSqure = _createSquare(squareOptions);
