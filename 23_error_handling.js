// try, catch, finally
// The try-catch-finally statement provides a structured way to handle runtime errors without crashing the entire program.

// Basic syntax:
try{
    // code that may throw an error.
}catch(error){
    // code to handle the error.
}finally{
    // code that will always run.
}

// example:
try{
    let result = 10/0;
    console.log(result); // this must not have any error.

    let x = y + 1; // this will throw an error.
}catch(error){
    console.log("error caught: ", error.message);
}finally{
    console.log("this block will always run.");
}

// catch : The catch block receives an error object with useful properties.
// 1. error.name : the name of the error.
// 2. error.message : the error message. Human-readable description of the error.
// 3. error.stack : the stack trace of the error.
// example :
try{
    let x = y + 1;
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("thanks");
}

// throwing custom errors: You can throw custom errors using the throw statement.
// example:
function div(a, b){
    if(b === 0){
        throw new Error("can't divide by zero sorry.");
    }
    return a/b;
}
try{
    console.log(div(10, 0));
} catch(error){
    console.log(error.message);
}

// conditional error handling: you can use if-else statements to handle different types of errors.
// example:
try{
    let obj = undefined;
    console.log(obj.name);
} catch(error){
    if (error instanceof TypeError){
        console.error("TypeError occurred: ", error.message);
    }
    else{
        console.error("Unexpected Error: ", error.message);
    }
}

// javascript error types:
// 1. EvalError : An error in the eval() function has occurred. (Not used in modern javascript)
// 2. RangeError : A number "out of range" has occurred.
// 3. ReferenceError : An illegal reference has occurred.
// 4. SyntaxError : A syntax error has occurred.
// 5. TypeError : A type error has occurred.
// 6. URIError : An error in encodeURI() has occurred.
// 7. AggregateError : An error object that contains an array of errors.
// 8. InternalError : An error that occurred internally in the javascript engine.
// 9. DOMException : An error that occurred in the DOM.
// 10. Error : The base class for all error types.

// What's the difference between throw and return?
// The throw statement is used to throw an exception. It interrupts the execution of the function and passes the exception to the calling code.
// The return statement is used to return a value from a function. It does not interrupt the execution of the function.