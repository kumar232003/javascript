// JavaScript provides several powerful array iteration methods to loop through and manipulate arrays efficiently.

// 1. forEach() : Iterating over an array without returning a new array.
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// 2. map() : Creating a new array by applying a function to each element. || Original array remains unchanged.
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(n => n * n);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 3. filter() : selecting elements in an array that meet a condition and return the new array and the orignal array remain unchanged.
let ages = [10, 18, 25, 30, 40];
let adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [18, 25, 30, 40]

// 4. reduce() : Reduce an Array to a Single Value || Takes an accumulator and current value as arguments.
let number2 = [1, 2, 3, 4, 5]
let sum = number2.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
console.log(sum);

// 5. find() : find the first matching element. || if no match is find then return undefined.
let students = [
    {name: "aditya", age: 22},
    {name: "aman", age: 23},
    {name: "ambuj", age: 15}
]

let find_adult = students.find(student => student.age >= 18)
console.log(find_adult) 

// 6. some() : check if any element matches the condition and return true if one of the element matches the condition.
let number3 = [1, 2, 3, 4, 5, 6, 7]
let check1 = number3.some(num => num > 10);
let check2 = number3.some(num => num > 6);
let check3 = number3.some(num => num < 8);
console.log(check1);
console.log(check2);
console.log(check3);

// 7. every() : check if all element matches the condition and return true if all element matches the condition and return false if any of the element not matches the condition.
let check4 = number3.every(num => num >= 1);
console.log(check4);
let check5 = number3.every(num => num > 1);
console.log(check5);