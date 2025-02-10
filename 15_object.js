// object literals : creating object
// object literals is a simple way to create an object using {}
let person = {
    name : "aditya",
    age : 25,
    city : "Azamgarh"
}
console.log(person.name);
console.log(person.age);

// adding new properties.
person.country = "India";
console.log(person.country);

// updating properties
person.country = "Japan";
console.log(person.country);

// deleting properties
console.log(person);
delete person.country;
console.log(person);

// Object methods : function in side a object.
let person1 = {
    name : "aditya",
    age : 22,
    greet : function() {
        return `hello my name is ${this.name}.`;  // this keyword refers the current object.
    }
};
console.log(person1.greet());

// short hand method
let user = {
    name : "adi",
    greet() {
        return `Hii, I am ${this.name}`;
    }
}
console.log(user.greet());

// loop through an object
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2021
};
for (let key in book){
    console.log(`${key} : ${book[key]}`);
}

// object.keys(object_name) : return all keys.
console.log(Object.keys(book));

// object.values(onject_name) : return all values.
console.log(Object.values(book));

// object.entries(object_name) : return all key - value pair.
console.log(Object.entries(book));

/* ------------------------------------------------------------------------------------------------------------------------- */

// object distructuring : allows to extract properties from an object and save it into variables.
const {name, age, city} = person;  // the variable name must match the key name.
console.log(name);
console.log(age);
console.log(city);

// renaming variable while distructuring
const { name : nam, age : umar} = person;
console.log(nam);
console.log(umar);

// providing default values.
const { name : nam1, age : umar1, country1 = "Nepal"} = person;
console.log(nam1);
console.log(umar1);
console.log(country1);

// spread operators : The spread operator (...) allows copying, merging, or expanding objects and arrays.
const car = { brand: "Tesla", model: "Model S" };
const carcopy = {...car};  // create the copy of the object car
console.log(carcopy);

// merging objects.
const userDetails = { name: "Alice", age: 25 };
const userLocation = { city: "New York", country: "USA" };
const fulldetails = {...userDetails, ...userLocation};  // this will merge the userdetails and userLocation objects.
console.log(fulldetails);

// updating properties in an object.
const updatecar = {...car, speed: "900 km/h"};
console.log(updatecar);

// spread operator with an array.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// removing property using spread.
const student = { name: "John", age: 20, grade: "A" };
const { grade, ...rest} = student;
console.log(rest);