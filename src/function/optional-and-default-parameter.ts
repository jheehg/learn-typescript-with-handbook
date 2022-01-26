function buildName1(firstName: string, lastName: string) {
    return firstName+" "+lastName;
}

// 파라미터 갯수가 맞지 않음.
// let result1 = buildName1("Bob");
// let result2 = buildName1("Bob", "Adams", "Sr.");
let result3 = buildName1("Bob", "Adams");


// 두번째 파라미터는 선택적으로 매개변수. ? 표시.
function buildName2(firstName: string, lastName?: string) {
    if(lastName) 
        return firstName + " "+ lastName;
    else   
        return firstName;
}

let result4 = buildName2('bob');
// let result5 = buildName2('bob', 'adams', 'Sr.');
let result6 = buildName2('bob', 'adams');


// 두번쨰 파라티머를 기본-초기화 매개변수로 지정. (parameter = defaultValue)
function buildName3(firstName: string, lastName="Smith") {
    return firstName + " "+ lastName;
}

let result7 = buildName3('bob');
// undefined일 경우 default값으로 인식됨.
let result8 = buildName3('bob', undefined);
// 갯수가 안맞아서 오류
// let result9 = buildName3('bob', 'adams', 'Sr.');
let result10 = buildName3('bob', 'adams');


// 기본-초기화 매개변수와 필수 매개변수 순서는 상관 없음.
function buildName4(firstName = 'Will', lastName: string) {
    return firstName + " "+ lastName;
}


// let result11 = buildName4('bob');
let result12 = buildName4('bob', 'adams');
// let result13 = buildName4('bob', 'adams', 'Sr.');
let result14 = buildName4(undefined, 'adams');