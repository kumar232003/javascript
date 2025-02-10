// Functions are reusable blocks of code that perform specific tasks. In JavaScript, there are two primary ways to 
// define functions: Function Declarations and Function Expressions. Both serve the same purpose, but they are used 
// in different contexts and have different behaviors.

// 1. function declaration: A function declaration is the traditional way to define a function. 
// It is declared using the function keyword followed by a function name, parameters, and the block of code.
// syntax 

function function_name(parameters){
    // code to be executed
}

// example

function greet(name){
    console.log("hello " + name);
}
greet("aditya")

// 2. function expression: A function expression defines a function and assigns it to a variable. 
// The function can be anonymous (without a name) or named. Unlike function declarations, function expressions are not hoisted.
// They are created when the code is executed.
// syntax

let functionname = function(parameters){
    // code to be executed
}

// example

let greet = function(name) {
    console.log("Hello, " + name + "!");
};

greet("Bob"); // Output: Hello, Bob!

                                                    //or
let greet = function greetPerson(name) {
    console.log("Hello, " + name + "!");
};

greet("Charlie"); // Output: Hello, Charlie!

// there is another way to declare a function known as arrow functions
// it provide a concise syntax for writing function expressions. 
// They are particularly useful for functions that are short and simple.

// syntax
const functionName = (parameters) => {
    // Code to be executed
};

// example
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4)); // Output: 7


// parameters in function
// Parameters are the input values that a function accepts when called. 
// They are defined in the function declaration or expression and allow the function to operate on specific data passed to it.
// The parameters are listed inside the parentheses ( ) of the function definition.
// You can pass multiple parameters, separated by commas, or a single parameter.
// javaScript allows you to set default values for parameters. If a parameter is not provided during the function call, the default value will be used.

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet();        // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice


// return value
// A return value is the value that a function produces and sends back to the caller. 
// This value is often used in calculations, stored in variables, or passed to other functions.
function functionName() {
    return value;  // The value to be returned
}

// rest parameters
// Rest parameters allow you to represent an infinite number of arguments as an array. 
// This is particularly useful when you don't know in advance how many arguments a function will receive.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));    // Output: 6
console.log(sum(10, 20, 30, 40));  // Output: 100
console.log(sum(5));          // Output: 5

