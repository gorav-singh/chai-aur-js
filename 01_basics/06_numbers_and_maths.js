const score = 155;
// console.log(score)

const balance = new Number(155)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(3));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ***********************Maths************************
// console.log(Math.abs(-6));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.min(4, 3, 6, 1));
// console.log(Math.max(4, 3, 6, 1)); 

console.log(Math.random());  //value mostly is in decimal
console.log((Math.random() * 10) + 1); //with this value is always an integer i.e. always > 0

console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));