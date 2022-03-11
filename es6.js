const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'dhakar masatan']
}
const myVariable = 'age';

const numbers = [66, 23, 43, 34]

//1. template string
const about = `My Name is ${student.name} WITH AGE ${student.age}, has number ${numbers[2]}, also liked movies ${student.movies[0]}`;
console.log(about)

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (number) => number + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    /* No default return is here */
    const sum = num1 + num2
    return sum;
}

//3. Spread Operator  |Used to separate a new array with properties from an old array so that is the properties of the old array is changed the properties of the new one won't be changed|
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 99]

numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers)