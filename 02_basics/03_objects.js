//There are two types if declaring objects - literal and constructor
//When an object is created using contructor then SINGLETON is the object which is created

//Singleton
// Object.create  => constructor method

//creating a symbol
const mySym = Symbol("key1")

//Object literals
const JsUser = {
    name : "Gorav",
    "full name" : "Gorav Singh",
    [mySym] : "mykey1",
    age : 24,
    location : "Jaipur",
    email : "gorav@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Sunday"]
    
    //note - all the above keys i.e name, age, location are all stored as strings, here we dont need to write them as "name"
}

//console.log(JsUser.location) //one way of accessing objects but its not the correct way

//console.log(JsUser["location"]); //here we have to write it as JsUser["location"] because in this way to accessing the object we need to address it to the machine that its a string named "location"  which we dont have to do in the above method which is object.location

//console.log(JsUser["full name"]); //now we can't access the full name key without the square brackets [] because we have declared it as a string only

//console.log(JsUser[mySym]);

JsUser.email = "gorav@rediff.com"; //we can overwrite the value of an object like this

//Object.freeze(JsUser); //here we can use the freeze method to stop anyone from overwriting the object values

JsUser.email = "rakesh@gmail.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());