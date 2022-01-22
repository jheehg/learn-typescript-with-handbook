function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function _printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var _myObj = { size: 10, label: "Size 10 Object" };
_printLabel(_myObj);
