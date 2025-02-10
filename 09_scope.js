// In JavaScript, scope refers to the visibility and lifespan of variables. 
// The scope determines where variables are accessible and how long they exist during the execution of the program. 
// JavaScript has three main types of scopes:
// 1.Global Scope
// 2.Local Scope
// 3.Block Scope

// Global scope
// A variable declared outside of any function or block is in the global scope. 
// This means the variable is accessible from anywhere in the code, including inside functions or blocks.
let globalVar = "I am a global variable";

function greet() {
    console.log(globalVar);  // Accessible here
}

greet();  // Output: I am a global variable
console.log(globalVar);    // Output: I am a global variable


// Local scope
// A local scope exists inside a function. Variables declared within a function are only accessible within that function. 
// These variables cannot be accessed outside the function.
function greet() {
    let localVar = "I am a local variable";
    console.log(localVar);  // Accessible inside the function
}

greet();  // Output: I am a local variable
console.log(localVar);    // Error: localVar is not defined


// Bolock scope
// Block scope refers to the scope of variables declared within a block of code, such as inside an if, for, or while statement. 
// Variables declared inside a block using let or const are only accessible within that block.
if (true) {
    let blockVar = "I am block scoped";
    const blockConst = "I am a block-scoped constant";
    console.log(blockVar);   // Accessible here
    console.log(blockConst); // Accessible here
}

console.log(blockVar);    // Error: blockVar is not defined
console.log(blockConst);  // Error: blockConst is not defined