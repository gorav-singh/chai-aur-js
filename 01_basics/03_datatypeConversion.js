let score = "33";

// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 // false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "gorav" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ******************Operations************

let val = 33
let negVal = -val;
// console.log(negVal);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Gorav"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(2 + 2 + "1");
// console.log((3 + 4) * 5 % 3);   

//console.log(+true); //its a type of conversion by using a + before true converts it to number

//console.log(+""); //again "" = 0 and the + before it converts it to number

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not good practice, disrupts the code readability

let gameCounter = 100
++gameCounter
console.log(gameCounter);