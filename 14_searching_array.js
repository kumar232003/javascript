// javascript provede many type of serching methods

// 1. indexOf() : return the index of the first occurrence of the element or -1 if not found.
let colors = ["Red", "Green", "Blue", "Red"];
console.log(colors.indexOf("Red"));  // 0
console.log(colors.indexOf("Yellow"));  // -1

// 2. lastIndexOf() : return the index of the last occurrence of the element or -1 if not found.
console.log(colors.lastIndexOf("Red"));
console.log(colors.lastIndexOf("Yellow"));

// 3. find() : return the first element which matches the condition.
let numbers = [5, 12, 8, 130, 44];
let found  = numbers.find(num => num > 10);
console.log(found);

// 4. findIndex() : return the index of the first element which matches the condition.
console.log(numbers.findIndex(num => num > 100));

// 5. include() : return True if element exist in the Array otherwise False.
console.log(numbers.includes(8));
console.log(numbers.includes(4));

// 6. some() : return True if any element fullfill the condition.
console.log(numbers.some(num => num > 5));
console.log(numbers.some(num => num > 200));

// 7. every() : return True if all element fullfill the condition.
console.log(numbers.every(num => num > 1));
console.log(numbers.every(num => num < 5));