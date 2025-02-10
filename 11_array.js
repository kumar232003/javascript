// Arrays in JavaScript are used to store multiple values in a single variable.

// creating array in js 
// 1. using [] (array literal)
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 2. using new Array() (array constructor)
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Best Practice: Prefer using [] over new Array() unless specifying a fixed size.

// manipulating array
// 1. push() : add new element at the end.
let colors = ["Red", "Green"];
colors.push("Blue");  
console.log(colors); // Output: ["Red", "Green", "Blue"]

// 2. pop() : remove the last element.
let animals = ["Dog", "Cat", "Rabbit"];
let removedAnimal = animals.pop();  
console.log(animals); // Output: ["Dog", "Cat"]
console.log(removedAnimal); // Output: "Rabbit"

// 3. unshift() : add new elements to the beginning.
let cities = ["Paris", "London"];
cities.unshift("New York");  
console.log(cities); // Output: ["New York", "Paris", "London"]

// 4. shift() : remove the first element from begning.
let countries = ["USA", "UK", "Canada"];
let removedCountry = countries.shift();  
console.log(countries); // Output: ["UK", "Canada"]
console.log(removedCountry); // Output: "USA"

// 5. splice() : add and remove elements anywhere.
let numbers1 = [1, 2, 3, 4, 5];

// Removing elements (starting from index 2, remove 2 elements)
numbers1.splice(2, 2);  
console.log(numbers1); // Output: [1, 2, 5]

// Adding elements (starting at index 1, remove 0 elements, insert new items) || array.splice(startIndex, deleteCount, item1, item2, ...)
numbers1.splice(1, 0, 10, 20);
console.log(numbers1); // Output: [1, 10, 20, 2, 5]

// 6. slice() : extract a portion of an array
let letters = ["A", "B", "C", "D", "E"];
let slicedArray = letters.slice(1, 4);  // array.slice(startIndex, endIndex)
console.log(slicedArray); // Output: ["B", "C", "D"]
console.log(letters); // Original array remains unchanged



// Method	            Action	                         Modifies Original Array?

// push()	    Add element to the end	                        ✅ Yes
// pop()	    Remove last element	                            ✅ Yes
// unshift()	Add element to the beginning	                ✅ Yes
// shift()	    Remove first element	                        ✅ Yes
// splice()	    Add/remove elements at any position	            ✅ Yes
// slice()	    Extract part of the array	                    ❌ No