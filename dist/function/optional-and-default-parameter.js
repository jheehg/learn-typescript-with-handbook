function buildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
var result3 = buildName1("Bob", "Adams");
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result4 = buildName2('bob');
var result6 = buildName2('bob', 'adams');
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result7 = buildName3('bob');
var result8 = buildName3('bob', undefined);
var result10 = buildName3('bob', 'adams');
function buildName4(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Will'; }
    return firstName + " " + lastName;
}
var result12 = buildName4('bob', 'adams');
var result14 = buildName4(undefined, 'adams');
