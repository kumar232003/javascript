// javascript provede two main methods to sort an Array.

// 1. sort() : converts values to strings and sorts them lexicographically (A → Z or 0 → 9).
let arr = ["banana", "apple", "mango", "cherry", 4, 2, 6]
console.log(arr);
arr.sort();
console.log(arr);

let numbers = [100, 25, 4, 10, 1];
console.log(numbers);
numbers.sort((a, b) => a - b); // ascending order
console.log(numbers);
numbers.sort((a, b) => b - a); // descending order
console.log(numbers);

// 2. reverse() : reverse the order of an array
let leters = ["A", "B", "C", "D", "Z", "H"];
leters.reverse();
console.log(leters);