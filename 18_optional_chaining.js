// Optional Chaining (?.) : Optional chaining prevents errors when accessing nested properties of an object that might be null or undefined.
let user = {};
// console.log(user.profile.name); // show error
console.log(user.profile?.name);  // dont show any error.

// optional chaining with array.
let users = [{ name: "Alice" }];
console.log(users[0]?.name); // Output: Alice
console.log(users[1]?.name); // Output: undefined (No error)

// Nullish Coalescing (??) : The nullish coalescing (??) operator provides a default value when dealing with null or undefined, but not falsy values like 0, "", or false.
// Example Without Nullish Coalescing
let username = null;
let displayName = username || "Guest"; 
console.log(displayName); // Output: Guest
// Example with nullish coalescing
let username2 = "";
let displayName2 = username2 ?? "Guest2"; 
console.log(displayName2); // Output: " "