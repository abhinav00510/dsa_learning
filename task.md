'''Math Fucntion'''

Math.floor() ---> pushes the number towards smaller number
Math.ceil() ---> pushes the number towards greater number
Math.abs() ---> converts negative to positive
Math.round() ---> above 0.5 value is converted to its greater number
Math.trunc() ---> removes the decimal values
Math.pow(base,power) ---> used to do exponential calculation
Math.max(values) ---> returns the maximun value
Math.random() ---> generates randomo value from 0 to 1
toFixed(digits) ---> returns the digits after the decimal point



// Generate OTP code

let otp = Math.trunc(Math.random()*10001);
let otp1 = otp.toString();

if(otp1.length === 4){
    console.log(otp1);
}



//Calculating Area of triangle using Heron's formula

const prompt = require('prompt-sync')();

let a = Number(prompt("Side a:"));
let b = Number(prompt("Side b:"));
let c = Number(prompt("Side c:"));

let s = (a+b+c)/2;

console.log(s);
let area = (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2);

console.log(`Area:${area}`);




