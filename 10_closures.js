// A closure occurs when a nested function (the inner function) has access to its outer function's variables even after the 
// outer function has returned.
function outerFunction() {
    let outerVar = "I am outside!";

    function innerFunction() {
        console.log(outerVar);  // Inner function has access to outerVar
    }

    return innerFunction;  // Returning the inner function
}

const closureExample = outerFunction();
closureExample();  // Output: I am outside!


// One of the most common use cases of closures is to create private variables. 
// By using closures, you can encapsulate data and prevent external access to it.
function counter() {
    let count = 0;  // Private variable

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = counter();
myCounter.increment();  // Output: 1
myCounter.increment();  // Output: 2
console.log(myCounter.getCount());  // Output: 2
myCounter.decrement();  // Output: 1
