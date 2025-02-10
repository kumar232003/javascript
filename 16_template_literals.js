// Template literals : it is a very powrfull feature of the javascript that makes working with sting more flesible and readable.
// Template literals use backticks (`) instead of single (') or double (") quotes.

let name = "aditya";
console.log(`hello my name is ${name}`); // You can insert variables using ${} (called interpolation).

// Features of template literals :

// 1 : multi-line string.
let oldway = "this is line 1 \n" + 
            "this is line 2 \n" +
            "this is line 3";        // this is multi-line string without using template literals.
console.log(oldway);
let newway = `this is line 1
this is line 2
this is line 2`;         // this is multi-line string with template literals.
console.log(newway);

// 2 : function call inside string.
function greet(name){
    return `hello! ${name}`;
}
console.log(`${greet("aditya")}`);

