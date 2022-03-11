// 1. array destructuring
// for array the values will be taken index wise
const numbers = [43, 65];
/* const x = numbers[0];
const y = numbers[1]; */

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums;
}
const [first, second] = boxify(90, 50);
console.log(first, second);

//object destructuring  
//|for object the serial doesn't matter|
const { name1, age1 } = { name: 'alu', age: 14 };
const { name2, age2 } = { id: 12, name: 'alu', age: 14 };

const employee = {
    ide: 'VScode',
    designation: 'developer',
    languages: ['python', 'javascript'],
    specification: {
        height: 55,
        weight: 342,
        address: 'kunarkali'
    }
}

const { machine, ide } = employee;
// need to use chaining when taking from a property inside a property
const { weight, height } = employee?.specification;
// used ternany for optional chaining so that if no value is found there is no error