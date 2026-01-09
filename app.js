// let prompt = require('prompt-sync')()

// let age = Number(prompt("Enter your age : "))
// console.log(typeof(age));




// swapping without using temp variable
// let a = 20;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`a = ${a}, b = ${b}`);



// let a = 10;
// let b = a++;

// console.log(a);
// console.log(b);   //post-increment

// let x = 10;
// let y = ++x;

// console.log(x);
// console.log(y);   //pre-increment

// example:

// let h = 12; 
// let g = 15;
// let i = 8;

// let d = h++ + --g - i++ + ++h;
// console.log(d);


let a = 4;
a += 3*4;   // here first multiplication will take place and after that the addition of a will be done.
console.log(a);