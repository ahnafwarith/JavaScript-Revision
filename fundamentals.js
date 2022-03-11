// 1. How to devlare using let and const

const fatherName = 'Kamrul';
let season = 'rainy';

// 2. Six Basic Conditions : > , < , === , !== , >= , <=
// Multiple Conditions: &&, ||

if (fatherName === 'kamrul') {
    console.log("RE")
}
else if (fatherName === 'KAmrul') {
    console.log('kokokokok')
}

// 3. Array
//index   |the position of element| 
//length,push 
const numbers = [66, 23, 43, 34]
numbers[0] = 56;

// 4. Loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
}

// 5. Functions
function name(params) {

}

// 6. Object
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'dhakar masatan']
}
const myVariable = 'age';

console.log(student['age']) // access via property name string
console.log(student[myVariable]) // access via another string name