// 1. for Loop
// The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while Loop
// The while loop is used when the number of iterations is not known and depends on a condition.

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// 3. do...while Loop
// The do...while loop is similar to the while loop, but it guarantees that the loop body is executed at least once.

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// 4. for...in Loop
// The for...in loop is used to iterate over the properties of an object.

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 5. for...of Loop
// The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).

const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}