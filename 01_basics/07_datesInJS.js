// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof(myDate))

//let myCreatedDate = new Date(2024, 0 , 25) //in JS months start from 0 => January
//let myCreatedDate = new Date(2024, 0, 25, 6, 25) //another way of declaring date with time 
// let myCreatedDate = new Date("2024-01-14") //another way of declaring date with time 
let myCreatedDate = new Date("01-14-2024") //another way of declaring date
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //gets the numerical value from 1st jan, 1970 till the declared date which helps in comparison of both the current date and time stamp

//console.log(Math.floor(Date.now()/1000));  //gives the output in seconds by dividing the milliseconds by 1000 and math.floor gives the value in integer 


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})



