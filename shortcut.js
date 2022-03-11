// Truthy: 'abd',true, 384, {}, []
// Falsy: "",0, false, null, undefined

let myVar = 5;
// checky any truthy
if (myVar) {
    myVar = myVar * 100
}
else {
    myVar = 0;
}

let myMoney = 50;
// not reverses the data type from truthy to falsy |Can be used to check negative or falsy|
if (!myMoney) {

}
const money = 90
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha'
}
//ternary for the above's shortcut |If the condition before ternary is true the first string will be food1 else the other string will be food1|
let food1 = money > 100 ? 'biryani' : 'cha'
let drink = (money > 100 && myVar > 100) ? 'coke' : 'water'
// add empty string to make a number into a string
const num1 = 52;
const numStr = 52 + "";
// string to number |Add the number in string to a new var|
const input = '560';
const inputNum = +input
console.log(inputNum)

//
const isActive = true;
const showUser = () => console.log('display User')
const hideuser = () => confirm.log('hide user')
isActive ? showUser() : hideuser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if left side is false then right side will be executed
isActive || hideuser();

// toggle boolean
num = !num;