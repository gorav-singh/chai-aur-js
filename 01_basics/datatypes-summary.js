//Primitive

//7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100  //datatype => number
const scoreValue = 100.5 //datatype => number

const isLoggedIn = true //datatype => boolean
const outsideTemp = null  //datatype => object
let userEmail;    //datatype => undefined

const id = Symbol('123')
const anotherId = Symbol('123')  //datatype => symbol

console.log( id === anotherId)

const bigNumber = 3265472924367282n





//Non-primitive or reference type

const heros = ["shaktiman", "spiderman", "superman"]; // datatype => object

let myObj = {
    name : "Gorav",
    age : 24
} // data type => object

const myFunction = function(){
    console.log("Hello Gorav"); //datatype => function object
}

console.log(typeof id)

// => Arrays, Objects, Functions