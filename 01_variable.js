// there are three way to declare a variable in javascript
// var, let, const

// var is a global/function scope variable and it can be re-declared and updated

var name = "aditya"
console.log(name) // aditya

var name = "aditya kumar"  // re-declared
console.log(name) // aditya kumar

name = "aditya kumar singh" // updated
console.log(name) // aditya kumar singh 

// let is a block scope variable and it can be updated but not re-declared

let age = 25
console.log(age) // 25

age = 26 // updated 
console.log(age) // 26

// const is a block scope variable and it can not be updated and re-declared

const city = "noida"
console.log(city) // noida

