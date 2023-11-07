//  Task 1
//  Write a function that takes two numbers (a and b) as argument
//  Sum a and b
//  Return the result

const add = (a:number, b:number):number => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const typeOfValue = (value:any):any => typeof value;

console.log(typeOfValue(2)); // number
console.log(typeOfValue((true))); // boolean
console.log(typeOfValue({ name: 'Ērika', city: 'Liepāja' })); // obejct
console.log(typeOfValue(null)); // obejct
console.log(typeOfValue('Hello')); // string
console.log(typeOfValue([1, 2, 3, 4])); // object

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const compareTwoValues = (a:any, b:any):any => {

};
