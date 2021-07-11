function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('1', 4));
function getName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
console.log(getName('Dirk', 'LeMerque'));
function myVoid() {
    return;
}
