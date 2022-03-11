// 1. JSON

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

// convert to JSON format |To send to API|
const stringified = JSON.stringify(employee)

//convert to normal from JSON  |To use data after receiving from API|
const normal = JSON.parse(stringified)

//2. fetch
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)) */

// keys, values  |To get just keys or values inside an object|
const keys = Object.keys(employee);
const values = Object.values(employee);

// forEach
//|To loop through an array and get values|
const numbers = [23, 23, 432, 243];
numbers.forEach(numbers => console.log(numbers))
console.log(numbers.map(num => num * 2))

// for of |To loop through an array like objects|
// for in |To loop on an object|

// add or remove from an array using dots
const products = [
    { name: 'laptop', price: 30000, color: 'silver' },
    { name: 'iphone', price: 50000, color: 'golden' },
    { name: 'lap', price: 2000, color: 'yellow' },
    { name: 'top', price: 3400, color: 'red' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
// copy products array and then add newProduct 
const newProducts = [...newProduct, newProduct]

// create a new array without one specific item.
// remove phone means create a new array without the new phone

const remaining = products.filter(product => product.name !== 'phone')