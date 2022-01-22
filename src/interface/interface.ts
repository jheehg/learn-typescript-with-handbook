function printLabel(labeledObj: {label: string}) {
    console.log(labeledObj.label);
}

/********  첫번째 인터페이스  ********/

// 실제 파라미터에는 지정되어 있지 않은 프로퍼티가 있어도 오류가 발생하지 않는다.
// 컴파일러는 최소 필요한 프로퍼티가 있는지만 검사함.
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


// 아래와 같이 인터페이스를 구현하지 않아도 인터페이스 형태 자체로 파라미터로 사용 가능하다.
// 파라미터 검사는 오로지 해당 프로퍼티를 가졌는지, 요구하는 타입인지만 체크함.
interface LabeledValue {
    label: string;
}

function _printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let _myObj = {size: 10, label: "Size 10 Object"};
_printLabel(_myObj);


