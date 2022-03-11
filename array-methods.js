//an array of objects
const products = [
    { name: 'laptop', price: 30000, color: 'silver' },
    { name: 'iphone', price: 50000, color: 'golden' },
    { name: 'lap', price: 2000, color: 'yellow' },
    { name: 'top', price: 3400, color: 'red' }
];

//1. map() |Used to take the value of some objects from an array and declare a new array with those values///the parameter will be the value to be chained from.|
const brand = products.map(names => names.price)
//here, map() has returned all the elements into brand, a new array.


//2. forEach()  //forEach won't return
products.forEach(product => console.log(product.color))
// The array is being destructered into separate objects that was inside the array. 


//3. filter()   //filter will return an array with only the objects which fulfills the conditions that were set
const cheap = products.filter(product => product.price <= 5000)

const specificName = products.filter(product => product.name.includes('n'))

//4. find()    //find is just like filter but will only return the FIRST matched element
const special = products.find(product => product.name.includes('l'))
console.log(special)