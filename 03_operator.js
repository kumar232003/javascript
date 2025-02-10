// in javascript there are several type of operator
// 1. Arithmetic operator

// a. addition
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); // 30

// b. subtraction
let diff = num1 - num2;
console.log(diff); // -10

// c. multiplication
let mul = num1 * num2;
console.log(mul); // 200

// d. division
let div = num1 / num2;
console.log(div); // 0.5

// e. modulus
let mod = num1 % num2;
console.log(mod); // 10

// f. exponentiation
let exp = num1 ** num2;
console.log(exp); // 100000000000000000000

// 2. Assignment operator

// a. =
let a = 10;

// b. +=
let b = 20;
b += a; // b = b + a
console.log(b); // 30

// c. -=
let c = 30;
c -= a; // c = c - a
console.log(c); // 20

// d. *=
let d = 40;
d *= a; // d = d * a
console.log(d); // 400

// e. /=
let e = 50;
e /= a; // e = e / a
console.log(e); // 5

// f. %=
let f = 60;
f %= a; // f = f % a
console.log(f); // 0

// g. **=
let g = 70;
g **= a; // g = g ** a
console.log(g); // 700000000000000000000

// 3. Comparison operator

// a. ==
let x = 10;
let y = 20;
console.log(x == y); // false

// b. ===
console.log(x === y); // false

// c. !=
console.log(x != y); // true

// d. !==
console.log(x !== y); // true

// e. >
console.log(x > y); // false

// f. <
console.log(x < y); // true

// g. >=
console.log(x >= y); // false

// h. <=
console.log(x <= y); // true

// 4. Logical operator

// a. && (logical and)
let p1 = true;
let q1 = false;
console.log(p1 && q1); // false

// b. || (logical or)
console.log(p1 || q1); // true

// c. ! (logical not)
console.log(!p1); // false

// 5. Bitwise operator (works on 32 bit binary number)

// a. & (bitwise and)
let m = 5; // 101
let n = 3; // 011
let o = m & n; // 001
console.log(o); // 1

// b. | (bitwise or)
let p = m | n; // 111
console.log(p); // 7

// c. ^ (bitwise xor)
let q = m ^ n; // 110
console.log(q); // 6

// d. ~ (bitwise not)
let r = ~m; // 010
console.log(r); // -6

// e. << (left shift)
let s = m << 1; // 1010
console.log(s); // 10

// f. >> (right shift)
let t = m >> 1; // 10
console.log(t); // 2

// g. >>> (zero fill right shift)
let u = m >>> 1; // 010
console.log(u); // 2

// 6. String operator

// a. concatenation
let name = "aditya";
let surname = "kumar";
let fullName = name + " " + surname;
console.log(fullName); // aditya kumar

// b. string template
let age = 25;
let city = "noida";
let info = `my name is ${name} ${surname}, age is ${age} and city is ${city}`;
console.log(info); // my name is aditya kumar, age is 25 and city is noida

// 7. Typeof operator

console.log(typeof num1); // number
console.log(typeof name); // string

// 8. Ternary operator

let marks = 80;
let result = marks > 35 ? "pass" : "fail";
console.log(result); // pass

// 9. Increment and Decrement operator

// a. ++
let num = 10;
num++;
console.log(num); // 11

// b. --
num--;
console.log(num); // 10

// 10. Comma operator

let a1 = (1, 2, 3, 4, 5);
console.log(a1); // 5

// 11. Void operator

let b1 = 10;
let c1 = void(b1);
console.log(c1); // undefined

// 12. delete operator (used to delete object property)

let obj = {
    name: 'aditya',
    age: 25
};
delete obj.age;
console.log(obj); // { name: 'aditya' }

// 13. in operator (used to check object property)

let obj1 = {
    name: 'aditya',
    age: 25
};
console.log('name' in obj1); // true
console.log('city' in obj1); // false

// 14. instanceof operator (used to check object type)

let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array); // true  
console.log(arr instanceof Object); // true

// 15. new operator (used to create instance of object)

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person = new Person('aditya', 25);
console.log(person); // Person { name: 'aditya', age: 25 }

// 16. this operator (used to refer current object)

function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.info = function () {
        return this.name + " " + this.age;
    }
}
let person1 = new Person1('aditya', 25);
console.log(person1.info()); // aditya 25

