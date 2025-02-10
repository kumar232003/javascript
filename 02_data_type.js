// java script have two main categoty of data type
// 1. Primitive data type
// 2. Non-primitive data type of reference data type

// Primitive data type
// 1. Number
let num1 = 34;
let num2 = 3.4;
let num3 = -34;

// 2. String
let name = "aditya"; // string can be written in double quote
let city = 'noida'; // single quote can also be used to write string
let country = `india`; // template literals means it can be used to write multi-line string and also can be used to write string with variable

// 3. Boolean
let isTrue = true;
let isFalse = false;

// 4. Undefined
let x;

// 5. Null
let y = null;

// 6. Symbol
let sym1 = Symbol('foo'); // symbol is a unique and immutable data type used to identify object property

// 7. BigInt
let bigInt = 1234567890123456789012345678901234567890n; // bigInt is used to represent large number

// Non-primitive data type or reference data type
// 1. Array
let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd', 'e'];
let arr3 = [1, 'a', true, null, undefined];

// 2. Object
let obj_name = {
    name: 'aditya',
    age: 25,
    city: 'noida'
};
console.log(obj_name); // { name: 'aditya', age: 25, city: 'noida' }
console.log(obj_name.name); // aditya

// 3. Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// 4. Date
let date = new Date();
console.log(date); // 2021-07-17T12:17:00.000Z  ||  year-month-dateTtime:minute:second:millisecond

// 5. RegExp
let reg = /aditya/; // regular expression is used to search for a pattern in a string example: email validation
console.log(reg); // /aditya/

// type checking in javascript by using typeof operator

console.log(typeof num1); // number
console.log(typeof name); // string
console.log(typeof isTrue); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object
console.log(typeof sym1); // symbol
console.log(typeof bigInt); // bigint
console.log(typeof arr); // object
console.log(typeof obj_name); // object
console.log(typeof add); // function
console.log(typeof date); // object
console.log(typeof reg); // object
